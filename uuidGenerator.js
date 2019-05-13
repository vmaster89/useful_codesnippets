/*
  This is a small library to generate a UUID based on RFC 4122. 
  A UUID is a randomly generated string which can be used as a unique resource identifier. 
  The library is based on a posting by broofa in stackoverflow. 
  broofa (2018): https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript 
*/ 

var UUID = function() {};

UUID.prototype.generate = function () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, 
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
