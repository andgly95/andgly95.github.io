- copy app and assets to metronic folder

- in pages-routing.module.ts

change in assets\metronic\app\content\pages\pages-routing.module.ts
`... children: [ { path: '', loadChildren: './components/dashboard/dashboard.module#DashboardModule' }, ... ]`
to
`... children: [ { path: '', loadChildren: '../../../../../app/routing/app-routing.module#AppRoutingModule' }, ... ]`

- this file `\assets\metronic\app\config\pages.ts`
  should look like this

```
import { ConfigModel } from '../core/interfaces/config';
// include this config
import appPagesConfig from '../../../../app/config/pages';

 export class PagesConfig implements ConfigModel {
   public config: any = {};

   constructor() {
     // change default to appPagesConfig
     this.config = appPagesConfig;
   }
 }
```

- this file `\assets\metronic\app\config\menu.ts`
  should look like this

```
// tslint:disable-next-line:no-shadowed-variable
import { ConfigModel } from '../core/interfaces/config';

import appPagesConfig from '../../../../app/config/pages';

// tslint:disable-next-line:no-shadowed-variable
export class MenuConfig implements ConfigModel {
  public config: any = {};

  constructor() {
    // change default to appPagesConfig
    this.config = appPagesConfig;
  }
}
```

- change path to flags `language-selector.component.ts`

```
[
		{
			lang: 'en',
			country: 'USA',
			flag: 'assets/metronic/assets/app/media/img/flags/020-flag.svg'
		},
		{
			lang: 'ch',
			country: 'China',
			flag: 'assets/metronic/assets/app/media/img/flags/015-china.svg'
		},
		{
			lang: 'es',
			country: 'Spain',
			flag: 'assets/metronic/assets/app/media/img/flags/016-spain.svg'
		},
		{
			lang: 'jp',
			country: 'Japan',
			flag: 'assets/metronic/assets/app/media/img/flags/014-japan.svg'
		},
		{
			lang: 'de',
			country: 'Germany',
			flag: 'assets/metronic/assets/app/media/img/flags/017-germany.svg'
		},
		{
			lang: 'fr',
			country: 'France',
			flag: 'assets/metronic/assets/app/media/img/flags/019-france.svg'
		},
	];
```
