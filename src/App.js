/**
 ** Video #3:
 * Here, we export our first function for testing ...
 */

export const addFunction = (x, y) => {
  return x + y;
};

export const totalFunction = (shipping, subTotal) => {
  return "$" + addFunction(shipping, subTotal);
};
