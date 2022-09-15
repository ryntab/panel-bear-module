import * as Panelbear from '@panelbear/panelbear-js';

export default async (ctx, inject) => {

  const runtimeConfig = ctx.$config && ctx.$config.panelBear || {}
  const moduleOptions = <%= serialize(options) %>
  const options = {...moduleOptions, ...runtimeConfig}

  if (!options.id) throw new Error('No Panel Bear ID provided')

  Panelbear.load(options.id);
  Panelbear.trackPageview();

  const config = {
    enabled: options.enabled || true,
    debug: options.debug || false,
    honorDNT: options.honorDNT || false,
    autoTrack: options.autoTrack || true,
    includeURLFragment: options.includeURLFragment || false,
  }

  Panelbear.config(config)

  inject('panelBear', Panelbear)
}
