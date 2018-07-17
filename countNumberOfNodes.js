//Count the number of nodes

function Node(val, left, right) {
  this.val = val;
  this.left = left || null;
  this.right = right || null;
}

function helper(node, count){
  let left = 0;
  let right = 0;
  if(node) {
    if(node.left) {
      left = helper(node.left, count);
    }
    if(node.right) {
      right = helper(node.right, count);
    }
    return left + right + 1;
  }
}

function countTreeNodes(tree) {
  if(!tree) {
    return 0;
  }
  return helper(tree, 1);
}

/*
        1
      2     3
    4  5   6  7
*/
tree = new Node(1, new Node(2, new Node(4), new Node(5)), new Node(3, new Node(6), new Node(7)));
console.log(countTreeNodes(tree));

// Opción 2

//Count the number of nodes

function Node(val, left, right) {
  this.val = val;
  this.left = left || null;
  this.right = right || null;
}


function countTreeNodes(tree) {
  // La suma del 1 es por el root de ese nodo
  return tree ? countTreeNodes(tree.left) + countTreeNodes(tree.right) + 1 : 0;
}

/*
        1
      2     3
    4  5   6  7
*/
tree = new Node(1, new Node(2, new Node(4), new Node(5)), new Node(3, new Node(6), new Node(7)));
console.log(countTreeNodes(tree));