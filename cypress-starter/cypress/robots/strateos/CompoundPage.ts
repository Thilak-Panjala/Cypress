import { BasePage } from '../BasePage';


export default class ProjectsPage extends BasePage {
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