import { PNG } from "./PNG.js";

const img = new Uint8Array(4);
img[0] = 0xff;
img[3] = 0xff;
console.log(img);
const bin = await PNG.encode(img, 1, 1);
console.log(bin, typeof bin);
await Deno.writeFile("test.png", bin);

const img2 = await PNG.decode(bin);
console.log(img2);
