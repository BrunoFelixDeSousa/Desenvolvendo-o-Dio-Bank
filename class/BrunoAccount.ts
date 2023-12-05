import { DioAccount } from './DioAccount';

export class BrunoAccount extends DioAccount{

    constructor( name: string, accountNumber: number){
        super(name, accountNumber);
    }

    BrunoDeposit = (valueToDeposit: number): number => {
        valueToDeposit  += 10;
        this.deposit(valueToDeposit);
        return this.getBalance();
    }

}