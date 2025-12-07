import profilepage from "../pages/profilepage"

describe("Test profile",()=>{

    it("Test profile",()=>{
        profilepage.profile();
        profilepage.profileselect();
    cy.contains("Admin");
    cy.contains("Email:").next().should("have.text", "admin@dammy.com");
    cy.contains("Phone Number:").next().should("have.text", "12345678901");
    cy.contains("Status:").next().should("have.text", "Active");
    cy.contains("Roles:").next().should("have.text", "Sudo User");
    })

    
})