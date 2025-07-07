import config from './sitecore.config';
import { enableDebug } from '@sitecore-content-sdk/core';
import { defineCliConfig } from '@sitecore-content-sdk/nextjs/config';
import { generateSites, generateMetadata, extractFiles } from '@sitecore-content-sdk/nextjs/tools';

if (process.env.DEBUG) {
  const debugScopes = process.env.DEBUG.split(',')
    .map((scope) => scope.trim())
    .filter(Boolean);
  console.log(`Debug enabled for scopes: [${debugScopes.join(', ')}]`);
  enableDebug(process.env.DEBUG);
}

export default defineCliConfig({
  build: {
    commands: [
      generateMetadata(),
      generateSites({
        scConfig: config,
      }),
      extractFiles({
        scConfig: config,
      }),
    ],
  },
});
