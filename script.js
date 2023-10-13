//CRUD= CREATE READ UPDATE DELETE

const inp = document.getElementById("input");
const cont = document.getElementById("todolist");

const arr = [];
// console.log(inp);

function del(ind) {
  //   console.log("dele" + ind);
  arr.splice(ind, 1);
  create();
}

function edit(ind) {
  //   console.log(ind);
  //   console.log("edit");
  const text = prompt("Alert the text here");
  arr.splice(ind, 1, text);
  create();
}

function create() {
  cont.innerHTML = "";
  arr.forEach((ele, index) => {
    let temp = "";
    temp =
      "<li>" +
      ele +
      `<a onclick=edit(${index})>` +
      "edit" +
      "</a>" +
      `<a onclick=del(${index})>` +
      "<pre>" +
      "&#10060; | " +
      "</pre>" +
      "</a>" +
      "</li>";
    cont.innerHTML += temp;
    //   console.log(temp);
  });
}

inp.onchange = () => {
  //   console.log(inp.value);
  arr.push(inp.value);
  //   console.log(arr);
  create();
};
