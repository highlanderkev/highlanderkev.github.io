import { defineConfig } from "astro/config";
import mdx from '@astrojs/mdx';
import lit from '@astrojs/lit';
import preact from '@astrojs/preact';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'middleware'
  }),
  integrations: [mdx(), lit(), preact()],
  site: 'https://www.kevinpatrickwestropp.com/',
  vite: {
    envDir: '../'
  }
});
