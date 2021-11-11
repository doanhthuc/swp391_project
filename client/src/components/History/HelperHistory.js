export const convertToOrder = (arr) => {
  let newArr = [];
  for (let item of arr) {
    let pro = item.orderDetails;
    newArr = newArr.concat(pro);
  }
  return newArr;
};

export const getAllMoney = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].quantity * arr[i].price;
  }
  return sum;
};
