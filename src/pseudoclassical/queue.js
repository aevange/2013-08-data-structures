var Queue = function(){
  this._storage = {};
  this._size = 0; // Hint: set an initial value here
};

Queue.prototype.enqueue = function(value){
  for(var i = this._size; i > 0; i--){
    this._storage[i] = this._storage[i-1];
  }
  this._storage[0] = value;
  this._size++;
};

Queue.prototype.dequeue = function(){
  this._size && this._size--;
  return this._storage[this._size];
};

Queue.prototype.size = function(){
  return this._size;
};