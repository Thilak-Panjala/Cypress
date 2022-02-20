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

    openProjectsTab(dom: string) {
        this.clickOnDomElement(dom);
    }

    createNewProject(dom: string) {
        this.clickOnDomElement(dom);
    }

    enterProjectName(dom: string, name: string) {
        this.typeTextOnSelectedElement(dom, name);
    }

    submitNewProject(dom: string) {
        this.clickOnDomElement(dom);
    }

    makeProjectFavorite(dom: string) {
        this.clickOnDomElement(dom);
    }

    assertProjectName(dom: string, name: string) {
        this.seesTextOnSelectedElement(dom, name)
    }

    assertFavoriteProject(dom: string, className: string) {
        this.seesClassOnDomElement(dom, className);
    }
}