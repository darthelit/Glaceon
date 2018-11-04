const util = {
  isEmpty(obj) {
    if ((obj === null) || (obj === undefined)) {
      return true;
    } else if (typeof obj === 'function') {
      return false;
    } else if (Array.isArray(obj) || (typeof obj === 'string')) {
      return obj.length === 0;
    } else if (!this.valueIsTruePrimitive(obj)) {
      return Object.keys(obj).length === 0;
    } else if (this.valueIsTruePrimitive(obj)) {
      return false;
    }
    return true;
  },
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}

export default util;