function compare(str, radix) {
  let code = str.toUpperCase().charCodeAt(0),
    num;
  if(radix >= 11 && radix <= 36) {
    if(code >= 65 && code <= 90) {
      num = code - 55;
    }else {
      num = code - 48;
    }
  }else {
    num = code - 48;
  }
  return num;
}

function isHex(first, str) {
  return first === '0' && str[1].toUpperCase() === 'X'
}

function _parseInt(str, radix) {
  str = String(str);
  if(typeof str !== 'string') return NaN;
  str = str.trim();
  let first = str[0],
    sign;
  //处理第一个字符为 '-' || '+' 的情况
  if(first === '-' || first === '+') {
    sign = str[0];
    str = str.slice(1);
    first = str[0];
  }
  //当 radix 不存在或者小于 11 时，第一个字符只能为数字
  if(radix === undefined || radix < 11) {
    if(isNaN(first)) return NaN;
  }

  let reg = /^(0+)/;
  //截取 str 前面符合要求的一段，直到遇到非数字和非字母的字符
  let reg2 = /^[0-9a-z]+/i;
  str = str.match(reg2)[0];
  let len = str.length;
  //在没有第二个参数时或者不是数字时，给第二个参数赋值
  //isNaN('0x12') 会执行 Number('0x12') 可以转换成十进制
  if(radix === undefined || isNaN(radix) || radix === 0) {
    if(len === 1) return str;
    //如果 str 是十六进制形式，就转换成十进制
    if(isHex(first, str)) {
      if(sign === '-') {
        return Number(-str);
      }else {
        return Number(str);
      }
    }else {
      //不能直接返回 Number(str) 比如 Number('0ff23') 会返回 NaN，但是应该返回 0
      radix = 10;
    }
  }else {
    //如果有第二个参数，并且是数字，要处理第二个参数
    radix = String(radix);
    //如果有小数点，取小数点前面一段，处理不为整数的情况
    radix = radix.split('.')[0];
    //如果 radix 前面有零将零去除，十六进制除外
    if(radix.length > 1) {
      let twoR = radix[1].toUpperCase();
      if(radix[0] === '0' && twoR !== 'X') radix = radix.replace(reg, '');
    }
    //如果 radix 是十六进制的字符串类型，也会转变成十进制的数字类型
    radix = Number(radix);
    //radix 是否在正确的区间
    if(radix >= 2 && radix <= 36) {
      //如果 radix 为 16，且 str 是十六进制形式的话，直接将十六进制转换成十进制
      if(radix === 16 && isHex(first, str)) return Number(str);
    }else {
      //只要 radix 是一个有效的数字，但不在正确的区间里，就返回 NaN
      return NaN;
    }
  }
  //去除 str 前面的零
  str = str.replace(reg, '');
  if(str.length === 0) return 0;
  let strArr = str.split(''),
    numArr = [],
    result = 0,
    num;
  for(let i=0; i<strArr.length; i++) {
    num = compare(strArr[i], radix);
    if(num < radix) {
      numArr.push(num);
    }else {
      break;
    }
  }
  let lenN = numArr.length;
  if(lenN > 0) {
    numArr.forEach(function(item, index) {
      result += item * Math.pow(radix, lenN - index -1);
    });
  }else {
    //str 开头有零的话要返回零
    return first === '0' ? 0 : NaN;
  }
  if(sign === '-') result = -result;
  return result;
}