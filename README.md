
![Panelbear](/assets/banner.png)
A simple module for using Panelbear analytics with Nuxt.js

**Panelbear has closed down, and so has this repo** You can check out their new service Cronitor: https://cronitor.io/

## Installation
`npm i @ryntab/panel-bear`

Then include the module in your config.
```JS
// Modules: https://go.nuxtjs.dev/config-modules
modules: [
	'@ryntab/panel-bear',
],
```

## Configuration
Add the configuration settings to your `nuxt.config.js`, for the minimum configuration you need to pass your Panelbear site ID. [Where to find your site ID](https://panelbear.com/docs/how-to-find-site-id/)
```JS
panelBear: {
	id:  'YOUR-PROJECT-ID',
},
```
This can also be done by passing along your configuration object in the module.
```JS
modules: [
	["@ryntab/panel-bear",{
		id:  "HYleEXITkCD",
	}],
],
```
 ## 
### Additional Configuration
This module supports all Panelbear configuration options. [@Configuration Docs](https://panelbear.com/docs/#configuration)

```JS
panelBear: {
	id:  'YOUR-PROJECT-ID',
	autoTrack: false,
	honorDNT: true,
	includeURLFragment: true,
	enabled: true
},
```
## 
### Debug Mode
For tracking locally, enable debugging mode in your config. [@Local Development](https://panelbear.com/docs/local-development/)
```JS
panelBear: {
	id:  'YOUR-PROJECT-ID',
	debug: true,
},
```

## Event Tracking
To track custom events, you can use the plugins track property. Event names must not include spaces or special characters.

```JS
this.$panelBear.track("Custom-Event");
```
