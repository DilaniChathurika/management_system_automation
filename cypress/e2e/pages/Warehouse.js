class Warehouse{

    clickcreatebtn(){
        cy.get("").click();
    }
    clicktype(){
        cy.get("").click();
    }
    selecttype(){
        cy.contains('distribustion center').click();
    }
    entername(disname){
        cy.get("").type(disname);
    }

    clicksave(){
        cy.get("").click();
    }

}

export default new Warehouse();