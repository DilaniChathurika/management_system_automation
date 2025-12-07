import import_depletions from "../pages/import_depletions";

describe("Test import file",()=>{

    Before(()=>{
        cy.get("").click();
        cy.get("").click();
    })

    it("uplaod file",()=>{
        import_depletions.filechoosebtn(filename);
        cy.contains('.xlsx').should('be.visible');
        import_depletions.importbtn();
        cy.contains('File uploaded successfully').should('be.visible');

    })
})