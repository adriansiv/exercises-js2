/*
Alice has a list of good friends.

Define a method "makeFriend" to add a new friend to her list.
*/

let person = {
    name: "Alice",
    friends: ["John", "Nina"],
    makeFriend(newFriend){
      this.friends.push(newFriend)
     }
  };
 

person.friends.push("Bob")
  /*
  DO NOT EDIT ANYTHING BELOW THIS LINE
  */
  
  //person.makeFriend("Bob");
  
  console.log(
    `Expected result: 'John,Nina,Bob'. Actual result: ${person.friends}`
  );