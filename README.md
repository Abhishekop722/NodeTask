# NodeTask

This Image Scraper build using Node.js, MongoDB, Angularjs and some third party node modules which fetch images from google and save top 15 images after passing through a compression algorithm then through a black and white filter and saved to a Local HDD.

Keyword List tab will display all the keywords searched by the user.

After clicking on any keyword on the Keyword List tab open up another page (dashboard ) which will have all the images for that particular keyword and now these images will be retrieve from Local HDD.


Follow these steps to run this image scraper.

first of all download repository on your machine.

Then install all the node dependencies using ' npm install '*

Then run using ' npm start '*

Open the server at http://localhost:1234





# dependencies: {
    "body-parser": "^1.19.0",
    "express": "^4.16.4",
    "images-scraper": "^2.0.11",
    "jimp": "^0.6.4",
    "mongoose": "^5.5.5"
 }
