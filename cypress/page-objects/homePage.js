import Urls from "./urls";

const inputsTab = '#inputs-header'
const checkboxTab = '#checkbox-header'
const dropdownListTab = '#dropdownlist-header'
const hoversTab = '#hovers-header'

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

    visitPage() {
        const url = new Urls()
        url.visitHomePage();
    }
};
export default HomePage;