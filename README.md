# FVTT Project Template

## Usage

1. Clone the repository

2. Make a copy of `foundry-config-example.yaml` and rename it `foundry-config.yaml`. Give it the path to your Foundry server (where the executable is located).

3. Run `corepack enable` to enable the `yarn` package manager. I only had to do this once per computer.

4. Run `yarn install` to install dependencies. If you did step 2, it'll also create symlinks so `i18n-ally` picks up the built-in Foundry localizations.

5. Open `vite.config.ts` and fill in the package type (`module` or `system`) and package ID (must match the one in `system.json`).

`yarn run build` creates an optimized build; `yarn run dev` launches the developer mode, which gives you limited hot reload (TODO: make it less limited). Foundry must be running for these to work.

If you're making a system, in order to create a game world for testing, you may need to run the `build` script once, symlink the resulting `dist` folder into your Foundry systems directory, and relaunch the server.

`yarn run typecheck` and `yarn run lint` will check that your Typescript compiles and lint your Typescript and CSS.

## Credits

Based on [LukeAbby's Foundry starter template](https://github.com/LukeAbby/foundry-starter-template) with some help from [The Foundry VTT community wiki](https://foundryvtt.wiki/en/development/api/localization).
