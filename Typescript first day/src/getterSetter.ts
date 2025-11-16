//TODO: OOP => getter and setter
class BankAccount {
  public readonly userId:number;
   public readonly userName : string;
   private userBalance: number ;

    constructor(userId:number,userName:string,userBalance : number) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance= userBalance;
    }
    // addBalance(amount:number){
    //      this.userBalance +=amount;
    // }

    set addBalance(amount:number){
        this.userBalance += amount
    }

    get getBalance(){
        return this.userBalance
    }

    // getBalance(){
    //     return this.userBalance;
    // }
}

const mezbaAccount = new BankAccount(894,"Mezba Ul Hoque",50);

// console.log(mezbaAccount);
mezbaAccount.addBalance= 100;
console.log(mezbaAccount.getBalance);




