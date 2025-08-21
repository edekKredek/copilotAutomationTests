
class GoogleLogIn {
    clickZaloguj() {
        cy.contains('button', /zaloguj/i).click();
    }
    clickGoogle() {
        cy.contains('button', /GOOGLE/i).click();
    }
    clickAkceptuje() {
        cy.contains('button', /Akceptuję/i).click();
    }
    login() {
        this.clickZaloguj();
        this.clickGoogle();
        this.clickAkceptuje();
    }
}


class HealthPlatform {
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

export { HealthPlatform, GoogleLogIn };



