import { ELEMENTS } from "../elements";

const el = ELEMENTS

class Profile {
    profileAcess(){
        cy.get(el.headerProfile).click();
        cy.get(el.seeProfile).click();
    }
}

export default new Profile;