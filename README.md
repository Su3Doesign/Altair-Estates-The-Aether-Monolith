# Altair Objects

The public catalogue for an independent collection of architectural elements and procedural vegetation from **Altair Estates: The Aether Monolith**. Concept, design and art direction by Sumanth.

This repository contains the website, product descriptions, freshly rendered previews and release documentation. Editable assets and the production source are **not published here**. A public catalogue does not grant a licence to redistribute its images or obtain the commercial asset files.

## Run the catalogue

```sh
python3 -m http.server 5174 --bind 127.0.0.1
```

Open the repository root in the local server. The HTML entry point is `index.html`; styles, scripts, product data and images stay in `catalog/`. The existing `catalog/index.html` also works.

For GitHub Pages, open **Settings → Pages**, select **Deploy from a branch**, and choose **main → / (root)**, then save. The root `.nojekyll` file lets Pages serve the static files directly. Relative asset paths support GitHub's repository subdirectory URL.

The static site has no package-manager dependencies, remote fonts, analytics, wallet connection or payment integration. For another static host, publish `index.html` and `catalog/`. There is no custom deployment workflow.

```sh
python3 scripts/check_catalog.py
```

## Product status

The first Blender-native collection contains a cedar gatehouse, glass-block pavilion, modular courtyard arch, and six tree species with three variations per species. Gate leaves, practical lights, pavilion glow and tree sway have product-specific controls. Exact package status is recorded in `catalog/products.json`.

The mansion and full estate are a separate engineering-preview track. They use the original procedural material edition, omit external props and vehicles, and need a full visual and performance review before commercial release. They are not advertised as a finished Unreal project.

“Package verified” means the file reopened in Blender and passed dependency and specified control checks. It does **not** mean legal clearance, marketplace approval, Unreal compatibility, game performance certification or that purchasing is open. Listed prices are proposed USD launch prices.

## Working on this project

- Use the existing isolated checkout; do not create a worktree unless requested.
- Car Mansion is the reference source. Work and publication for this collection belong in Altair Estates.
- Keep `production/`, `releases/` and `private/` out of Git and out of the public deployment.
- Private release archives, source provenance, checksums and verification reports are retained in the cloud workspace. A clone of this public repository does not restore them. Back them up privately before disposing of the workspace.
- Do not copy portfolio car renders, third-party models, scans, logos or reference artwork into this catalogue.
- Publish truthful compatibility, included-content and disclosure information; do not describe a preview as a completed sale product.

See [validation results](docs/VALIDATION.md), [release scope](docs/RELEASE-SCOPE.md), [distribution strategy](docs/DISTRIBUTION.md), [finishing brief](docs/FINISHING-BRIEF.md), [Unreal handoff](docs/UNREAL-HANDOFF.md), and the [optional NFT design](docs/NFT-PLAN.md).
