import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { BrunoAccount } from './class/BrunoAccount'


const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(100)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(100)
companyAccount.getLoan(100)
console.log(companyAccount)

const brunoAccount: BrunoAccount = new BrunoAccount('Bruno', 30)
brunoAccount.deposit(100)
console.log(brunoAccount);