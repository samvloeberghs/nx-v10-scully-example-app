import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
const {DisableAngular} = require('scully-plugin-disable-angular');
setPluginConfig(DisableAngular, {
  removeState: true
})
export const config: ScullyConfig = {
  projectRoot: "./apps/nx-v10-scully-example-app/src",
  projectName: "nx-v10-scully-example-app",
  outDir: './dist/static',
  defaultPostRenderers: [DisableAngular],
  routes: {
  }
};
