export default {
  route: {
    path: '/',
    routes: [
      {
        path: '/english',
        name: '学英语',
        component: '../English',
      },
      // {
      //   path: '/algorithm',
      //   name: '学算法',
      //   component: '../Algorithm',
      // },
      {
        path: '/pdd',
        name: '拼多多',
        component: '../PddReport',
      },
    ],
  },
  location: {
    pathname: '/',
  },
};
