const { test } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

  test('TC001: User can login with valid credentials', async () => {

    const loginPage = new LoginPage();
    
    await loginPage.goToLoginPage();
    await loginPage.login('test0001@gmail.com', 'Test@&3333');
    await loginPage.teardown_loginPage();
  });

