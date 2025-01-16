function welcome(firstName, lastName) {
    fullName = `${firstName} ${lastName}`;
    function displayFullName(){
      alert(`Welcome ${fullName}!`);
    }
    displayFullName();
  }
  
welcome("Holberton", "School");