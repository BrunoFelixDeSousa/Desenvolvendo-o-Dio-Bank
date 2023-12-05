export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private accountIsValid: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  public setName = (name: string): void => {
    this.name = name
    console.log(`Seu nome foi alterado com sucesso ${this.name}!`)
  }

  public getName = (): string => {
    return this.name
  }

  public setAccountStatus = (status: boolean): void => {
    this.accountIsValid = status;
  }
  
  public isAccountValid = (): boolean  => {
    if (this.accountIsValid) {
      return this.accountIsValid;
    }

    throw new Error('Por favor, valide sua conta')
  }

  public deposit = (valueToDeposit: number): number => {
    if(this.accountIsValid){
      this.balance += valueToDeposit;
      return this.balance;
    }

    throw new Error('Sua conta não é válida para depósito')
  }

  public withdraw = (valueToWithdraw: number): number => {
    if (!this.accountIsValid) {
      throw new Error('Sua conta não é válida para saque');
    }

    if (this.balance < valueToWithdraw) {
      throw new Error('Você não tem saldo suficiente para sacar')
    }

    this.balance -= valueToWithdraw;
    return this.balance;
  }

  public getBalance = (): number => {
    return this.balance;
  }

}
