import * as Panelbear from '@panelbear/panelbear-js';
export default async (ctx, inject) => {

  const runtimeConfig = ctx.$config && ctx.$config.panelBear || {}
  const moduleOptions = <%= serialize(options) %>
  const options = {...moduleOptions, ...runtimeConfig}

  if (!process.client) return
  if (!options.id) {
    console.warn('No Panel Bear ID provided 🐻', 'https://github.com/ryntab/panel-bear-module')
    return
  }

  const config = {
    enabled: options.enabled || true,
    debug: options.debug || false,
    scriptSrc: [window.location.origin, options.scriptSrc || null].join('/'),
    honorDNT: options.honorDNT || false,
    autoTrack: options.autoTrack || true,
    includeURLFragment: options.includeURLFragment || false,
  }

  Panelbear.load(options.id, config);
  Panelbear.trackPageview();

  inject('panelBear', Panelbear)
}
