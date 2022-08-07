/*
 * Singly-Linked List:
 * A linked list is similar to an array, it holds a list of values.
 * However, links in a linked list do not have indexes. With a linked list you do not need to
 * predetermine its size as it grows and shrinks as it is edited. This is an example of a
 * singly linked list.
 */

class Node
{
    constructor(data)
    {
        this.data = data;
        this.next = null;
    }
}

class LinkedList
{
    constructor()
    {
        this.head = null;
        this.length = 0;
    }

    // Initiates the currentNode and currentIndex and return as an object
    initiateNodeAndIndex()
    {
        return { currentNode: this.head, currentIndex: 0 };
    }

    // Returns the length
    length()
    {
        return this.length;
    }

    // Returns the head
    head()
    {
        return this.head?.data || null;
    }

    // Returns if the list is empty
    isEmpty()
    {
        return this.length === 0;
    }

    // Adds a node at the start of a linked list
    addFirst(value)
    {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this.length();
    }

    // Adds a node at the end of a linked list
    addLast(value)
    {
        if (this.head === null)
        {
            return this.addFirst(value);
        }
        let { currentNode } = this.initiateNodeAndIndex()

        while (currentNode.next)
        {
            currentNode = currentNode.next
        }

        const newNode = new Node(value);
        // Add the node at the end of the list and increase the length
        currentNode.next = newNode;
        this.length++;
        return this.length();
    }

    // Remove the first node from the linked list
    removeFirst()
    {
        const removedNode = this.head;
        if (this.length > 0)
        {
            this.head = this.head.next;
            this.length--;
        }
        return removedNode?.data;
    }

    removeLast()
    {
        if (this.isEmpty())
        {
            return null;
        }
        if (this.length === 1)
        {
            return this.removeFirst();
        }
        let { currentIndex, currentNode } = this.initiateNodeAndIndex();
        while (currentIndex !== this.length -2)
        {
            currentIndex++
            currentNode = currentNode.next;
        }
        const removedNode = currentNode.next
        currentNode.next = null;
        this.length--;
        return removedNode.data;
    }
}