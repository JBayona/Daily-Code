/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Twitter.

Implement an autocomplete system. That is, given a query string s and a set of all
possible query strings, return all strings in the set that have s as a prefix.

For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].

Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.
*/

// Trie Node
function TrieNode() {
  this.children = {};
  this.count = 0;
}

// Create our trie for each word
function generateTrie(array){
  trie = new TrieNode();
  for(let i = 0; i < array.length; i++) {
    let word = array[i];
    addWord(word);
  }
}

// Add words in our trie
function addWord(word) {
  let current = trie.children
  for(let i = 0; i < word.length; i++) {
  // if the letter is not on our tree
    if(!(word[i] in current)) {
    // lets add the letter with an empty Node
    current[word[i]] = new TrieNode();
    }
    // Count the number of seen
    current[word[i]].count++;
    // Move to the next node
    current = current[word[i]].children;
  }
  // Se the the word as ended.
  current.isWordEnd = true;
}

function isLastNode(node) {
  for(let i = 0; i < 26; i++) {
    // Will check the existence of letters from 'a' to 'z'
    let alphabet = String.fromCharCode(97 + i)
    if(alphabet in node) {
      return false;
      }
  }
  return true;
}

function suggestionsRec(node, currPrefix, result) {
  // If found a string in trie with the given prefix
  // we add them to the result
  if(node.isWordEnd) {
    result.push(currPrefix)
  }

  // If it's the last node we break the recursion
  if(isLastNode(node)) {
    return;
  }

  // Verify all the letters
  for(let i = 0; i < 26; i++) {
    // Check all the letters we could have and make recursive functions until we find the end of the letter
    let letter = String.fromCharCode(97 + i);
    if(letter in node) {
      //Appent to the current prefix
      currPrefix = currPrefix + letter;
      // This avoid the mutation of our object
      suggestionsRec(node[letter].children, currPrefix, result);
    }
  }
}

function findWords(query, result) {
  let current = trie.children;
  for(let i = 0; i < query.length; i++) {
    // no string in the Trie has this prefix
    if(!(query[i] in current)) {
      return 'No strings found with this prefix';
    }
    current = current[query[i]].children;
  }

  // Verify if is a word
  let isWord = current.isWordEnd == true;

  // Verify of is not the last node on the trie
  let isLast = isLastNode(current);

  if(isWord && isLast) {
    result.push(query);
    return;
  }

  if(!isLast) {
    let prefix = query;
    suggestionsRec(current, prefix, result);
    return;
  }

}

array = ['tai', 'tea', 'to', 'ten', 'in', 'team', 'teamroller'];
generateTrie(array);
console.log('Trie');
console.log(trie);
console.log('Predict');
result = [];
findWords('te', result);
console.log(result);
