import { filterAppRDisabled } from '@/utils';
import loadable from '@loadable/component';
import type { ReactNode } from 'react';

const Layout = loadable(() => import('@/layout'));
const Count = loadable(() => import('@/pages/Count'));

export interface IAppRoute {
  path: string;
  component?: any;
  disabled?: boolean;
  children?: IAppRoute[];
  errorElement?: ReactNode | null;
  exact?: boolean;
}

const AppRoute: IAppRoute[] = [
  { path: '/count', disabled: false, component: Count },
  {
    path: '/',
    disabled: false,
    exact: true,
    component: Layout,
  },
];

export const staticAppRoute = filterAppRDisabled(AppRoute);
