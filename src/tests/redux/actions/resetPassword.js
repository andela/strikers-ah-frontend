import getSocialUser from '../../../redux/actions/socialLogin';

describe('`action.jsx`', () => {
  test('should decode the token', () => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZmlyc3RuYW1lIjoiaGFyZXJpbWFuYSIsImxhc3RuYW1lIjoiZnJhbmsiLCJ1c2VybmFtZSI6ImZyYW5rLWhhcmVyaW1hbmE1NzgwIiwiZW1haWwiOiJoYXJmcmFuazJAZ21haWwuY29tIiwiaW1hZ2UiOiJodHRwczovL2xoNi5nb29nbGV1c2VyY29udGVudC5jb20vLW5kRGZtZjBJallrL0FBQUFBQUFBQUFJL0FBQUFBQUFBQXQ0L2ZkTEJmOFlfcTlFL3Bob3RvLmpwZyIsImlhdCI6MTU1ODIwNDAzNiwiZXhwIjoxNTU4MjkwNDM2fQ.a3A3rffzCEjToB7tRvWZ8TXI16vVKGG8SL67CRTv-GQ';
    const res = getSocialUser(token);
    expect(res.type);
    expect(res.payload);
  });
});
