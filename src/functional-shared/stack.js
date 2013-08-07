var makeStack = function(){
  var stack = {};
  stack._storage={};
  stack._size=0;
  _.extend(stack, methods);
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