const counter = (function counter() {
    let value = 0;
    return {
      getValue: function() {
        return value;
      },
      changeBy: function(k) {
        value += k;
      },
    }
  })();
  
  function getFixedCounter(k) {
    // write your code here
    var counterRef = counter;
    return {
        increment: () =>{
            counterRef.changeBy(k);
        },
        decrement: () => {
            counterRef.changeBy(-k);
        },
        getValue: () => {
            return counterRef.getValue();
        }
    };
}