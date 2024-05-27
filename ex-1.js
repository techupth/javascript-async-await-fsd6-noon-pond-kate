//Exercise #1

let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};
// Start coding here
 const johnInfo = (data) => {
    console.log(data)
  }

  getJohnProfile().then(johnInfo => {
    console.log(johnInfo);
  }).catch(error => {
    console.error(error);
  });
  


