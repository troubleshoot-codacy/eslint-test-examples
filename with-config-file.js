//#Patterns: accessor-pairs

var o = {
  //#Info: accessor-pairs
  set a(value) {
        this.val = value;
  }
};

//fail
const regex = /[0-9]/;

const regexBad = /[0-9]/;

const regex2 = /\d/;

const regexGood = /\d/;

var o = {d: 1};
Object.defineProperty(o, 'c', {
  set: function(value) {
       this.val = value;
  },
  get: function() {
    return this.val;
  }
});
