//#Patterns: accessor-pairs

var o = {
  //#Info: accessor-pairs
  set a(value) {
        this.val = value;
  }
};

//fail
const regex = /[0-9]/;

//another failed
const regexxx = /[0-8]/;

const regex2 = /\d/;

var o = {d: 1};
Object.defineProperty(o, 'c', {
  set: function(value) {
       this.val = value;
  },
  get: function() {
    return this.val;
  }
});
