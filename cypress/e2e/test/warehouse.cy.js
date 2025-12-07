import Warehouse from "../pages/Warehouse";

describe("Test warehouse",()=>{

    beforeEach(()=>{
         cy.get("").click();
    })

    before(()=>{
        cy.contains('warehouse').click();
    })

    it("Test warehouse creation",()=>{
        Warehouse.clickcreatebtn();
        Warehouse.clicktype();
        Warehouse.entername("Mathara");
        Warehouse.clicksave();
    })
})