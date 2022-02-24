import { BasePage } from '../BasePage';


export default class ProjectsPage extends BasePage {

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