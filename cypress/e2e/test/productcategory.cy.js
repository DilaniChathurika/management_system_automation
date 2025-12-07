import product_catergory from "../pages/product_catergory";

describe("test pro cat",()=>{
    before(()=>{
        cy.get("").click();
    })

    it("test po cat",()=>{
        product_catergory.clickproductcreate();
        product_catergory.entername("abc");
        product_catergory.enterdes("fdgfygfj mnjhfdgf");
        product_catergory.radiobtn();

    })
})