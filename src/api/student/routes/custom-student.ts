export default {
  routes: [
    { method: 'POST', path: '/students/register', handler: 'student.register', config: { auth: false } },
    { method: 'POST', path: '/students/login',    handler: 'student.login',    config: { auth: false } },
    { method: 'GET',  path: '/students/me',       handler: 'student.me',       config: { auth: false } },
  ],
};
