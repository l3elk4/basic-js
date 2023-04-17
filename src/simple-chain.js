const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
    arr: [],
    getLength() {
      return this.arr.length;
    },
    addLink( value = "") {
      if (value === undefined) value = "";
      else if (value === null) value = "null"
      this.arr.push(value);
      return this;
    },
    removeLink( position ) {
      if (Number.isInteger(position) == false || position < 1 || position > this.arr.length) {
        this.arr = []
      throw new Error("You can't remove incorrect link!");}
     else { position -= 1;
          this.arr.splice(position, 1);
          return this;}
    },
    reverseChain() {
      this.arr = this.arr.reverse();
      return this;
    },
    finishChain() {
      const array = this.arr;
      this.arr = [];
      return "( " + array.join(" )~~( ") + " )";
    }
  };

module.exports = {
  chainMaker
};
