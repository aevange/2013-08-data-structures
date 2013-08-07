var Queue = function(){
  this._storage = {};
  this._size = 0; // Hint: set an initial value here
  this._dequeuer = 0;
};

Queue.prototype.enqueue = function(value){
  this._storage[this._size] = value;
  this._size++;
};

Queue.prototype.dequeue = function(){
  return this._storage[this._dequeuer++];
};

Queue.prototype.size = function(){
  var length;
  if(this._size - this._dequeuer < 0) {
    length = 0;
  } else {
    length = this._size - this._dequeuer;
  }
  return length;
};