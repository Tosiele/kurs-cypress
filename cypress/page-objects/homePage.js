import Urls from "./urls";

const inputsTab = '#inputs-header'
const checkboxTab = '#checkbox-header'
const dropdownListTab = '#dropdownlist-header'
const hoversTab = '#hovers-header'
const addAndRemoveElementsTab = '#addremoveelements-header'
const basicAuthTab = '#basicauth-header'
const datePickerTab = '#datepicker-header'
const dragAndDropTab = '#draganddrop-header'
const formTab = '#form-header'
const keyPressesTab = '#keypresses-header'
const statusCodesTab = '#statuscodes-header'

class HomePage {

    clickInputsTab(){
        cy.get(inputsTab).click()
    }

    clickCheckboxTab(){
        cy.get(checkboxTab).click()
    }
    
    clickDropdownListTab(){
        cy.get(dropdownListTab).click()
    }
    
    clickHoversTab(){
        cy.get(hoversTab).click()
    }

    clickAddandRemoveTab(){
        cy.get(addAndRemoveElementsTab).click()
    }

    clickBasicAuthTab(){
        cy.get(basicAuthTab).click()
    }
    
    clickDatePickerTab(){
        cy.get(datePickerTab).click()
    }

    clickDragAndDropTab(){
        cy.get(dragAndDropTab).click()
    }
    
    clickFormTab(){
        cy.get(formTab).click()
    }
    
    clickKeyPressesTab(){
        cy.get(keyPressesTab).click()
    }
    
    clickStatusCodesTab(){
        cy.get(statusCodesTab).click()
    }

    visitPage() {
        const url = new Urls()
        url.visitHomePage();
    }
};
export default HomePage;