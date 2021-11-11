export const searchByName = (list, tieude) => {
  let arr = [];
  arr = list.filter((x) => {
    return x.name.toLowerCase().match(tieude.toLowerCase());
  });
  return arr;
};
