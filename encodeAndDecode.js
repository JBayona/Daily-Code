/*

This problem was asked by Amazon.

Run-length encoding is a fast and simple method of encoding strings.
The basic idea is to represent repeated successive characters as a single count and character.
For example, the string "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A".

Implement run-length encoding and decoding. You can assume the string to be encoded have no digits
and consists solely of alphabetic characters. You can assume the string to be decoded is valid.
*/

function encode(str) {
  let count = 1;
  let encoded = '';
  for(let i = 1; i <= str.length; i++) {
    if(str[i] === str[i-1]) {
      count++;
    } else {
      encoded += count + str[i-1];
      count = 1;
    }
  }
  return encoded;
}

function decode(str) {
  let count = '';
  let decoded = '';
  for(let i = 0; i < str.length; i++) {
    if(str[i].match(/\d+/g)) {
      count += str[i];
    } else {
      decoded += str[i].repeat(Number(count));
      count = '';
    }
  }
  return decoded;
}

str = "AAAABBBCCDAA"
encoded = encode(str);
console.log(encoded);
decoded = decode(encoded);
console.log(decoded);

