import { BasePage } from '../BasePage';


export default class VendorPage extends BasePage {
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