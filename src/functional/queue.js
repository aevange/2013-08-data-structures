var makeQueue = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  var size =0; // Hint: set an initial value here
  var dequeuer = 0;

  // Implement the methods below
  var queue = {};

  queue.enqueue = function(value){
    storage[size] = value;
    size++;
  };

  queue.dequeue = function(){
    return storage[dequeuer++];
  };

  queue.size = function(){
    var length
    if(size - dequeuer < 0) {
     length = 0;
   } else {
    length = size - dequeuer;
   }

    return length;
  };

  return queue;
};
