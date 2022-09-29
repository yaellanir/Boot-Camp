const steps = (N) => {
  for (let i = 1; i <= N; i++) {
    let str = "";
    console.log("outer: ", i, str);
    for (let j = 1; j <= i; j++) {
      str += "#";
      console.log("hashtag: ", j, str);
    }
    for (let k = 1; k <= N - i; k++) {
      str += "_";
      console.log("underscore: ", k, str, "remainder: ", N - i);
    }
    console.log(str, str.length);
  }
};
steps(5);
