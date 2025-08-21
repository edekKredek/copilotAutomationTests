import { HealthPlatform, GoogleLogIn } from '../pageObjects/HealthPlatform';

describe('test suit', () => {
  it('open and accept cookies step', () => {
    const page = new HealthPlatform();
    page.visitAndAccept();
  });

  it('login step', () => {
    const page = new HealthPlatform();
    page.visitAndAccept();
    const googleLogin = new GoogleLogIn();
    googleLogin.login();
    // Add login logic here if needed
  });
})