var Queue = function(){
  // Use an object with numeric keys to store values

  // Implement the methods below
  var queue = Object.create(queueMethods);
  queue._storage = {};
  queue._size = 0; // Hint: set an initial value here
  return queue;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  for(var i = this._size; i > 0; i--){
    this._storage[i] = this._storage[i-1];
  }
  this._storage[0] = value;
  this._size++;
};

queueMethods.dequeue = function(){
  this._size && this._size--;
  return this._storage[this._size];
};

queueMethods.size = function(){
  return this._size;
};