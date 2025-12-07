class product_catergory{

    clickproductcreate(){
        cy.get("").click();
    }

    entername(name){
        cy.get("").type(name);
    }
    enterdes(description){
        cy.get("").type(description);
    }

    radiobtn(){
        cy.get("").check().should('be.selected');
    }
}

export default new product_catergory();