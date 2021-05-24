# PNG
Pure JavaScript PNG Encoder  

```js
import { PNG } from "https://taisukef.github.io/PNG/PNG.js";

const img = new Uint8Array(4);
img[0] = 0xff;
img[3] = 0xff;
console.log(img);
const bin = PNG.encode(img, 1, 1);
console.log(bin, typeof bin);
await Deno.writeFile("test.png", bin);
```
