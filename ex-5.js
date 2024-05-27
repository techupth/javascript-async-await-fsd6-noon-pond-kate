// Exercise #5
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};
// Start coding here

let profileOfJohn = async () => {
  try {
    let profile = await getJohnProfile()
    console.log(profile)
  } catch(error){
    let reject = await getJohnProfile()
  console.log(reject)
  }
}

getJohnProfile()