# `ng-admin-lte`
**AdminLTE components for Angular**

[![Build Status](https://travis-ci.org/arutkowski00/ng-admin-lte.svg)](https://travis-ci.org/arutkowski00/ng-admin-lte)

## Installation

To install this library, run:

```bash
$ yarn add ng-admin-lte
# OR
$ npm install ng-admin-lte
```

## Usage

Import `AdminLteModule` in your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Add import
import { AdminLteModule } from 'ng-admin-lte';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // Add imported module here
    AdminLteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Adam Rutkowski](mailto:a_rutkowski@outlook.com)
