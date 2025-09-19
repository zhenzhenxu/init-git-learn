// 回文算法
// 回文算法是指一个字符串从前往后读和从后往前读都是一样的，比如 "level" 和 "racecar"。

// 回文算法的空间复杂度是 O(1)，因为只需要一个变量来存储当前的回文长度。、、
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
  }
  return true;
}

//反转链表
function reverseList(head) {
  let prev = null;
  let current = head;
  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
//   return prev;
}