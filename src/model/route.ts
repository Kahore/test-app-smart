export interface Route {
  path: string;
  title: string;
  isLoginRequire: boolean;
  props?: any;
  component: any;
}
