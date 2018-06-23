#resize_images.py

from PIL import Image
import glob, os

for infile in glob.glob("img/*.jpg"):
  if "original" not in infile:
    im = Image.open(infile)
    im.save(infile, optimize = True, progression = True)
print "JPGs reformatted as progressive"