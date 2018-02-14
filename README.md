# Cloudinary Micro URL

A tiny (349B), 0 dependency, fully-tested library to generate Cloudinary URLs from an options object.

The official Cloudinary js library is ~600kb. That's big.

## Installation

```sh
yarn add cloudinary-microurl
```

```sh
npm install cloudinary-microurl
```

## Usage

```es6
const cloudinaryUrl = require('cloudinary-microurl')
const url = cloudinaryUrl('twitter.jpg', {
  secure: true,
  cloud_name: 'demo',
  gravity: 'face',
  flags: 'progressive',
  quality: 80
})
```

Then:

```javascript
const cloudurl = require('cloudinary-microurl');

// 'https://res.cloudinary.com/demo/image/upload/fl_progressive,g_face,q_80/my_cool_image'
const url = cloudurl('my_cool_image', {
});

// Then use it.
const img = new Image;
img.src = url;
```


### Feature support

This library only supports the following cloudinary features:

- Secure
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


### Fetch mode

Set {source: 'fetch'} to activate cloundinary [fetch mode](http://cloudinary.com/documentation/fetch_remote_images#remote_image_fetch_url). You need to enable it in the [security options](https://cloudinary.com/console/settings/security). The image name should be a full URL.

### Thanks to the author
This library was originally created by [josephg](https://github.com/josephg)
