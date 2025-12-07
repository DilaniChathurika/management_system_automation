import resetpassword from "../pages/resetpassword";

describe("Test Reset Passowrd",()=>{
    beforeEach(()=>{
        cy.visit("https://dammywebtesting.website/login");
    })

    it("Test Reset",()=>{
        resetpassword.reset();
       cy.contains('Fairfirst B2B Connect').should('be.visible');

    })

    it("type email",()=>{
        resetpassword.typeresetemail('dilanichathurani241@gmail.com');
    })

    it("test reset button",()=>{
        resetpassword.clickresetbutton();
        cy.contains('If this user exists, we have sent you a password reset email.').should('be.visible')
    })

    it('back to login button',()=>{
        resetpassword.backtologin();
        cy.contains('log In').should('be.visile');
    })
})