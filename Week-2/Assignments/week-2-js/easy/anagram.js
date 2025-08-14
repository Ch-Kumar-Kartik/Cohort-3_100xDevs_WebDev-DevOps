/*anagram.js
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of 
  another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const str1n = str1.toLowerCase().replace(/\s+/g, '')
  const str2n = str2.toLowerCase().replace(/\s+/g, '')

  if (str1n.length === str2n.length && (typeof str1n === 'string' && typeof str2n === 'string'
)) {
  const set1 = new Set(str1n)
  let l = 0
  let r = str2n.length - 1
  while (l < r){
    if (set1.has(str2n[l]) && set1.has(str2n[r])){
      l += 1
      r -= 1
    } else {return false}
  }
  return true
}
}

module.exports = isAnagram;
