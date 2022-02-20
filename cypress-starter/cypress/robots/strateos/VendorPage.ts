import { BasePage } from '../BasePage';


export default class VendorPage extends BasePage {
   
    visitStrateos(){
        cy.viewport(1920,1080)
        this.accessUrl('http://localhost:5555/');
    }

    login() {
      cy.get('#emailInput').type('ben.miles@strateos.com')
        .should('have.value','ben.miles@strateos.com') //Cypress.env('USER_NAME')
      cy.get('#passwordInput').type('Testing123!') //Cypress.env('PASSWORD')
      cy.get('#submitButton').click();
      return this;
    }

    openMenu(dom: string) {
        this.clickOnDomElement(dom);
    }
    openVendorTab(dom: string) {
        this.clickOnDomElement(dom);
    }

    openVendorSubTab(dom: string) {
        this.clickOnDomElement(dom);
    }

    createNewVendor(dom: string) {
        this.clickOnDomElement(dom);
    }

    enterVendorName(dom: string, name: string) {
        this.typeTextOnSelectedElement(dom, name);
    }

    submitNewVendor(dom: string) {
        this.clickOnDomElement(dom);
    }

    
    assertVendorName(dom: string, name: string) {
        this.seesTextOnSelectedElement(dom, name)
    }
}