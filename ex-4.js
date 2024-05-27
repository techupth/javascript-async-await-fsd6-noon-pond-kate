// Exercise #4
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

let profileOfJohn = async () => {
  try {
    let profile = await getJohnProfile()
    console.log(profile)
} catch (error) {
  console.log(error)
}
}

profileOfJohn()