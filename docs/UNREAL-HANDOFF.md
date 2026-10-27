# Native Unreal edition — implementation brief

The current packages are Blender-native. This is the concrete next task for a machine with Unreal Editor installed; an import script alone is not a completed Unreal product.

## Handoff prompt

> Work only in Altair Estates. Import the original-only Blender product edition into a new Unreal project using a supported interchange workflow. Do not use cars, Megascans/Fab downloads, scanned props, brand assets or downloaded artwork. Keep the native Blender edition intact. Use metre-to-centimetre conversion, documented axis orientation and named material slots. Rebuild or bake the project's procedural materials into owned PBR textures and engine-native materials, preserving each product's appearance. Preserve the product boundaries and identify every generated texture's source.
>
> Start with the cedar gate. Build a Blueprint with two correctly located hinges and an exposed OpenAmount 0–1 control. Add an optional smooth open/close timeline, editable speed and an interaction example that can be removed. Collision must prevent walking through the frame without blocking the open passage. Make practical light intensity adjustable. Supply a clean overview map and a demonstration map. Verify it works after migration into an empty project.
>
> For trees, prepare independently validated hero and lower-detail variants, foliage materials, correctly weighted wind, useful pivots and appropriate collision. Benchmark masked foliage and the chosen Nanite/non-Nanite path on the target engine version and hardware. Do not assume Nanite solves overdraw or wind cost. Keep the advertised use cinematic until game performance is measured.
>
> For the mansion and estate, retain named camera transforms, lens settings, shifts, aspect ratios and lighting intent. Build cinematic sequences with explicit shot ranges rather than claiming static cameras are a finished film. Audit room navigation, stairs, ground intersections, materials and missing props from buyer viewpoints. Treat lift/door interaction, water and simulation systems as separate features with their own acceptance checks.
>
> Deliver a native project that opens without missing content or external source paths, an asset overview, dependency and plugin list, supported engine version, measured performance settings, walkthrough footage and a release manifest. Report any failed or untested feature honestly. Do not publish or list the product until these deliverables have been reviewed.

## Acceptance evidence

- Fresh-project migration succeeds and only declared dependencies remain.
- Every advertised gate/light/wind control changes the expected objects.
- Geometry, materials and animation remain correct after saving and reopening.
- Walkthrough verifies scale, clearances and collision where advertised.
- Report resolution, hardware, renderer, frame time, memory and quality settings for performance claims.
- Renders come from the supplied scene. Marketing props are clearly identified and not accidentally packaged.
