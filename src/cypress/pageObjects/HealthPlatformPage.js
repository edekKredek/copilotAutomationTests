			class HealthPlatformPage {
				visit() {
					cy.visit('https://health-platform.online/');
				}

				acceptAll() {
					cy.contains('button', 'Akceptuj wszystkie').should('exist').click();
				}

				accept() {
					cy.contains('button', 'Akceptuj').should('exist').click();
				}

				visitAndAccept() {
					this.visit();
					this.accept();
				}
			}

			export default HealthPlatformPage;
