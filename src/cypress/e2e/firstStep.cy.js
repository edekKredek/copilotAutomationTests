import HealthPlatformPage from '../pageObjects/HealthPlatformPage';

describe('test suit', () => {
  it('login step', () => {
    const page = new HealthPlatformPage();
    page.visit();
    page.acceptAll();
  })
})