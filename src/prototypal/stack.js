var Stack = function(){
  var stack = Object.create(methods);
  stack._storage={};
  stack._size=0;
  return stack;
};

  var methods = {};

  methods.push = function(value){
    this._storage[this._size] = value;
    this._size++;
  };

  methods.pop = function(){
    this._size && this._size--;
    return this._storage[this._size];
  };

  methods.size = function(){
    return this._size;
  };