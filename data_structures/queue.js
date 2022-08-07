/*
 * Queue:
 * An abstract data type in which the entities in the collection are kept in order
 * and the 
 *
 */

const Stack = (function()
{
    function Stack()
    {
        this.top = 0;
        this.stack = [];
    }

    Stack.prototype.push() = function(value)
    {
        if (this.top === 0)
        {
            return "Stack is empty";
        }
        
        this.stack[this.top] = value;
        this.top++;
    }

    Stack.prototype.pop() = function()
    {
        if (this.top === 0)
        {
            return "Stack is empty";
        }

        const poppedValue = this.stack[this.top];
        this.stack = this.stack.splice(this.top, 1);
        this.top--;
        return poppedValue;
    }

    Stack.prototype.peek() = function()
    {
        if (this.top === 0)
        {
            return "Stack is empty";
        }
        return this.stack[0];
    }

    Stack.prototype.size() = function()
    {
        return this.stack.length;
    }

    Stack.prototype.view() = function()
    {
        for (let i = 0 ; i < this.top + 1 ; i++)
        {
            return this.stack[i];
        }
    }

    return Stack;
})