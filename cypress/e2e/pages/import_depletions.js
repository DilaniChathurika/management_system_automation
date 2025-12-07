class import_depletion{

    filechoosebtn(filename){
       cy.fileInput().attachFile(filename)
    }

    importbtn(){
        cy.get("").click();
    }
}
export default new import_depletion();