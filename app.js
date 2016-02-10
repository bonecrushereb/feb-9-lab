//ask the user his/her name
var userName = prompt("What is your name?");
console.log('The users name is ' + userName);


//ask the user his/her age
var age = prompt("What is your age?");
console.log('the users ' + ' years old');

//ask the user his/her gender
var gender = prompt("Are you male or female");
console.log(userName + ' is a ' + gender);

//ask how long the user has used a specific product
var length = prompt("How long have you used our product? (please specify days, months or years)");
console.log(userName + ' has used the product for ' + length);

//ask how the user would rate the product
var rating = prompt('How would you rate this product from 1 to 10?');
console.log(userName + 'rated this product a ' + rating);

//ask the user if he/she would recommend the product to someone else
var recommend =  confirm('Would you recommend this prodcut to a friend?');
console.log(userName + ' said ' + recommend);
