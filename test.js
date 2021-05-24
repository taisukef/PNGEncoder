import { encodePNG } from "./encodePNG.js";

const img = new Uint8Array(4);
img[0] = 0xff;
img[3] = 0xff;
console.log(img);
const bin = encodePNG(img, 1, 1);
console.log(bin, typeof bin);
await Deno.writeFile("test.png", bin);

class ImageData {
  constructor(img, w, h) {
    this.data = img;
    this.width = w;
    this.height = h;
  }
};
const bin2 = encodePNG(new ImageData(img, 1, 1));
console.log(bin2, typeof bin2);
await Deno.writeFile("test2.png", bin2);

//const img2 = await PNG.decode(bin);
//console.log(img2);
