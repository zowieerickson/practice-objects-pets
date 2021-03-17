let petName;
let type;
let breed;
let age;
let photo;
let main = document.querySelector("main");

for (let prop in pets) {
  petName = pets[prop].name;
  type = pets[prop].type;
  breed = pets[prop].breed;
  age = pets[prop].age;
  photo = pets[prop].photo;
  main.innerHTML += `
  <h2>${petName}</h2>
  <h3>${type} | ${breed}</h3>
  <p>Age: ${age} </p>
  <img src=${photo} alt=${breed}>
`;
}
