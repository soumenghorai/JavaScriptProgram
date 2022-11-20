/*
Print the nodes of a Binary Tree from left to right 

Problem Statement:
Given a binary tree, write a program to print all the nodes 
of the given binary tree from left to right. That is, the 
nodes should be printed in the order they appear from left 
to right in the given tree.

For the shown binary tree, the output will be: 
4 6 7 9 10

Understanding the problem:

The idea behind this is very simple to understand once you have an idea about a tree.

In short, a binary tree has only 1 root node which can have 0, 1 or max 2 children and same goes for the child 
element as well. We will already be given with a tree structure (check the code link) all we need is to add the logic 
to traverse them in the required manner. Below is a step-by-step algorithm to do this: 

1. Check if the given node is null. If null, then return from the function.
2. Check if it is a leaf node. If the node is a leaf node, then print its data.
3. If in the above step, the node is not a leaf node then check if the left and right children of node exist. If 
yes then call the function for left and right child of the node recursively.

*/

// let n1 = {
//     val : 5,
//     left : null,
//     right : null
// }

// let n2 = {
//     val : 6,
//     left : null,
//     right : null
// }

// let n3 = {
//     val : 7,
//     left : null,
//     right : null
// }

// let n4 = {
//     val : 8,
//     left : null,
//     right : null
// }

// let n5 = {
//     val : 9,
//     left : null,
//     right : null
// }

// n1.left = n2;
// n1.right = n3;
// n2.left = n4;
// n2.right = n5;

// function printLeaf(node) {
//     if(node.left == null && node.right == null) {
//         console.log(node.val);
//     }
//     if(node.left != null) {
//         printLeaf(node.left);
//     }
//     if(node.right != null) {
//         printLeaf(node.right);
//     }
// }

class Node
{
    constructor()
    {
        this.data = 0;
        this.left = null;
        this.right = null;
    }
};
 
// Function to print leaf
// nodes from left to right
function printLeafNodes(root)
{
     
    // If node is null, return
    if (root == null)
        return;
     
    // If node is leaf node, print its data    
    if (root.left == null &&
        root.right == null)
    {
        console.log(root.data + " ");
        return;
    }
     
    // If left child exists, check for leaf
    // recursively
    if (root.left != null)
        printLeafNodes(root.left);
         
    // If right child exists, check for leaf
    // recursively
    if (root.right != null)
        printLeafNodes(root.right);
}
 
// Utility function to create a new tree node
function newNode(data)
{
    var temp = new Node();
    temp.data = data;
    temp.left = null;
    temp.right = null;
    return temp;
}

// Let us create binary tree shown in
// above diagram
var root = newNode(1);
root.left = newNode(2);
root.right = newNode(3);
root.left.left = newNode(4);
root.right.left = newNode(5);
root.right.right = newNode(8);
root.right.left.left = newNode(6);
root.right.left.right = newNode(7);
root.right.right.left = newNode(9);
root.right.right.right = newNode(10);
 
// Print leaf nodes of the given tree
printLeafNodes(root);