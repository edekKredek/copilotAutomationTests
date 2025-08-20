class HealthPlatformPage {
  visit() {
    cy.visit('https://health-platform.online/')
  }

  acceptAll() {
    cy.contains('button', 'Akceptuj wszystkie').should('exist').click()
  }
}

export default HealthPlatformPage;
