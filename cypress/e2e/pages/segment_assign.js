class Segment_assign{

    clickcheckbox(index){
        cy.get("").rowCheckbox(index).check({force:true})
    }
    clickbulkassign(){
        cy.get("").click();

    }

    clicksegment(){
        cy.get("").click();
    }
    clickdropdown(){
        cy.get("").click();
    }

    selectsegment(){
        cy.contains("").click();
    }
}
export default new Segment_assign();