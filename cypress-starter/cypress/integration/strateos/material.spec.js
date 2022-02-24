import MaterialPageLoc from '../../fixtures/selectors/material_page_locators.json';
import MaterialPage from '../../robots/strateos/MaterialPage';

context('Strateos Compounds Tab Test', () => {
const Page = new MaterialPage();

    describe('Strateos Material Creation assignment', ()=>{

        beforeEach(() => {
            Page.visitStrateos();
            Page.login();
        })
        it("login into the strateos application and creating a new material", () => {
            Page.openMenu(MaterialPageLoc.menu);
            Page.openVendorTab(MaterialPageLoc.vendorTab);
            Page.openMaterialTab(MaterialPageLoc.materialTab);
            Page.newMaterial(MaterialPageLoc.newMaterial)
            Page.addButton(MaterialPageLoc.addButton);
            Page.selectCompound(MaterialPageLoc.selectCompound);
            Page.continue(MaterialPageLoc.continue);
            Page.selectResource(MaterialPageLoc.selectResource);
            Page.selectButton(MaterialPageLoc.selectButton);
            Page.selectVendor(MaterialPageLoc.selectVendor);
            Page.selectFirstVendor(MaterialPageLoc.firstVendor);
            Page.addCostItem(MaterialPageLoc.addCostItem);
            Page.enterAmount(MaterialPageLoc.amount,"12");
            Page.selectUnits(MaterialPageLoc.unitsSelector);
            Page.selectMg(MaterialPageLoc.mgUnit);
            Page.enterCost(MaterialPageLoc.cost,"50");
            Page.checked(MaterialPageLoc.checked);
            Page.createMaterial(MaterialPageLoc.createMaterial);
            Page.assertMaterial(MaterialPageLoc.createdMaterial, 'sample resource');
        });
    });
});