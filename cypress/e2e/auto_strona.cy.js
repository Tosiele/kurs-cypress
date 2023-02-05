import HomePage from '../page-objects/homePage';
import InputPage from '../page-objects/inputsPage';
import CheckboxPage from '../page-objects/checkboxPage';
import DropdownListPage from '../page-objects/dropdownListPage';
import HoversPage from '../page-objects/hoversPage';
import AddAndRemoveElementsPage from '../page-objects/addAndRemoveElementsPage';
import BasicAuthPage from '../page-objects/basicAuthPage';
import DatePickerPage from '../page-objects/datePickerPage';
import DragAndDropPage from '../page-objects/dragAndDropPage';
import FormPage from '../page-objects/formPage';
import KeyPressesPage from '../page-objects/keyPressesPage';
import StatusCodesPage from '../page-objects/statusCodesPage';


describe('first site automated', () => {

    beforeEach(() => {
        cy.visit('/');
    });


    it('tests checkbox section', () => {
        const homePage = new HomePage();
        homePage.clickCheckboxTab();

        const checkboxPage = new CheckboxPage();
        checkboxPage.checkBoxOne();
        checkboxPage.uncheckBoxTwo();
    })

    it('tests date picker section', () => {
        const homePage = new HomePage();
        homePage.clickDatePickerTab();

        const datePickerPage = new DatePickerPage();
        datePickerPage.pickCorrectDate();
        datePickerPage.pickIncorrectDate();

    })

    it('testes hovers section', () => {
        const homePage = new HomePage();
        homePage.clickHoversTab();

        const hoversPage = new HoversPage();
        hoversPage.hoverOverFirstElement();
        hoversPage.hoverOverSecondElement();
        hoversPage.hoverOverThirdElement();
    })

    it('tests inputs section',() => {

        const homePage = new HomePage();
        homePage.clickInputsTab();

        const inputPage = new InputPage();
        inputPage.typeNumberToField();
        inputPage.typeLetterToField();
    })
    
    it('tests basic auth section', () => {
        const homePage = new HomePage();
        homePage.clickBasicAuthTab();

        const basicAuthPage = new BasicAuthPage();
        basicAuthPage.inputInvalidCredentials()
        basicAuthPage.inputValidCredentials();
    })
    
    it.only('tests form section', () => {
        const homePage = new HomePage();
        homePage.clickFormTab();

        const formPage = new FormPage();
        formPage.inputOnlyFirstName();
        formPage.inputOnlyLastName();
        formPage.inputBothNames();
    })
    
    it('tests dropdown list section', () => {
        const homePage = new HomePage();
        homePage.clickDropdownListTab();

        const dropdownListPage = new DropdownListPage();
        dropdownListPage.chooseFirstOption();
        dropdownListPage.chooseSecondOption();
    })

    it('tests key presses section', () => {
        const homePage = new HomePage();
        homePage.clickKeyPressesTab();

        const keyPressesPage = new KeyPressesPage();
        keyPressesPage.pressKey();
    })
    
    it('tests drag and drop section', () => {
        const homePage = new HomePage();
        homePage.clickDragAndDropTab();

        const dragAndDropPage = new DragAndDropPage();

    })

    it('tests add/remove elements section', () => {
        const homePage = new HomePage();
        homePage.clickAddandRemoveTab();

        const addAndRemoveElementsPage = new AddAndRemoveElementsPage();
        addAndRemoveElementsPage.addElement();
        addAndRemoveElementsPage.addElement();
        addAndRemoveElementsPage.deleteElement();

    })

    it('tests status codes section', () => {
        const homePage = new HomePage();
        homePage.clickStatusCodesTab();
        cy.wait(1000)

        const statusCodesPage = new StatusCodesPage();
        statusCodesPage.click200StatusCode();
        statusCodesPage.click305StatusCode();
        statusCodesPage.click404StatusCode();
        statusCodesPage.click500StatusCode();
    })

});