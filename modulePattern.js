// standard module Pattern

const UIctrl = (function () {
  // private functions and variables which we cann't access
  const text = "hello world!";
  let changeText = function () {
    const element = document.querySelector("h1");
    element.textContent = text;
  };
  return {
    //   public functions and variables which we can accesss
    CallchangeText: function () {
      changeText();
      console.log(text);
    },
  };
})();
UIctrl.CallchangeText();

//---------------------------REVEALING MODULE PATTERN--------------------

const Reveal = (function () {
  let data = [];
  function add(text) {
    data.push(text);
    console.log("the data is added--------");
  }
  function get(id) {
    return data.find((item) => {
      return item.id === id;
    });
  }
  return {
    add: add,
    get: get,
    data: data,
  };
})();

Reveal.add({ id: 1, name: "john" });
Reveal.add({ id: 2, name: "sai" });
Reveal.add({ id: 3, name: "venkat" });
console.log(Reveal.get(1));
console.log(Reveal.get(2));
console.log(Reveal.get(3));

console.log(Reveal.data);
