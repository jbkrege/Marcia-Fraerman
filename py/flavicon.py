#resize_images.py

from PIL import Image
import glob, os
import numpy as numpy
import cv2
from matplotlib import pyplot as plt

# plt.use('TkAgg')

# img = cv2.imread("img/squareInch_original.jpg",0)

# edges = cv2.Canny(img,100,255)

# plt.subplot(121),plt.imshow(img,cmap = 'gray')
# plt.title('Original Image'), plt.xticks([]), plt.yticks([])
# plt.subplot(122),plt.imshow(edges,cmap = 'gray')
# plt.title('Edge Image'), plt.xticks([]), plt.yticks([])

# plt.show()


# def most_frequent_colour(image):

#     w, h = image.size
#     pixels = image.getcolors(w * h)

#     most_frequent_pixel = pixels[0]

#     for count, colour in pixels:
#         if count > most_frequent_pixel[0]:
#             most_frequent_pixel = (count, colour)

#     compare("Most Common", image, most_frequent_pixel[1])

#     return most_frequent_pixel


size = 5,5

im = Image.open("img/flavicon.jpg")

im.thumbnail(size, Image.ANTIALIAS)
im.save("img/flavicon.ico")

print("done")
