import crypto from 'crypto'

export default abstract class Loan{
  abstract rate: number;

  constructor(readonly loanId:string,readonly amount:number,readonly income:number,readonly installments:number,readonly type:string){}

  static create(amount: number, income:number, installment:number ){
    throw new Error('This method is abstract')
  }
}

export class MortgageLoan extends Loan{
  rate = 10

  constructor(loanId:string, amount: number,income:number,installments:number){
    super(loanId,amount,income,installments, "mortgage")
    if(installments > 420){
      throw new Error("The maximum number of installments for motgage loan is 420")
    }
    if(income * 0.25 < amount/installments){
      throw new Error("The installment amount could not exceed 25% of monthly income")
    }
  }
  static create(amount: number, income:number, installment:number ){
   const loadId = crypto.randomUUID();
   return new MortgageLoan(loadId,amount,income,installment)
  }
}

export class CarLoan extends Loan{
  rate = 10

  constructor(loanId:string, amount: number,income:number,installments:number){
    super(loanId,amount,income,installments, "mortgage")
    if(installments > 60){
      throw new Error("The maximum number of installments for car loan is 60")
    }
    if(income * 0.30 < amount/installments){
      throw new Error("The installment amount could not exceed 30% of monthly income")
    }
  }
  static create(amount: number, income:number, installment:number ){
   const loadId = crypto.randomUUID();
   return new CarLoan(loadId,amount,income,installment)
  }
}