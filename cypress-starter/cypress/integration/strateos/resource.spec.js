import ResourcePageLoc from '../../fixtures/selectors/resource_page_locators.json';
import ResourcePage from '../../robots/strateos/ResourcePage';

context('Strateos Resource Tab Test', () => {
const Page = new ResourcePage();

    describe('Strateos Resource Tab assignment', ()=>{

        beforeEach(() => {
            Page.visitStrateos();
            Page.login();
        })
        it("login into the strateos application and Adding a Resource", () => {
            Page.openMenu(ResourcePageLoc.menu);
            Page.wait(3000);
            Page.openVendorTab(ResourcePageLoc.vendorTab)
            Page.openResourceTab(ResourcePageLoc.resourceTab);
            Page.addResource(ResourcePageLoc.addResourceButton);
            Page.enterResourceName(ResourcePageLoc.resourceNameInput,'sample resource')
            Page.kindSelect(ResourcePageLoc.resourceKindSelector);
            Page.selectChemicalStructure(ResourcePageLoc.chemicalStructure);
            Page.wait(1000)
            Page.linkCompound(ResourcePageLoc.linkCompoundButton);
            Page.selectCompound(ResourcePageLoc.createdCompoundSelect);
            Page.addButton(ResourcePageLoc.createResource);
            Page.assertResource(ResourcePageLoc.resourceName,'sample resource')
        });

        it("Filter by kind and storage", () => {
            Page.openMenu(ResourcePageLoc.menu);
            Page.wait(3000);
            Page.openVendorTab(ResourcePageLoc.vendorTab)
            Page.openResourceTab(ResourcePageLoc.resourceTab);
            Page.filterByKind(ResourcePageLoc.kindFilter);
            Page.filterByChemicalStructureKind(ResourcePageLoc.chemicalStructureRadio);
            Page.filterByStorage(ResourcePageLoc.storageFilter);
            Page.filterByCold20Storage(ResourcePageLoc.cold_20);
            Page.assertResource(ResourcePageLoc.filteredResource,'Staurosporine - Selleckchem')
        });
    });
});