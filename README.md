# Cloudinary URL

This is a simple library to generate cloudinary URLs from an options object.

Cloudinary's official JS library is ~600k (including all of lodash). Its much
too big for use in the browser. This one is ~1k.


## Usage

```
npm install cloudinary-microurl
```

Then:

```javascript
const url = require('cloudinary-microurl');

// ...
const img = new Image;
img.src = url('my_cool_image', {
  cloud_name: 'demo',
  gravity: 'face',
  flags: 'progressive',
  quality: 80
});
```


### Missing features

This library is missing a bunch of cloudinary features. If you want to add them, fork the library or submit a PR. I've only added the cloudinary features I actually use.


### Maintainance

I never wanted to write this library. If you want to maintain it, [send me an email](mailto:me@josephg.com).
