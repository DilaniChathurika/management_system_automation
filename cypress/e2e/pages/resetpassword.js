class Resetpassword{

    reset(){
        cy.get('[href="https://dammyweb.website/auth/password/reset/email"]').click();
    }
    typeresetemail(resetemail){
        cy.xpath('//*[@id="login"]/div/div/div/div[2]/div[2]/form/input[2]',{ timeout: 100000 }).type(resetemail);
    }

    clickresetbutton(){
        cy.get('[value="Reset Password"]'),click();
    }

    backtologin(){
        cy.get('[href="https://dammywebtesting.website/login"]').click();
    }
}

export default new Resetpassword();