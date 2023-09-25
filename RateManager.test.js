
const RateManager = require ("./RateManager");

let rateManager;

describe("test look up tax rate", () => {
    beforeEach(() => {
        rateManager = new RateManager();   //new_customer = false
    })
   
    test("default tax rate", () => {
        expect(rateManager.lookupTaxRate("Murcia")).toBe(0.3);
    })
    
    test("test supported provinces", () => {
        expect(rateManager.lookupTaxRate("Alberta")).toBe(0.1);
        
        expect(rateManager.lookupTaxRate("Saskatchewan")).toBe(0.2);
    })
    /*
    test("test new customer", () => {
       
       rateManager.setNewCustomer(true);
    
       expect(rateManager.lookupTaxRate("Alberta")).toBe(0.0);
    }) 
    /*
    /*
        If you need to test an existing function whether it throws with a set of arguments,
        you have to wrap it inside an anonymous function in expect(). 
        You must wrap the code in a function, otherwise the error will not be caught and the assertion will fail.
        Example:

         test("Test description", () => {
            expect(() => {http.get(yourUrl, yourCallbackFn)}).toThrow(TypeError);
        });
    */
    test("test region required", () => {

      //expect(() => {rateManager.lookupTaxRate(null)}).toThrow(new Error("Region can't be blank!"));

      //expect(() => {rateManager.lookupTaxRate(null)}).toThrow();

      //expect(() => {rateManager.lookupTaxRate(null)}).toThrow(Error);

      expect(() => {rateManager.lookupTaxRate(null)}).toThrow("Region can't be blank!");
    })

})
