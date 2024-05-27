//Exercise #2
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

const JohnProfile = (data) =>{
  console.log(data);
}
const errorData = (error) =>{
  console.log(error);
}
getJohnProfile().then(JohnProfile).catch(errorData);

