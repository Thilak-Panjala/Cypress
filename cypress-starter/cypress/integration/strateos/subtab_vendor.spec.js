import xpath from '../../fixtures/selectors/vendor_page_locators.json';
import VendorPage from '../../robots/strateos/VendorPage';

context('Strateos Vendor sub Tab Test', () => {
const Page = new VendorPage();

    describe('Strateos Vendor SubTab assignment', ()=>{

        beforeEach(() => {
            Page.visitStrateos();
            Page.login();
        })
        it("login into the strateos application and create a vendor", () => {
            Page.openMenu(xpath.menu)
            Page.openVendorTab(xpath.vendorTab)
            Page.wait(3000);
            Page.openVendorSubTab(xpath.vendorsSubTab);
            Page.createNewVendor(xpath.addVendorButton)
            Page.enterVendorName(xpath.vendorNameInputField,'Sample Vendor');
            Page.submitNewVendor(xpath.createVendorButton);
            Page.assertVendorName(xpath.createdNewVendor, 'Sample Vendor');
        });
    });
});