export default (callback, wait) => {
  let called = false;

  return () => {
    if (!called) {
      called = true;

      setTimeout(() => {
        callback();
        called = false;
      }, wait);
    }
  };
};
