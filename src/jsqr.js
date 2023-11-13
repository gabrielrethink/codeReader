const jsQR = require('jsqr');
const fs = require('fs');
const jpeg = require('jpeg-js');
const images = require('./images');

const jpegData = fs.readFileSync(images[0].path);

const {
  height,
  width,
  data: imageBuffer,
} = jpeg.decode(jpegData, { useTArray: true });

const code = jsQR(imageBuffer, width, height);

console.log({ codeData: code.data, imageData: !!imageBuffer });
