//genrate symbol
const symb = "!@#$&*";

//genrate lowercase letter
const lc_letters = "abcdefghijklmnopqrstuvwxyz";

//genrate uppercase letter
const uc_letters = lc_letters.toUpperCase();

//genrate numbers
const numb = "0123456789";

let pass = ""; //use pass to hold  the final password



let passGen = () => {
  let new_symb = "";
  let new_lc_letters = "";
  let new_uc_letters = "";
  let new_numb = "";
  let total = "";
  for (let i = 0; i < 2; i++) {
    new_symb += symb[Math.floor(Math.random() * symb.length)]; // contains symbols
    new_lc_letters += lc_letters[Math.floor(Math.random() * lc_letters.length)]; //contains lower case letters
    new_uc_letters += uc_letters[Math.floor(Math.random() * uc_letters.length)]; //contains upper case letters
    new_numb += numb[Math.floor(Math.random() * numb.length)]; //contains numberes
    total = new_symb + new_lc_letters + new_uc_letters + new_numb;
  }
  pass = total
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");

  let showpass = document.getElementById("passwordCharacters");
  showpass.innerHTML = `${pass}`;
  console.log(pass)
return pass
};



//generate button
let generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", passGen);

// Function to save password to local storage
document.getElementById('save').addEventListener('click', function() {
    let pass = document.getElementById('passwordCharacters').innerHTML;
    let savedPasswords = JSON.parse(localStorage.getItem('savedPasswords')) || [];
    savedPasswords.push(pass);
    localStorage.setItem('savedPasswords', JSON.stringify(savedPasswords));
    alert('Password saved to local storage!');
    displaySavedPasswords(savedPasswords);
});

// Function to delete password from local storage
document.getElementById('delete').addEventListener('click', function() {
    localStorage.removeItem('savedPasswords');
    let savedPasswords = [];
    displaySavedPasswords(savedPasswords);
    alert('All saved passwords deleted from local storage!');
});

// Function to display saved passwords
function displaySavedPasswords(passwords) {
    let savedPasswordsList = document.getElementById('savedPasswords');
     savedPasswordsList.innerHTML = '';
    passwords.forEach(function(password) {
        let listItem = document.createElement('li');
        listItem.textContent = password;
        savedPasswordsList.appendChild(listItem);
    });
}

// Load saved passwords from local storage on page load
window.addEventListener('load', function() {
    let savedPasswords = JSON.parse(localStorage.getItem('savedPasswords')) || [];
    displaySavedPasswords(savedPasswords);
});