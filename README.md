# Cloudinary URL

This is a simple library to generate cloudinary URLs from an options object.

Cloudinary's official JS library is ~600k (including all of lodash). Its much
too big for use in the browser. This one minifies to under 1k.


## Usage

```
npm install cloudinary-microurl
```

Then:

```javascript
const cloudurl = require('cloudinary-microurl');

// 'https://res.cloudinary.com/demo/image/upload/fl_progressive,g_face,q_80/my_cool_image'
const url = cloudurl('my_cool_image', {
  secure: true,
  cloud_name: 'demo',
  gravity: 'face',
  flags: 'progressive',
  quality: 80
});

// Then use it.
const img = new Image;
img.src = url;
```


### Missing features

This library only supports the following cloudinary features:

- Crop
- Effect
- Fetch format
- Flags
- Gravity
- Width / height
- Radius
- Quality

Adding more cloudinary features is super easy, but I can't find a master list
so I just added the features I use. If you need more features, please submit a
PR.


### Maintainance

This is a library bourne of necessity, not love. I don't want to maintain this
library going forward. If you want to maintain it, [send me an
email](mailto:me@josephg.com).
