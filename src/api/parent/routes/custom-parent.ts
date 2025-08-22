export default {
  routes: [
    { method: 'POST', path: '/parents/register', handler: 'parent.register', config: { auth: false } },
    { method: 'POST', path: '/parents/login',    handler: 'parent.login',    config: { auth: false } },
    { method: 'GET',  path: '/parents/me',       handler: 'parent.me',       config: { auth: false } },
  ],
};
