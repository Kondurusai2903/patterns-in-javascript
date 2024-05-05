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
