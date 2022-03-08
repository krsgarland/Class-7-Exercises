function parent(x) {
    return function closure() {
      let closure = "remembers me";
      return x;
    };
  }
  
  const remember = parent("remembers me");
  // Seems like the variable x would be gone after
  // parent is executed, but it's not.
  
  closure();
  // Returns "remembers me" because the inner
  // function remembers x.