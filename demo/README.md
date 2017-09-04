# `ng-admin-lte` demo projects

> This folder contains two demo-projects (`esm` and `umd` folders) for [ng-admin-lte](https://github.com/arutkowski00/ng-admin-lte). These demo projects may help you to test whether ng-admin-lte supports AOT/JIT/UMD builds or not.
>
> - `esm` folder contains Angular project that is built using [@angular/compiler](https://www.npmjs.com/package/@angular/compiler) and [Webpack](https://webpack.js.org/). This demo project utilizes ESM (pure ES2015) sources of ng-admin-lte to do two kind of compilations:
>   - [AOT](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html) (ahead-of-time) compilation.
>   - [JIT](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html) (just-in-time) compilation.
>
> - `umd` folder contains Angular project that is being built and assembled in browser by [SystemJS](https://github.com/systemjs/systemjs). This demo project utilizes [UMD](https://github.com/umdjs/umd) bundle of ng-admin-lte.

Demo-projects are created as an alternative to `npm link` command. You may simply delete this `demo` folder if you prefer to use [yarn link](https://yarnpkg.com/en/docs/cli/link) instead to check how ng-admin-lte is being built.

# Quick Start

```bash
# Assuming the you are already in ng-admin-lte/demo folder

# Install all dependencies
yarn install

# Start watching library dist folder and do JIT project build in watch mode.
yarn start

# Or you may simply build AOT/JIT/UMD versions all at once by running the following command
yarn build
```

# File Structure

```
ng-admin-lte
  └─ demo                           * Folder for demo applications
     ├─ esm                         * AOT/JIT demo project
     |  └─ dist                     * This folder will contain project ESM builds
     |  |  ├─ aot                   * This folder contains project build made via AOT compilation
     |  |  |  └─ index.html         * <-- RUN THIS FILE TO CHECK AOT BUILD
     |  |  |
     |  |  └─ jit                   * This folder contains project build made via JIT compilation
     |  |     └─ index.html         * <-- RUN THIS FILE TO CHECK JIT BUILD
     |  |
     |  ├─ lib                      * Temporary folder with a copy of ng-admin-lte built sources
     |  ├─ src
     |  |  ├─ app                   * Demo application sources.
     |  |  ├─ index.ejs             * Main application template.
     |  |  ├─ main-aot.ts           * AOT main entry.
     |  |  ├─ main-jit.ts           * JIT main entry.
     |  |  └─ polyfills.browser.ts  * Browser polyfills.
     |  |
     |  ├─ tsconfig-aot.json        * TypeScript configuration for AOT build.
     |  ├─ tsconfig.json            * TypeScript configuration for JIT build.
     |  ├─ webpack-aot.config.js    * Webpack configuration for AOT build.
     |  └─ webpack.config.js        * Webpack configuration for JIT build.
     |   
     ├─ umd                         * UMD demo project
     |  ├─ app                      * Demo application sources.
     |  ├─ lib                      * Temporary folder with a copy of ng-admin-lte built sources
     |  ├─ index.html               * <-- RUN THIS FILE TO CHECK UMD BUILD
     |  ├─ main.ts                  * Main application entry file.
     |  └─ systemjs.config.js       * SystemJS configuration.
     |   
     ├─ .gitignore                  * List of files that are ignored while publishing to git repository
     ├─ gulpfile.js                 * Gulp helper scripts for building demos
     ├─ package.json                * NPM dependencies and helper scripts for building demos
     └─ yarn.lock                   * Yarn dependency versions lock for demo applications
```

# Getting Started

## Dependencies

#### Node/NPM
Install latest Node and NPM following the [instructions](https://nodejs.org/en/download/). Make sure you have Node version ≥ 7.0 and NPM ≥ 4.

- `brew install node` for Mac.

#### Yarn
Install Yarn by following the [instructions](https://yarnpkg.com/en/docs/install).

- `brew install yarn` for Mac.

## Installing
- Switch to `demo` folder in your console.
- `yarn install` to install required dependencies.

## Build demo projects
- `yarn build` for building AOT, JIT and UMD demo versions all at once.

You may also build projects separately:
- `yarn build:jit` - for building JIT version of demo project.
- `yarn build:aot` - for building AOT version of demo project.
- `yarn build:umd` - for building UMD version of demo project.

To see [ng-admin-lte](https://github.com/arutkowski00/ng-admin-lte) in action launch the following files in your browser:
- `ng-admin-lte/demo/esm/dist/jit/index.html` file for JIT build
- `ng-admin-lte/demo/esm/dist/aot/index.html` file for AOT build
- `ng-admin-lte/demo/umd/index.html` file for UMD build

## Build JIT project in watch mode
- `yarn start` for building JIT version of demo project and start watching for library changes.

This command may be used simultaneously in combination with [ng-admin-lte](https://github.com/arutkowski00/ng-admin-lte)'s `yarn build:watch`. As a result once you change library source code it will be automatically re-compiled and in turn the JIT demo-project will be automatically re-built and you will be able to see that changes in your browser instantly. 

## Other commands

#### Cleaning
- `yarn clean:tmp` command will clean up all temporary files like `dist`, `lib`, `*.ngsummary.json` etc.
- `yarn clean:all` command will clean up all temporary files along with `node_modules` folder. 
