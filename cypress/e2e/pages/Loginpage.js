class Loginpage{

    typeemail(email){
        cy.get("#exampleInputEmail1").clear().type(email);
    }

    typepassword(password){
        cy.get("#exampleInputPassword1").clear().type(password);
    }
    clicklogin(){
        cy.get('[type="submit"]').click();
    }

}
export default new Loginpage();