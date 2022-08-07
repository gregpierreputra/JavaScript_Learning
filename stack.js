/* 
 * A stack is an abstract data type that serves as a collection of element,
 * with two principal elements:
 * 
 * push, which adds an element to the collection, and
 * pop, which removes the most recently added element that was not yet removed
 *
 * The order in which element comes off a stack (LIFO) - Last In, First Out
 * In short, element get added to the top of the stack, and only the element at
 * the top may be removed
 * 
 * Peek operation gives access to the top without modifying the stack
 */

// Creates a stack constructor

const Stack = (function() {
    function Stack()
    {
        this.top = 0;
        this.stack = [];
    }

    // Adds a value onto the end of the stack
    Stack.prototype.push = function(value)
    {
        this.stack[this.top] = value;
        this.top++;
    }

    // Removes and returns the value at the end of the stack
    Stack.prototype.pop = function()
    {
        if (this.top === 0)
        {
            return "Stack is empty";
        }

        const poppedValue = this.stack[this.top];
        this.stack = this.stack.splice(this.top, 1);
        this.top--
        return poppedValue;
    }

    // Returns the size of the stack
    Stack.prototype.size = function()
    {
        return this.top;
    }

    // Returns the value at the end of the stack
    Stack.prototype.peek = function()
    {
        if (this.top === 0)
        {
            return "Stack is empty. Nothing to peek"
        }
        else
        {
            return this.stack[0];
        }
    }

    // See all of the elements in the stack
    Stack.prototype.view = function()
    {
        for (let i = 0 ; i < this.top + 1 ; i++)
        {
            return this.stack[i];
        }
    }

    return Stack;
})