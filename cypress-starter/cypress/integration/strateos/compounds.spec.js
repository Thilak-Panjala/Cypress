import CompoundPageLoc from '../../fixtures/selectors/compounds_page_locators.json';
import CompoundPage from '../../robots/strateos/CompoundPage';

context('Strateos Compounds Tab Test', () => {
const Page = new CompoundPage();

    describe('Strateos Compound Tab assignment', ()=>{

        beforeEach(() => {
            Page.visitStrateos();
            Page.login();
        })
        it("login into the strateos application and register a Compound", () => {
            Page.openCompoundsTab(CompoundPageLoc.compoundsTab);
            Page.wait(3000);
            Page.registerNewCompound(CompoundPageLoc.registerCompoundsButton);
            Page.drawCompound(CompoundPageLoc.drawOption);
            Page.publicCompound(CompoundPageLoc.publicCompoundToggle)
            Page.smileString(CompoundPageLoc.smilesInput,'O=c1[nH]cccc1');
            Page.nextPage(CompoundPageLoc.nextButton);
            Page.wait(2000);
            Page.enterNickName(CompoundPageLoc.nickName,'2-pyridone');
            Page.createCompound(CompoundPageLoc.createCompound);
            Page.assertCreatedCompound(CompoundPageLoc.compoundName, '2-pyridone');
        });
    });
});