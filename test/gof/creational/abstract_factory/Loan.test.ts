import { CarLoan, MortgageLoan } from '../../../../src/gof/creational/abstract_factory/Loan';

test("Should create a Mortgage Loan",function(){
  const loan = MortgageLoan.create(100000,10000,240);

  expect(loan.loanId).toBeDefined()
  expect(loan.amount).toBe(100000)
  expect(loan.income).toBe(10000)
  expect(loan.installments).toBe(240)
})

test("Should not create a Mortgage Loan with more than 420 installments",function(){
  expect(()=>MortgageLoan.create(100000,10000,450)).toThrow(new Error("The maximum number of installments for motgage loan is 420")) 
})

test("Should not create a Mortgage Loan if the installments amount exceed 25% of monthly income",function(){
  expect(()=>MortgageLoan.create(200000,1000,410)).toThrow(new Error("The installment amount could not exceed 25% of monthly income")) 
})

test("Should not create a Car Loan with more than 60 installments",function(){
  expect(()=>CarLoan.create(100000,10000,72)).toThrow(new Error("The maximum number of installments for car loan is 60")) 
}) 

test("Should not create a Car Loan if the installments amount exceed 30% of monthly income",function(){
  expect(()=>CarLoan.create(200000,1000,60)).toThrow(new Error("The installment amount could not exceed 30% of monthly income")) 
})