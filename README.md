<p align="center">
  <img src="https://i.imgur.com/0HShUQD.png" width="700" alt="Cloudinary MicroURL">
</p>

# 🗜 Cloudinary Micro URL

A tiny (349B), 0 dependency, fully-tested library to generate Cloudinary URLs from an options object.

The official Cloudinary js library is ~600kb. This saves you 1700%. If this were a crypto coin, you wouldn't be here.

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

const img = new Image();
img.src = url
```

### Supported Features

This library only supports the following Cloudinary features:

- Fetch format
- Crop
- Effect
- Flags
- Gravity
- Height
- Radius
- Quality
- Width
- Dpr

### Fetch mode

Set {source: 'fetch'} to activate cloundinary [fetch mode](http://cloudinary.com/documentation/fetch_remote_images#remote_image_fetch_url). You need to enable it in the [security options](https://cloudinary.com/console/settings/security). The image name should be a full URL.

### Contributions

If there's an effect thats missing, create an Issue or an PR. It's SUPER EASY!

### Thanks to the original author
This library was originally created by [josephg](https://github.com/josephg)
