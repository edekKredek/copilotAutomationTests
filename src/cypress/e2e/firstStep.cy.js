import HealthPlatformPage from '../pageObjects/HealthPlatformPage';

describe('test suit', () => {
  it('open and accept cookies step', () => {
    const page = new HealthPlatformPage();
    page.visitAndAccept();
  });

  it('login step', () => {
    const page = new HealthPlatformPage();
    page.visitAndAccept();
    // Add login logic here if needed
  });
})