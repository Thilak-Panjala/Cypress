import ProjectsPage from '../../robots/strateos/ProjectsPage';
import ProjectTab from '../../fixtures/selectors/projects_page_locators.json';

context('Strateos Project Tab Test', () => {
const Page = new ProjectsPage();

    describe('Strateos Project Tab assignment', ()=>{

        beforeEach(() => {
            Page.visitStrateos();
            Page.login();
        })
        it("login into the strateos application and create a project", () => {
            Page.openProjectsTab(ProjectTab.projects_tab);
            Page.wait(5000);
            Page.createNewProject(ProjectTab.new_project);
            Page.enterProjectName(ProjectTab.project_name,'Sample project');
            Page.submitNewProject(ProjectTab.submit_new_project);
            Page.openProjectsTab(ProjectTab.projects_tab);
            Page.assertProjectName(ProjectTab.new_project_name, 'Sample project');
        });

        it("should able to favorite a project", () => {
            Page.openProjectsTab(ProjectTab.projects_tab);
            Page.wait(5000);
            Page.makeProjectFavorite(ProjectTab.favorite_icon_selection);
            Page.assertFavoriteProject(ProjectTab.favorite_project,ProjectTab.favorite_icon_class);
        });
    });
});