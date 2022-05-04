import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue'),
      },
      {
        path: 'me',
        component: () => import('pages/me/IndexPage.vue'),
      },
      {
        path: 'me/def',
        component: () => import('pages/me/PersonCode.vue'),
      },
      {
        path: 'ping',
        component: () => import('pages/PingPage.vue'),
      },
      {
        path: '/:catchAll(.*)*',
        component: () => import('pages/ErrorNotFound.vue'),
      },
    ],
  },
];

export default routes;
