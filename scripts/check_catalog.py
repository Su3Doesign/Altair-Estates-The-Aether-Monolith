"""Validate the public catalogue and reject accidental commercial-file publication."""
import json
import re
import subprocess
from pathlib import Path

ROOT=Path(__file__).resolve().parents[1]
CAT=ROOT/'catalog'
products=json.loads((CAT/'products.json').read_text())
assert products and len({p['id'] for p in products})==len(products)
for p in products:
    assert p['category'] in {'architecture','vegetation','worlds'}
    assert isinstance(p['price'],(int,float)) and p['price']>0
    assert p['includes'] and p['limits'] and p['availability']
    assert p['verified'] is (p['statusLabel']=='PACKAGE VERIFIED')
    if p['image']:
        path=(CAT/p['image']).resolve()
        assert path.is_relative_to(CAT.resolve()) and path.is_file()
        assert path.suffix=='.webp' and p['alt']
    assert 'purchas' in p['availability'].lower() or 'not offered' in p['availability'].lower()
html=(CAT/'index.html').read_text()
for p in re.findall(r'(?:src|href)="([^"#]+)"',html):
    if not p.startswith(('http:','https:','mailto:')):assert (CAT/p).exists(),p
tracked=subprocess.check_output(['git','ls-files','-z'],cwd=ROOT).decode().split('\0')
for p in tracked:
    if not p:continue
    assert not p.startswith(('production/','releases/','private/')),'Private path tracked: '+p
    assert Path(p).suffix.lower() not in {'.blend','.blend1','.glb','.fbx','.usdc','.obj','.zip','.key','.pem'},p
    assert Path(p).name not in {'.env','.env.local'},p
print(f'PASS: {len(products)} product records, local media, truthful availability and public-file boundaries.')
