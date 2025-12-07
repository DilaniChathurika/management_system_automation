import Loginpage from "../pages/Loginpage";

describe("Test Login Function",()=>{

     beforeEach(() => {
    cy.visit("https://dammywebtesting.website/login");
  });

  let data;
  before(()=>{
    cy.fixture("login").then((json)=>{
        data=json
    })
  })

  it("Login with correct credentials",()=>{
    Loginpage.typeemail(data.valid.email);
    Loginpage.typepassword(data.valid.password);
    Loginpage.clicklogin();
  })

   it("Login with correct credentials",()=>{
    Loginpage.typeemail(data.invalid.email);
    Loginpage.typepassword(data.invalid.password);
    Loginpage.clicklogin();
  })
   it("Login with correct credentials",()=>{
    Loginpage.typeemail(data.incorrect.email);
    Loginpage.typepassword(data.incorrect.password);
    Loginpage.clicklogin();
  })
})