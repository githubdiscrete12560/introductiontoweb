// A simple class for a tree node
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
function size(node) {
  // Base Case: If the node doesn't exist, its size is 0.
  if (node === null) {
    return 0;
  }

  // Recursive Step: 1 + size of left + size of right
  return 1 + size(node.left) + size(node.right);
}
// Creating our sample tree
const root = new Node(6);
root.left = new Node(4);
root.right = new Node(8);
root.left.left = new Node(3);
root.left.right = new Node(5);
root.right.left = new Node(7);
root.right.right = new Node(9);


// --- Using our sample tree ---
const treeSize = size(root);
console.log(treeSize); // Output: 7