# Recipe Image Generation Status & Instructions for Next Agent

## Project Context
The user requested the generation of **538 healthy Indian recipes** and their corresponding AI-generated food photography. 
The recipes and JSON structure are complete, however, due to session limits on AI image generation, the images must be created in batches across multiple sessions.

## Current Progress Status
- **Total Recipes in Database:** 538 recipes
- **Location of Database:** `app/data/recipes.json`
- **Location for Generated Images:** `public/image/recipes/`
- **Total Images Successfully Generated & Linked:** 28 images
- **Remaining Images to Generate:** 510 images

### Recipes Currently Completed (Images Generated & Mapped to JSON):
1. `oats-idli`
2. `ragi-dosa`
3. `moong-dal-chilla`
4. `vegetable-poha`
5. `daliya-upma`
6. `besan-chilla`
7. `quinoa-upma`
8. `sprouts-salad`
9. `methi-thepla` (Mapped as `methi-thepla-low-oil` in JSON)
10. `palak-paratha`
11. `multigrain-idli`
12. `jowar-dosa`
13. `bajra-rotla`
14. `pesarattu-green-gram-dosa`
15. `appam-with-vegetable-stew`
16. `neer-dosa`
17. `rava-idli-with-veggies`
18. `sattu-ka-paratha`
19. `oats-cheela`
20. `millet-pongal`
21. `kanda-poha`
22. `matar-poha`
23. `brown-rice-poha`
24. `red-poha`
25. `sweet-potato-tikki` (Mapped as `sweet-potato-tikki-air-fried` in JSON)
26. `makhana-porridge`
27. `ragi-malt`
28. `oats-smoothie` *(Generated, but not yet mapped in JSON!)*

---

## Instructions for the Next Agent

When you start the new session, you must continue generating images for the remaining recipes without watermarks. 
Follow these exact steps:

### 1. Map the last generated image
The previous session generated `oats-smoothie.jpg` but ran out of limits before mapping it to the JSON. 
Write a script to update `app/data/recipes.json` so that the `coverImage` for `oats-smoothie` points to `/image/recipes/oats-smoothie.jpg`.

### 2. Identify the Next Batch
Look at `app/data/recipes.json`. 
Find the recipes where `coverImage` is still set to the default placeholder (`/image/homeimage.jpg`). 
The next logical ones in the list are:
- `almond-banana-milkshake-no-sugar`
- `green-gram-dosa`
- `horsegram-idli`
- `adai-dosa`
- `akki-roti-with-added-greens`
- `sorghum-pancake`
- `amaranth-porridge`
- `buckwheat-upma`
- `chia-seed-pudding-indian-spiced`
- `vegetable-sevai-vermicelli`

### 3. Generate Images
Use the `generate_image` tool to create beautiful, appetizing "Professional food photography" style images for 10 recipes at a time (this is the hard limit per session). Save them in `public/image/recipes/<slug>.jpg`.
*IMPORTANT: Do NOT add watermarks or logos to the images.*

### 4. Link the Generated Images to the Database
Write a python script (similar to the previous ones) to update `app/data/recipes.json`. 
Match the `slug` of the recipe to the generated image path (`/image/recipes/<slug>.jpg`) and overwrite the `coverImage` field.

### 5. Commit and Push
Run `npm run build` to ensure no errors were introduced.
Run `git add`, `git commit`, and `git push` to save the work.

### 6. Repeat
Provide an updated status file so the user can easily pass the context to the next session until all 538 recipes are completed.
