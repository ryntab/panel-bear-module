![Panelbear](/assets/banner.png)

# Nuxt Panelbear  🐻
A simple module for using Panelbear analytics with Nuxt.js

## Installation
`npm i @ryntab/panel-bear`

Then include the module in your config.
```JSON
// Modules: https://go.nuxtjs.dev/config-modules
modules: [
	'@ryntab/panel-bear',
],
```

## Configuration
Add the configuration settings to your `nuxt.config.js`, for the minimum configuration you need to pass your Panelbear site ID. [Where to find your site ID](https://panelbear.com/docs/how-to-find-site-id/)
```JSON
panelBear: {
	id:  'YOUR-PROJECT-ID',
},
```
This can also be done by passing along your configuration object in the module.
```JSON
modules: [
	["@ryntab/panel-bear",{
		id:  "HYleEXITkCD",
	}],
],
```
 ## 
### Additional Configuration
This module supports all Panelbear configuration options. [@Configuration Docs](https://panelbear.com/docs/#configuration)

```JSON
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
```JSON
panelBear: {
	id:  'YOUR-PROJECT-ID',
	debug: true,
},
```

## Event Tracking
To track custom events, you can use the plugins track property. Event names must not include spaces or special characters.

```JSON
this.$panelBear.track("Custom-Event");
```