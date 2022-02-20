import { BasePage } from '../BasePage';


export default class MaterialPage extends BasePage {
   
    visitStrateos(){
        cy.viewport(1920,1080)
        this.accessUrl('http://localhost:5555/');
    }

    login() {
      cy.get('#emailInput').type('ben.miles@strateos.com')
        .should('have.value','ben.miles@strateos.com') 
      cy.get('#passwordInput').type('Testing123!')
      cy.get('#submitButton').click();
      return this;
    }

    openMenu(dom: string) {
        this.clickOnDomElement(dom);
    }
    openVendorTab(dom: string) {
        this.clickOnDomElement(dom);
    }

    openMaterialTab(dom: string) {
        this.clickOnDomElement(dom);
    }

    newMaterial(dom: string) {
        this.clickOnDomElement(dom);
    }

    addButton(dom: string) {
        this.clickOnDomElement(dom);
    }

    selectCompound(dom: string) {
        this.clickOnDomElement(dom);
    }

    continue(dom: string) {
        this.clickOnDomElement(dom);
    }
    

    selectResource(dom: string) {
        this.clickOnDomElement(dom);
    }

    selectButton(dom: string) {
        this.clickOnDomElement(dom);
    }

    createMaterial(dom: string) {
        this.clickOnDomElement(dom);
    }

    addCostItem(dom: string) {
        this.clickOnDomElement(dom);
    }

    enterAmount(dom: string,value :string) {
        this.typeTextOnSelectedElement(dom,value);
    }

    selectUnits(dom: string) {
        this.clickOnDomElement(dom);
    }

    selectMg(dom: string) {
        this.clickOnDomElement(dom);
    }

    enterCost(dom: string,value :string) {
        this.typeTextOnSelectedElement(dom,value);
    }

    checked(dom: string) {
        this.clickOnDomElement(dom);
    }

    selectVendor(dom: string) {
        this.clickOnDomElement(dom);
    }
    
    selectFirstVendor(dom: string) {
        this.clickOnDomElement(dom);
    }

    assertMaterial(dom: string, text: string) {
        this.seesTextOnSelectedElement(dom, text);
    }
}