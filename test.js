const url = require('./url');

function check(id, options) {
  const expect = require('cloudinary-core').Cloudinary.new({
    cloud_name: options.cloud_name,
    secure: options.secure
  }).url(id, options);
  
  const actual = url(id, options);

  if (expect !== actual) {
    throw Error(`Cloudinary URL has changed.\n Expect: ${expect}\n Actual: ${actual}`);
  }
  console.log(actual);
}

// The cloudinary-core library won't specify a width or height in the URL if
// there's no crop parameter.
check('cats', {cloud_name:'dance'});
check('dog', {cloud_name:'dance', width:50, crop:'fill'});
check('pony', {cloud_name:'dance', flags:'progressive'});
check('moose', {cloud_name:'dance', gravity: 'face', flags:'progressive'});
check('elephant', {
  cloud_name: 'dance',
  flags: 'progressive',
  quality: 80,
  crop: 'fit', //, fill
  gravity: 'face',
  fetch_format: 'auto',
  width: 400,
  height: 300,
  effect: 'blur:200',
});

console.log('All good');

