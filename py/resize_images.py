#resize_images.py

from PIL import Image
import glob, os

# size = 128, 128
width = 2560.0

for infile in glob.glob("img/*.jpg"):
  file_name, ext = os.path.splitext(infile)

  im = Image.open(infile)

  img_width, img_height = im.size
  print img_width, img_height
  r = width/img_width

  if r < 1:
    outfile = file_name+"_original"+ext
    os.rename(infile,outfile)
    im.thumbnail((img_width*r,img_height*r), Image.ANTIALIAS)
    im.save(infile)
    print("resized "+file_name+"\t"+infile+"\t"+outfile)