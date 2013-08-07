var makeQueue = function(){
  // Use an object with numeric keys to store values

  // Implement the methods below
  var queue = {};
  queue._storage = {};
  queue._size = 0; // Hint: set an initial value here
  queue._dequeuer = 0;
  _.extend(queue, queueMethods);
  return queue;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this._storage[this._size] = value;
  this._size++;
};

queueMethods.dequeue = function(){
  return this._storage[this._dequeuer++];
};

queueMethods.size = function(){
  var length;
  if(this._size - this._dequeuer < 0) {
    length = 0;
  } else {
    length = this._size - this._dequeuer;
  }
  return length;
};