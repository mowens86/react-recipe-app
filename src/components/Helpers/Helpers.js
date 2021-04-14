/**
 * This is a list of helper functions used for various components
 */

export const htmlTagRemover = (str) => {
    if ((str === null) || (str === '')) {
      return false;
    } else {
      str = str.toString();
    } 
    return str.replace( /(<([^>]+)>)/ig, '');
}

export const foodTitleCutOff = (str) => {
  return str.length > 50 ? str = `${str.substring(0,50)}...` : str;
}