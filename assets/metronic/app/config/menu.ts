// tslint:disable-next-line:no-shadowed-variable
import { ConfigModel } from '../core/interfaces/config';
import appMenuConfig from '../../../../app/core/config/menu';

// tslint:disable-next-line:no-shadowed-variable
export class MenuConfig implements ConfigModel {
  public config: any = {};

  constructor() {
    this.config = appMenuConfig
  }
}
