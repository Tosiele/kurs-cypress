import HomePage from '../page-objects/homePage';
import InputPage from '../page-objects/inputsPage';
import CheckboxPage from '../page-objects/checkboxPage';
import DropdownListPage from '../page-objects/dropdownListPage';

describe('first site automated', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('tests inputs section',() => {

        const homePage = new HomePage();
        homePage.clickInputsTab();

        const input = new InputPage();
        input.typeNumberToField();
        input.typeLetterToField();
    })

    it('tests checkbox section', () => {
        const homePage = new HomePage();
        homePage.clickCheckboxTab();

        const checkbox = new CheckboxPage();
        checkbox.checkBoxOne();
        checkbox.uncheckBoxTwo();
    })

    it.only('tests dropdown list section', () => {
        const homePage = new HomePage();
        homePage.clickDropdownListTab();

        const dropdownList = new DropdownListPage();
        dropdownList.chooseFirstOption();
        dropdownList.chooseSecondOption();
    })

    it('testes hovers section', () => {
        const homePage = new HomePage();
        homePage.clickHoversTab();

    })

});