class Profile{

    profile(){
        cy.get("").click();
    }

    profileselect(){
        cy.contains('Profile').click();
    }

    logout(){
        cy.contains("Logout").click();
    }

}
export default new Profile();