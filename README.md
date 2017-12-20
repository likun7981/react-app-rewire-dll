# react-app-rewire-dll
> Auto dll for react-app via react-app-rewired, use autodll-webpack-plugin


* [create-react-app](https://github.com/facebookincubator/create-react-app)
* [react-app-rewired](https://github.com/timarney/react-app-rewired)
* [autodll-webpack-plugin](https://github.com/asfktz/autodll-webpack-plugin)

## Install

```bash
$ npm install --save-dev react-app-rewire-dll
```

## Usage

In the `config-overrides.js` for [react-app-rewired](https://github.com/timarney/react-app-rewired) add code

```javascript
/* config-overrides.js */
const createRewireDll = require('react-app-rewire-dll');

module.exports = (config, env)=>{
  const rewireHost = createRewireDll(dllConfig);
  return rewireHost(config, env);
}
```
### DllConfig
keyName | type | default | description
--------|------|---------|-----------
entry | Object | `{}` | The entry points for the DLL's. 
path | string | `''` | The path for the DLL bundles, relative to webpack's output.publicPath
filename | string | `[name].js` | The filename template. <br />Same as webpack's output.filename.<br /> Examples: <br>`[name]_[hash].dll.js`

More detail config [autodll-webpack-plugin](https://github.com/asfktz/autodll-webpack-plugin#options)
> Note. only export `entry`,`path`,`filename`. Other options use default , you can't config in this rewire

## License
MIT
