import { BasePage } from '../BasePage';


export default class ResourcePage extends BasePage {
   
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

    openResourceTab(dom: string) {
        this.clickOnDomElement(dom);
    }

    addResource(dom: string) {
        this.clickOnDomElement(dom);
    }

    enterResourceName(dom: string, name: string) {
        this.typeTextOnSelectedElement(dom, name);
    }

    kindSelect(dom: string) {
        this.clickOnDomElement(dom);
    }

    selectChemicalStructure(dom: string) {
        this.clickOnDomElement(dom);
    }

    linkCompound(dom: string) {
        this.clickOnDomElement(dom);
    }

    selectCompound(dom: string) {
        this.clickOnDomElement(dom);
    }

    addButton(dom: string) {
        this.clickOnDomElement(dom);
    }

    assertResource(dom: string, text: string) {
        this.seesTextOnSelectedElement(dom, text);
    }

    filterByKind(dom: string) {
        this.clickOnDomElement(dom);
    }

    filterByStorage(dom: string) {
        this.clickOnDomElement(dom);
    }

    filterByChemicalStructureKind(dom: string) {
        this.clickOnDomElement(dom);
    }

    filterByCold20Storage(dom: string) {
        this.clickOnDomElement(dom);
    }
}