import HomePage from '../page-objects/homePage';
import InputPage from '../page-objects/inputsPage';
import CheckboxPage from '../page-objects/checkboxPage';

describe('first site automated', () => {

    beforeEach(() => {
        crypto.visit('/');
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

});