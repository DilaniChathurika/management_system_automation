import segment_assign from "../pages/segment_assign";

describe("Test segment assign",()=>{

    Before(()=>{
        cy.get("").click();
        cy.get("").click();
    });

    it("Test check boxes",()=>{
        segment_assign.clickcheckbox();
        segment_assign.clickbulkassign();
        segment_assign.clickdropdown();
        segment_assign.selectsegment();
    })

})