import { filterAppRDisabled } from '@/utils';
import loadable from '@loadable/component';
import type { IAppRoute } from '.';

const Hello = loadable(() => import('@/pages/Hello'));
const About = loadable(() => import('@/pages/About'));

const AppRoute: IAppRoute[] = [
  { path: '/hello', disabled: false, component: Hello },
  { path: '/about', disabled: false, component: About },
];

export const staticHomeAppRoute = filterAppRDisabled(AppRoute);
