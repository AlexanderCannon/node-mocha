const expect = require('expect');
const rewire = require('rewire');

let app = rewire('./app');

describe('App', () => {
  var db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);

  it('shoud call the spy', () => {
    const spy = expect.createSpy();
    spy('me', 11);
    expect(spy).toHaveBeenCalledWith('me', 11);
  });

  it('should call saveUser with user object', () => {
    const email = "email@fake.com"
    const password = "Password1"

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({ email, password });
  });
});
