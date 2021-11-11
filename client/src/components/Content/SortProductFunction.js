export const pagination = (data, page) => {
  const length = data.length;
  const numOfPage = Math.floor(length / 10) + 1;

  const lst = [];
  const start = (page - 1) * 10;
  const end = start + 10;

  for (let i = start; i < end; i++) {
    if (data[i] == undefined) continue;
    lst.push(data[i]);
  }
  return {
    lst,
    numOfPage,
  };
};

export const sortBySold = (v) => {
  let arr = v;
  arr.sort((a, b) => {
    return b.sold - a.sold;
  });
  return arr;
};

export const sortByStar = (v) => {
  let arr = v;
  arr.sort((a, b) => {
    return b.star - a.star;
  });
  return arr;
};

export const sortByPriceUp = (v) => {
  let arr = v;
  arr.sort((a, b) => {
    return b.price - a.price;
  });
  return arr;
};

export const sortByPriceDown = (v) => {
  let arr = v;
  arr.sort((a, b) => {
    return a.price - b.price;
  });
  return arr;
};

export const sortByDiscount = (v) => {
  let arr = v;
  arr.sort((a, b) => {
    return b.discount - a.discount;
  });
  return arr;
};

export const sortByTrangPhuc = (v) => {
  let lst = [];
  const arr1 = v.filter((c) => {
    return c.category.name === "quan";
  });
  const arr2 = v.filter((c) => {
    return c.category.name === "ao";
  });
  lst = lst.concat(arr1);
  lst = lst.concat(arr2);
  return lst;
};

export const sortByCategory = (v, categoryName) => {
  const arr = v.filter((c) => c.category.name === categoryName);
  return arr;
};
