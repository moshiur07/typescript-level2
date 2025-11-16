//TODO: encapsulation basically when something is restricted from outside of a class. but internally can be accessed just like access modifier. private and protected keyword is the best use for it .

class BankAccount {
  public readonly userId:number;
   public readonly userName : string;
   private userBalance: number ;

    constructor(userId:number,userName:string,userBalance : number) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance= userBalance;
    }
    addBalance(amount:number){
        return this.userBalance +=amount;
    }
}

const mezbaAccount = new BankAccount(894,"Mezba Ul Hoque",50);

console.log(mezbaAccount);
mezbaAccount.addBalance(100);
console.log(mezbaAccount);




