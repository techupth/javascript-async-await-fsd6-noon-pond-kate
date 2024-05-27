//Exercise #3
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

let getJohnOrders = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve([
          {
            orderId: "001",
            items: ["apple", "banana"],
          },
          {
            orderId: "002",
            items: ["orange", "itim"],
          },
        ]),
      1500
    );
  });
};

const JohnProfile = (data) =>{
  console.log(data);
}
const JohnOrder = (order)=>{
  console.log(order);
}
const failedData = (error) =>{
  console.log(error);
}
getJohnProfile().then(JohnProfile).catch(failedData);
getJohnOrders().then(JohnOrder).catch(failedData);
