// console.log(document.getElementById("paragraphToChange"));

// var paragraph = document.getElementById("paragraphToChange");
// var listItems = document.getElementsByClassName("list-item");
// // var queryItem = document.querySelector(".class");
// // var queryItem = document.querySelector("#id");
// // var queryItem = document.querySelector("element");

// console.log(listItems);
// paragraph.textContent = "shecvlili teqsti";

// var user = {
//     name: "Aleksandre",
//     surname: "Jelia",
//     isEighteen: false,
//     imageSrc: "https://picsum.photos/200",
// }

// var nameElement = document.getElementById("name");
// var surnameElement = document.getElementById("surname");
// var imageElement = document.getElementById("image");
// var isEighteenElement = document.getElementById("isEighteen");

// nameElement.textContent = user.name;
// surnameElement.textContent = user.surname;
// imageElement.src = user.imageSrc;
// if (user.isEighteen) {
//   isEighteenElement.textContent = `${user.name} is Eighteen`;
//   isEighteenElement.style.color = "green";
// } else {
//   isEighteenElement.textContent = `${user.name} is not Eighteen`;
//   isEighteenElement.style.color = "red";
// }

var users = [
  {
    name: "Aleksandre",
    surname: "Jelia",
    isEighteen: false,
    imageSrc: "https://picsum.photos/200",
  },
  {
    name: "Nikoloz",
    surname: "Endiniani",
    isEighteen: false,
    imageSrc: "https://picsum.photos/200",
  },
  {
    name: "Nikoloz",
    surname: "Tsetskhladze",
    isEighteen: false,
    imageSrc: "https://picsum.photos/200",
  },
  {
    name: "Sulkhan",
    surname: "Kartsivadze",
    isEighteen: true,
    imageSrc: "https://picsum.photos/200",
  },
  
];

users.forEach((user) => {
  var userCard = document.createElement("div");
  var nameElement = document.createElement("h1");
  var surnameElement = document.createElement("h2");
  var imageElement = document.createElement("img");
  var isEighteenElement = document.createElement("p");
  userCard.className = "user_card";
  nameElement.className = "name";
  surnameElement.className = "surname";

  nameElement.textContent = user.name;
  surnameElement.textContent = user.surname;
  imageElement.src = user.imageSrc;
  imageElement.alt = 'profile';

  if (user.isEighteen) {
    isEighteenElement.textContent = `${user.name} is Eighteen`;
    isEighteenElement.style.color = "green";
  } else {
    isEighteenElement.textContent = `${user.name} is not Eighteen`;
    isEighteenElement.style.color = "red";
  }
  userCard.append(nameElement, surnameElement, imageElement, isEighteenElement);
  document.getElementById('users').append(userCard);
});
