module.exports = function check(str, bracketsConfig) {
  let strArr = str.split('');
  let open = [];
  let close = [];

  bracketsConfig.forEach(function(e) {
      open.push(e[0]);
      close.push(e[1]);
  }, this);

  let checkingArr = [];

  strArr.forEach(function(e) {
      if (open.includes(e) && !close.includes(e)) {
          checkingArr.push(e);
      }
      if (close.includes(e)) {
          if (checkingArr[checkingArr.length - 1] == open[close.indexOf(e)]) {
              checkingArr.pop();
          } else {
              checkingArr.push(e);
          }
      }
  }, this);

  return !checkingArr.join('');
}
