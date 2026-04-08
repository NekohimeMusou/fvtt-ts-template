# FVTT Project Template

## Usage

1. Clone the repository.

2. Make a copy of `foundry-config-example.yaml` and rename it `foundry-config.yaml`. Give it the path to your Foundry server (where the executable is located). This way, the post install script will symlink Foundry's localization database into your project so `i18n-ally` can find it. Alternatively, you can create a `foundry/lang` folder in the project root and symlink or copy Foundry's `en.json` into it yourself.

3. Run `corepack enable` to enable the `yarn` package manager. I only had to do this once per computer.

4. Run `yarn install` to install dependencies. If you did step 2, it'll also create a symlink to Foundry's built-in localizations for `i18n-ally`.

5. Open `vite.config.ts` and fill in the package type (`module` or `system`) and package ID (must match the one in `system.json`).

`yarn run build` creates an optimized build; `yarn run dev` launches the developer mode, which gives you limited hot reload (TODO: make it less limited and leverage Foundry's built-in hot reload). Foundry must be running for these to work. `yarn run typecheck` and `yarn run lint` will check that your Typescript compiles and lint your Typescript and CSS _without_ the Foundry server running.

If you're making a system, in order to create a game world for testing, you may need to run the `build` script once, symlink the resulting `dist` folder into your Foundry systems directory (make sure to rename the link to match your system/module ID), and relaunch the server.

If your Foundry server isn't running at `localhost:30000`, set the `FOUNDRY_HOST_NAME` and `FOUNDRY_PORT` environment variables. One way you can do this is to supply them on the command line, e.g. `FOUNDRY_HOST_NAME=myhost FOUNDRY_PORT=12345 yarn run build`.

## Credits

Based on [LukeAbby's Foundry starter template](https://github.com/LukeAbby/foundry-starter-template) with some help from [The Foundry VTT community wiki](https://foundryvtt.wiki/en/development/api/localization) and CSS stolen from the [Boilerplate system](https://github.com/asacolips-projects/boilerplate).
