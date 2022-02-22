import { BasePage } from '../BasePage';


export default class MaterialPage extends BasePage {
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