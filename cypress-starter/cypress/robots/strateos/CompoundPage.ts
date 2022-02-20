import { BasePage } from '../BasePage';


export default class ProjectsPage extends BasePage {
   
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

    openCompoundsTab(dom: string) {
        this.clickOnDomElement(dom);
    }

    registerNewCompound(dom: string) {
        this.clickOnDomElement(dom);
    }

    drawCompound(dom: string) {
        this.clickOnDomElement(dom);
    }

    publicCompound(dom :string){
        this.clickOnDomElement(dom);
    }

    smileString(dom: string, name: string) {
        this.typeTextOnSelectedElement(dom, name);
    }

    nextPage(dom: string){
        this.clickOnDomElement(dom);
    }

    enterNickName(dom: string, name: string) {
        this.typeTextOnSelectedElement(dom, name);
    }


    assertProjectName(dom: string, name: string) {
        this.typeTextOnSelectedElement(dom, name);
    }

    createCompound(dom: string) {
        this.clickOnDomElement(dom);
    }

    assertDuplicateCompound(dom: string, text: string) {
        this.seesTextOnSelectedElement(dom, text);
    }

    assertCreatedCompound(dom: string, text: string) {
        this.seesTextOnSelectedElement(dom, text);
    }
}