import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (amount: number): number => {
    if (this.isAccountValid()) {
      const newBalance = this.deposit(amount);
      return newBalance;
    } else {
      throw new Error('Sua conta não é válida; você não pode solicitar um empréstimo.');
    }
  }
}
