const btn = document.querySelector(".btn");
const wrapper = document.querySelector(".wrapper");
const btnConsole = document.querySelector(".btn-get");
let flag = false; // что не спамить на get

btn.onclick = () => {
  if (flag === false) {
    flag = true;
    const request = new XMLHttpRequest();
    request.open("GET", "object.json");
    request.setRequestHeader("Content-type", "application/json");
    request.send();
    request.onload = () => {
      const data = JSON.parse(request.response);
      console.log(data); // как массив с объектами
      console.log(request.response); // типо объект как в js только в строчном виде, хотя все равно он массиве, 2 задачу не понял чуть
      data.forEach((person) => {
        const personCard = document.createElement("div");
        personCard.setAttribute("class", "card");
        personCard.innerHTML = `
        <img class="image" src="${person.img}" alt="">
        <p class="name">${person.FirstName}</p>
        <p class="name">${person.LastName}</p>
        <p class="name">age: ${person.age}</p>
        `;
        wrapper.append(personCard);
      });
    };
  }
};

btnConsole.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "getJsonObj.json");
  request.setRequestHeader("Content-type", "application/json");
  request.send();
  request.onload = () => {
    const data = JSON.parse(request.response);
    console.log(data);
  };
};
