from PIL import Image
import os
import glob

# Paths
recipes_dir = "public/image/recipes"
logo_path = "public/image/logo.png"

# Target images (Batch 1 and Batch 2)
batch_1 = [
    "oats-idli.jpg", "ragi-dosa.jpg", "moong-dal-chilla.jpg", 
    "vegetable-poha.jpg", "daliya-upma.jpg", "besan-chilla.jpg", 
    "quinoa-upma.jpg", "sprouts-salad.jpg", "methi-thepla.jpg"
]

batch_2 = [
    "palak-paratha.jpg", "multigrain-idli.jpg", "jowar-dosa.jpg",
    "bajra-rotla.jpg", "pesarattu-green-gram-dosa.jpg", "appam-with-vegetable-stew.jpg",
    "neer-dosa.jpg", "rava-idli-with-veggies.jpg", "sattu-ka-paratha.jpg"
]

all_images = batch_1 + batch_2

try:
    # Open the logo
    logo = Image.open(logo_path).convert("RGBA")
    
    # Process each image
    for img_name in all_images:
        img_path = os.path.join(recipes_dir, img_name)
        if not os.path.exists(img_path):
            print(f"Skipping {img_name}, not found.")
            continue
            
        with Image.open(img_path) as base_img:
            base_img = base_img.convert("RGBA")
            
            # Calculate new logo size (e.g., 20% of the base image width)
            base_w, base_h = base_img.size
            logo_w, logo_h = logo.size
            
            new_logo_w = int(base_w * 0.25)
            new_logo_h = int((new_logo_w / logo_w) * logo_h)
            
            resized_logo = logo.resize((new_logo_w, new_logo_h), Image.LANCZOS)
            
            # Position: bottom right with 20px padding
            padding = 20
            pos_x = base_w - new_logo_w - padding
            pos_y = base_h - new_logo_h - padding
            
            # Create a new transparent image the size of the base image
            transparent = Image.new('RGBA', base_img.size, (0,0,0,0))
            transparent.paste(base_img, (0,0))
            transparent.paste(resized_logo, (pos_x, pos_y), mask=resized_logo)
            
            # Convert back to RGB and save, replacing the original
            final_img = transparent.convert("RGB")
            final_img.save(img_path, "JPEG", quality=90)
            print(f"Watermarked: {img_name}")

except Exception as e:
    print(f"An error occurred: {e}")
