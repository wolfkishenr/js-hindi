const accountId=789685;
 let accounttype="demat"
 accountname="first account"
 //never use var because of block scope and functional scope 
var never = 89;
let accountHolder = " ";

console.table([accountId,accounttype,accountname,accountHolder,never]);
