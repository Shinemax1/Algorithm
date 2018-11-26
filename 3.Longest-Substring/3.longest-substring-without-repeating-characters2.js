var lengthOfLongestSubstring = function (s) {
  return me(s)
};
const he = function (s) {
  let len = s.length;
  if (len === 0 || len === 1) return len;
  let longest = 0;
  let start = 0;

  for (let end = 0; end < s.length; end++) {
    const curr = s[end];
    const index = s.indexOf(curr, start);
    if (index >= start && index < end) {
      start = index + 1;
    } else {
      longest = Math.max(longest, end - start);
    }
  }

  return longest + 1;
}

const me = function (s) {
  const obj = []
  let max = 0;
  let j = 0
  i = 0;
  while (j < s.length) {
    let v = s[j]
    let code = v.charCodeAt(0)
    if (obj[code] >= 0 && obj[code] >= i) {
      i = obj[code] + 1
    } else {
      max = Math.max(max, j - i)
    }
    obj[code] = j++
  }
  return s && max + 1
}