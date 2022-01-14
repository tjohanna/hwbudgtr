// ** TESTING BANKACCOUNT** 



const budgets = [
    {
      date: "April 1",
      name: "Income",
      from: "Old Glory Insurance",
      amount: 1000,
      tags: ["income", "yay"]
    },
    {
      date: "April 1",
      name: "Taxes",
      from: "Government",
      amount: -300,
      tags: ["taxes"]
    },
    {
      date: "April 1",
      name: "Retirement",
      from: "Country Bank",
      amount: -200,
      tags: ["retirement", "investing in the future"]
    },
    {
      date: "April 1",
      name: "Savings",
      from: "Country Bank",
      amount: -100,
      tags: ["savings", "rainy day fund"]
    },
    {
      date: "April 1",
      name: "Credit Card Payment",
      from: "NPM Express",
      amount: -100,
      tags: ["credit card"]
    },
    {
      date: "April 5",
      name: "Monthy Birthday Money from Aunt Tilda",
      from: "Aunt Tilda",
      amount: 20,
      tags: ["Aunt Tilda is the best"]
    },
    {
      date: "April 5",
      name: "Coffee",
      from: "Moon Coin",
      amount: -4,
      tags: ["coffee"]
    },
    {
      date: "April 5",
      name: "Internet",
      from: "Horizon",
      amount: -100,
      tags: ["utilities"]
    },
    {
      date: "April 3",
      name: "Groceries",
      from: "Merchant Jack's",
      amount: -76,
      tags: ["groceries"]
    },
    {
      date: "April 3",
      name: "Pet Food",
      from: "Pet Precious Inc",
      amount: -7,
      tags: ["pets"]
    },
  ];

  const numbers = []
  let bankAccount = 0;


//   console.log(budgets[0].amount);

for(let i = 0; i < budgets.length; i++){ 
// console.log(budgets[i].amount)
bankAccount = bankAccount + budgets[i].amount;
    } 

if(bankAccount <=0 ){
    console.log('RED')
} else if (bankAccount >= 1000){
    console.log('GREEN')
}
    console.log(bankAccount);

