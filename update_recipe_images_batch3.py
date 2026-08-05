import json

image_map = {
    "oats-cheela": "/image/recipes/oats-cheela.jpg",
    "millet-pongal": "/image/recipes/millet-pongal.jpg",
    "kanda-poha": "/image/recipes/kanda-poha.jpg",
    "matar-poha": "/image/recipes/matar-poha.jpg",
    "brown-rice-poha": "/image/recipes/brown-rice-poha.jpg",
    "red-poha": "/image/recipes/red-poha.jpg",
    "sweet-potato-tikki-air-fried": "/image/recipes/sweet-potato-tikki.jpg",
    "makhana-porridge": "/image/recipes/makhana-porridge.jpg",
    "ragi-malt": "/image/recipes/ragi-malt.jpg"
}

with open("app/data/recipes.json", "r", encoding="utf-8") as f:
    recipes = json.load(f)

updated_count = 0
for recipe in recipes:
    slug = recipe["slug"]
    if slug in image_map:
        recipe["coverImage"] = image_map[slug]
        updated_count += 1

with open("app/data/recipes.json", "w", encoding="utf-8") as f:
    json.dump(recipes, f, indent=2)

print(f"Successfully updated {updated_count} recipes with new images.")
