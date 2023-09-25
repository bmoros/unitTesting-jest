class RateManager {
  constructor() {
    this.is_new_customer = false;
  }

  setNewCustomer(value){
    this.is_new_customer = value;
  }

  lookupTaxRate(region) {
    if (!region) {
      throw new Error("Region can't be blank!");
    }
    let taxRate = 0.3;
    if (region === "Alberta") {
      taxRate = 0.1;
    }
    if (region === "Saskatchewan") {
      taxRate = 0.2;
    }
    if (this.is_new_customer) {
      taxRate = 0.0;
    }
    return taxRate;
  }
}
module.exports = RateManager;
