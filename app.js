//Budget Controller
var budgetController = (function () {
  //some code
})();
//UI Controller
var UIController = (function () {
  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn",
  };
  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      };
    },
    getDOMstring: function () {
      return DOMstrings;
    },
  };
})();

//UI Controller
var controller = (function (budgetCtrl, UICtrl) {
  var setupEventListeners = function () {
    var DOM = UICtrl.getDOMstring();
    document.querySelector(DOM.inputBtn).addEventListener("click", CtrlAddItem);
    document.addEventListener("keypress", function (event) {
      if (event.keyCode === 13 || event.which === 13) {
        CtrlAddItem();
      }
    });
  };

  var CtrlAddItem = function () {
    var input = UICtrl.getInput();
  };
  return {
    init: function () {
      console.log("Application has started");
      setupEventListeners();
    },
  };
})(budgetController, UIController);

controller.init();
