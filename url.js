// Example options:

// flags: 'progressive'
// flags: ['progressive']
// quality: 80
// crop: 'fit', 'fill'
// gravity: 'face'
// fetch_format: 'auto'
// width: 300
// height: 300
// effect: blur:200

var TYPES = [
  {name: 'crop', prefix:'c'},
  {name: 'effect', prefix:'e'},
  {name: 'fetch_format', prefix:'f'},
  {name: 'flags', prefix:'fl'},
  {name: 'gravity', prefix:'g'},
  {name: 'height', prefix:'h'},
  {name: 'radius', prefix:'r'},
  {name: 'quality', prefix:'q'},
  {name: 'width', prefix:'w'},
];

module.exports = function(id, options) {
  if (!options) options = {};

  var scheme = options.secure ? 'https' : 'http';
  var cloud_name = options.cloud_name;
  if (!cloud_name) throw Error('Missing required options.cloud_name');
  
  var params = [];

  for (var i = 0; i < TYPES.length; i++) {
    var name = TYPES[i].name;
    var prefix = TYPES[i].prefix;

    if (Array.isArray(options[name])) {
      options[name].forEach(function(opt) {params.push(prefix + '_' + opt)});
    } else if (options[name] != null) {
      params.push(prefix + '_' + options[name]);
    }
  }

  var urlParams = params.length ? params.join(',') + '/' : '';
  return scheme + '://res.cloudinary.com/'
    + encodeURIComponent(options.cloud_name)
    + '/image/upload/' + urlParams
    + encodeURIComponent(id);
};

