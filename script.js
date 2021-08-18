//// DOM manipulation ////

var div1 = document.createElement("div");
div1.setAttribute("class", "container");
div1.setAttribute("id", "div1");

var div2 = document.createElement("div");
div2.setAttribute("class", "row");

var div3 = document.createElement("div");
div3.setAttribute("class", "col-xl-4 col-lg-4 col-md-3 col-sm-2 col-2 cols");
div2.appendChild(div3);

var div4 = document.createElement("div");
div4.setAttribute("class", "col-xl-4 col-lg-4 col-md-6 col-sm-8 col-8 cols2");

var div6 = document.createElement("div");
div6.setAttribute("id", "card");

var div7 = document.createElement("div");

var p1 = document.createElement("p");
p1.innerText = "Operation : ";

var ip1 = document.createElement("input");
ip1.setAttribute("type", "text");
ip1.setAttribute("id", "operatorbox");
ip1.setAttribute("placeholder", "Enter ' +, -, *, /, % '");

p1.appendChild(ip1);

div7.appendChild(p1);
div6.appendChild(div7);

var div8 = document.createElement("div");

var p2 = document.createElement("p");
p2.innerText = "Value-1 : ";

var ip2 = document.createElement("input");
ip2.setAttribute("type", "text");
ip2.setAttribute("id", "value1box");

p2.appendChild(ip2);

div8.appendChild(p2);
div6.appendChild(div8);
////
var div9 = document.createElement("div");

var p3 = document.createElement("p");
p3.innerText = "Value-2 : ";

var ip3 = document.createElement("input");
ip3.setAttribute("type", "text");
ip3.setAttribute("id", "value2box");

p3.appendChild(ip3);

div9.appendChild(p3);
div6.appendChild(div9);
////
var div10 = document.createElement("div");
var bt1 = document.createElement("button");
bt1.setAttribute("class", "btn bg-primary");
bt1.setAttribute("id", "submitButton");
bt1.innerText = "Submit";

div10.appendChild(bt1);
div6.appendChild(div10);
////

var div11 = document.createElement("div");

var p4 = document.createElement("p");
p4.innerText = "Result : ";

var ip4 = document.createElement("input");
ip4.setAttribute("type", "text");
ip4.setAttribute("id", "resultBox");
ip4.setAttribute("readonly", "true");

p4.appendChild(ip4);

div11.appendChild(p4);
div6.appendChild(div11);

////
var div12 = document.createElement("div");
var bt2 = document.createElement("button");
bt2.setAttribute("class", "btn memBtn bg-success");
bt2.setAttribute("id", "memAdd");
bt2.innerText = "M+";
div12.appendChild(bt2);

var bt3 = document.createElement("button");
bt3.setAttribute("class", "btn memBtn bg-success");
bt3.setAttribute("id", "memSub");
bt3.innerText = "M-";
div12.appendChild(bt3);

var bt4 = document.createElement("button");
bt4.setAttribute("class", "btn memBtn bg-success");
bt4.setAttribute("id", "memClr");
bt4.innerText = "MC";
div12.appendChild(bt4);

var ip5 = document.createElement("input");
ip5.setAttribute("type", "text");
ip5.setAttribute("id", "MemBox");
ip5.setAttribute("value", "0");
ip5.setAttribute("readonly", "true");
div12.appendChild(ip5);

div6.appendChild(div12);

////
div4.appendChild(div6);

div2.appendChild(div4);

var div5 = document.createElement("div");
div5.setAttribute("class", "col-xl-4 col-lg-4 col-md-3 col-sm-2 col-2 cols");
div2.appendChild(div5);

div1.appendChild(div2);
document.body.prepend(div1);

var div13 = document.createElement("div");
div13.setAttribute("id", "navbar");

var bt5 = document.createElement("button");
bt5.setAttribute("class", "btn");
bt5.setAttribute("id", "heading");
bt5.innerText = "My CalC";
div13.appendChild(bt5);

document.body.appendChild(div13);

//// JS functionality ////

var val1Box = document.getElementById("value1box");

val1Box.onkeydown = function (e) {
  if (
    !(
      e.keyCode === 8 ||
      e.keyCode === 9 ||
      e.keyCode === 190 ||
      e.keyCode === 110 ||
      (e.keyCode >= 96 && e.keyCode <= 105) ||
      (e.keyCode >= 48 && e.keyCode <= 57)
    )
  ) {
    console.log(e.keyCode);
    alert("Only numbers are allowed");
  }
};

var val2Box = document.getElementById("value2box");

val2Box.onkeydown = function (e) {
  if (
    !(
      e.keyCode === 8 ||
      e.keyCode === 9 ||
      e.keyCode === 190 ||
      e.keyCode === 110 ||
      (e.keyCode >= 96 && e.keyCode <= 105) ||
      (e.keyCode >= 48 && e.keyCode <= 57)
    )
  ) {
    console.log(e.keyCode);
    alert("Only numbers are allowed");
  }
};

var opBox = document.getElementById("operatorbox");
opBox.onkeydown = function (e) {
  if (
    !(
      e.keyCode === 8 ||
      e.keyCode === 9 ||
      e.keyCode === 106 ||
      e.keyCode === 107 ||
      e.keyCode === 109 ||
      e.keyCode === 110 ||
      e.keyCode === 16 ||
      e.keyCode === 53 ||
      e.keyCode === 111
    )
  ) {
    alert("Enter '+,-,*,/,%' .");
    console.log(e.keyCode);
  }
};

var subBtn = document.getElementById("submitButton");
subBtn.onclick = function () {
  let v1 = val1Box.value;
  let v2 = val2Box.value;
  let op = opBox.value;

  if (op === "") {
    alert("Enter operation!");
    return;
  } else {
    if (!(op === "+" || op === "-" || op === "*" || op === "/" || op === "%")) {
      alert("Enter operation as '+, -, *, /, %' only.");
      return;
    }
  }

  if (v1 === "") {
    alert("Enter value-1");
    return;
  } else {
    let p = v1.split("");
    while (p.length !== 0) {
      if (p[0] !== "." && isNaN(parseInt(p[0]))) {
        alert("Enter only numbers in value-1.");
        return;
      }
      p.shift();
    }
  }

  if (v2 === "") {
    alert("Enter value-2");
    return;
  } else {
    let q = v2.split("");
    while (q.length !== 0) {
      if (q[0] !== "." && isNaN(parseInt(q[0]))) {
        alert("Enter only numbers in value-2.");
        return;
      }
      q.shift();
    }
  }

  let result = 0;
  if (op === "+") result = eval(parseFloat(v1) + parseFloat(v2));
  else if (op === "-") result = eval(parseFloat(v1) - parseFloat(v2));
  else if (op === "*") result = eval(parseFloat(v1) * parseFloat(v2));
  else if (op === "/") result = eval(parseFloat(v1) / parseFloat(v2));
  else if (op === "%") result = eval(parseFloat(v1) % parseFloat(v2));

  document.getElementById("resultBox").value = result;
};

var memoryAdd = document.getElementById("memAdd");
var memorySub = document.getElementById("memSub");
var memoryClr = document.getElementById("memClr");
var memoryBox = document.getElementById("MemBox");

memoryAdd.onclick = function () {
  let res = document.getElementById("resultBox").value;
  if (res !== "")
    memoryBox.value = eval(parseFloat(memoryBox.value) + parseFloat(res));
};

memorySub.onclick = function () {
  let res = document.getElementById("resultBox").value;
  if (res !== "")
    memoryBox.value = eval(parseFloat(memoryBox.value) - parseFloat(res));
};

memoryClr.onclick = function () {
  memoryBox.value = 0;
};
