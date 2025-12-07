import profilepage from "../pages/profilepage";

describe("Logout test",()=>{

    it("test logout",()=>{
       profilepage.logout();
       cy.contains('').should('be.visible');
    })
})
