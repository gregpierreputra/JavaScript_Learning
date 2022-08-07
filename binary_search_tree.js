/*
 * Binary Search Tree:
 * called ordered or sorted binary tree, are a particular type of container: ds
 * that store "items" (such as numbers, names, etc.) in memory. They allow fast
 * lookup, addition and removal of items, and can be used to implement either
 * dynamic sets of items, or lookup tables that allow finding an item by its key.
 */

// Class Node

const Node = (function()
{
    function Node(value)
    {
        this.value = value;
        this.left = null;
        this.right = null; 
    }

    Node.prototype.search() = function(value)
    {
        if (this.value === value)
        {
            return this;
        }
        else if (value < this.value)
        {
            return this.left.search(value);
        }
        else
        {
            return this.right.search(value);
        }
        return "Value is not in the BST";
    }


    Node.prototype.visit = function(output = value => console.log(value))
    {
        // Recursively go left
        if (this.left !== null)
        {
            this.left.visit();
        }
        // Print out the value
        output(this.value);

        // Recurisvely go right
        if (this.right !== null)
        {
            this.right.visit();
        }
    }

    Node.prototype.addNode = function(node)
    {
        if (node.value < this.value)
        {
            if (this.left === null)
            {
                this.left = node;
            }
            else
            {
                this.left.addNode(node);
            }
        }
        else if (node.value > this.value)
        {
            if (this.right === null)
            {
                this.right = node;
            }
            else
            {
                this.right.addNode(node);
            }
        }
    }

    Node.prototype.removeNode = function(node)
    {

    }
})