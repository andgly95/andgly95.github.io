import { ConfigModel } from '../core/interfaces/config';
import appPagesConfig from '../../../../app/core/config/pages';

export class PagesConfig implements ConfigModel {
  public config: any = {};

  constructor() {
    this.config = appPagesConfig;
  }
}
