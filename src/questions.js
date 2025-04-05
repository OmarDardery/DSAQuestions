let questions = [
    // Stacks & Queues - Arrays
    {
      question: "What is the time complexity of push operation in an array-based stack?",
      a: "O(1)",
      b: "O(log n)",
      c: "O(n)",
      d: "O(n log n)",
      correct: "a"
    },
    {
      question: "Which operation removes the front element in an array-based queue?",
      a: "enqueue",
      b: "push",
      c: "dequeue",
      d: "pop",
      correct: "c"
    },
    {
      question: "Which data structure uses LIFO order?",
      a: "Queue",
      b: "Stack",
      c: "Linked List",
      d: "Heap",
      correct: "b"
    },
    {
      question: "What happens when you enqueue to a full circular queue?",
      a: "It overwrites the front",
      b: "It throws an overflow error",
      c: "It shifts elements",
      d: "It creates a new array",
      correct: "b"
    },
    {
      question: "Which of the following is NOT a queue operation?",
      a: "enqueue",
      b: "dequeue",
      c: "peek",
      d: "shift",
      correct: "d"
    },
  
    // Stacks & Queues - Linked Lists
    {
      question: "Which is true about a stack implemented using a singly linked list?",
      a: "Push happens at the tail",
      b: "Push happens at the head",
      c: "Pop is not possible",
      d: "It has O(n) push complexity",
      correct: "b"
    },
    {
      question: "Which node represents the rear in a linked-list queue?",
      a: "Tail",
      b: "Middle",
      c: "Head",
      d: "None",
      correct: "a"
    },
    {
      question: "Dequeuing in a linked-list queue removes from:",
      a: "Tail",
      b: "Head",
      c: "Middle",
      d: "Any",
      correct: "b"
    },
    {
      question: "What is the space complexity of a stack using linked list?",
      a: "O(1)",
      b: "O(n)",
      c: "O(log n)",
      d: "O(n log n)",
      correct: "b"
    },
    {
      question: "Which is a benefit of using linked lists for queues?",
      a: "No resizing needed",
      b: "Random access is fast",
      c: "Faster than arrays",
      d: "Always sorted",
      correct: "a"
    },
  
    // Quick Sort
    {
      question: "What is the average time complexity of Quick Sort?",
      a: "O(n^2)",
      b: "O(n)",
      c: "O(n log n)",
      d: "O(log n)",
      correct: "c"
    },
    {
      question: "Which of these is the worst-case input for Quick Sort?",
      a: "Random data",
      b: "Sorted data",
      c: "Reverse sorted data",
      d: "All equal elements",
      correct: "b"
    },
    {
      question: "What does the partition step do in Quick Sort?",
      a: "Sorts the array",
      b: "Divides into two equal halves",
      c: "Places pivot at its correct position",
      d: "Swaps all elements",
      correct: "c"
    },
    {
      question: "Quick Sort is not stable because:",
      a: "It uses recursion",
      b: "It does not preserve order of duplicates",
      c: "It requires extra space",
      d: "It is not efficient",
      correct: "b"
    },
    {
      question: "Which method is used in Quick Sort?",
      a: "Divide and conquer",
      b: "Greedy",
      c: "Dynamic Programming",
      d: "Backtracking",
      correct: "a"
    },
  
    // Merge Sort
    {
      question: "Merge Sort is best described as:",
      a: "Greedy algorithm",
      b: "Divide and conquer",
      c: "Backtracking algorithm",
      d: "Brute force",
      correct: "b"
    },
    {
      question: "What is the time complexity of Merge Sort?",
      a: "O(n^2)",
      b: "O(n log n)",
      c: "O(log n)",
      d: "O(n)",
      correct: "b"
    },
    {
      question: "Merge Sort uses how much auxiliary space?",
      a: "O(1)",
      b: "O(log n)",
      c: "O(n)",
      d: "O(n^2)",
      correct: "c"
    },
    {
      question: "Which of these sorts is stable?",
      a: "Merge Sort",
      b: "Quick Sort",
      c: "Selection Sort",
      d: "Heap Sort",
      correct: "a"
    },
    {
      question: "Which step actually combines sorted parts in Merge Sort?",
      a: "Splitting",
      b: "Recursion",
      c: "Merging",
      d: "Swapping",
      correct: "c"
    },
  
    // Selection Sort
    {
      question: "Selection Sort repeatedly:",
      a: "Swaps all elements",
      b: "Selects the largest element",
      c: "Finds the minimum and swaps it",
      d: "Divides array into halves",
      correct: "c"
    },
    {
      question: "Time complexity of Selection Sort in worst case:",
      a: "O(log n)",
      b: "O(n)",
      c: "O(n log n)",
      d: "O(n^2)",
      correct: "d"
    },
    {
      question: "Is Selection Sort stable?",
      a: "Yes",
      b: "No",
      c: "Sometimes",
      d: "Only for arrays",
      correct: "b"
    },
    {
      question: "How many swaps does Selection Sort do?",
      a: "n log n",
      b: "n - 1",
      c: "n^2",
      d: "Depends on input",
      correct: "b"
    },
    {
      question: "Best case time complexity of Selection Sort:",
      a: "O(n log n)",
      b: "O(log n)",
      c: "O(n)",
      d: "O(n^2)",
      correct: "d"
    },
  
    // Insertion Sort
    {
      question: "Which sort works well on nearly sorted arrays?",
      a: "Selection Sort",
      b: "Merge Sort",
      c: "Insertion Sort",
      d: "Quick Sort",
      correct: "c"
    },
    {
      question: "Time complexity of Insertion Sort in worst case:",
      a: "O(n)",
      b: "O(n log n)",
      c: "O(n^2)",
      d: "O(log n)",
      correct: "c"
    },
    {
      question: "Insertion Sort is considered:",
      a: "Stable",
      b: "Unstable",
      c: "Recursive",
      d: "Non-deterministic",
      correct: "a"
    },
    {
      question: "Insertion Sort compares elements to the:",
      a: "Previous element",
      b: "Next element",
      c: "Middle element",
      d: "Max element",
      correct: "a"
    },
    {
      question: "In Insertion Sort, which case gives O(n) time?",
      a: "Reverse sorted",
      b: "Sorted array",
      c: "Random data",
      d: "All duplicates",
      correct: "b"
    },
  
    // Trees
    {
      question: "Which traversal gives sorted order in a BST?",
      a: "Preorder",
      b: "Postorder",
      c: "Inorder",
      d: "Level order",
      correct: "c"
    },
    {
      question: "Which tree operation inserts nodes?",
      a: "Traversal",
      b: "Heapify",
      c: "Insert",
      d: "DFS",
      correct: "c"
    },
    {
      question: "How many children can a binary tree node have?",
      a: "1",
      b: "2",
      c: "3",
      d: "Any number",
      correct: "b"
    },
    {
      question: "Which traversal uses recursion and a stack implicitly?",
      a: "Level order",
      b: "Inorder",
      c: "Binary Search",
      d: "Hashing",
      correct: "b"
    },
    {
      question: "Which tree traversal visits root first?",
      a: "Postorder",
      b: "Inorder",
      c: "Preorder",
      d: "Levelorder",
      correct: "c"
    },
    {
        question: "What is the time complexity to insert an element into a max-heap?",
        a: "O(n)",
        b: "O(log n)",
        c: "O(1)",
        d: "O(n log n)",
        correct: "b"
      },
      {
        question: "Which of the following is true for a min-heap?",
        a: "Root is the maximum element",
        b: "Left child is smaller than root",
        c: "Root is the minimum element",
        d: "Heap is always a binary search tree",
        correct: "c"
      },
      {
        question: "Heap sort is based on which data structure?",
        a: "Queue",
        b: "Stack",
        c: "Heap",
        d: "Graph",
        correct: "c"
      },
      {
        question: "In a heap, the parent node is always:",
        a: "Smaller than children in max-heap",
        b: "Greater than children in min-heap",
        c: "Equal to all children",
        d: "None of the above",
        correct: "a"
      },
      {
        question: "What is the time complexity of heapify operation?",
        a: "O(log n)",
        b: "O(n)",
        c: "O(1)",
        d: "O(n log n)",
        correct: "a"
      },
      {
        question: "How is a binary heap typically implemented?",
        a: "Using trees",
        b: "Using queues",
        c: "Using arrays",
        d: "Using linked lists",
        correct: "c"
      },
      {
        question: "Which heap is used in priority queues?",
        a: "Binary heap",
        b: "Min heap",
        c: "Max heap",
        d: "All of the above",
        correct: "d"
      },
      {
        question: "Which function is used to restore heap order?",
        a: "Sort()",
        b: "Heapify()",
        c: "Balance()",
        d: "Partition()",
        correct: "b"
      },
    
      // More Stack & Queue Concepts
      {
        question: "Which of the following applications use stacks?",
        a: "Recursion",
        b: "Job scheduling",
        c: "Tree traversal",
        d: "Graph coloring",
        correct: "a"
      },
      {
        question: "Which data structure is best suited for undo functionality?",
        a: "Queue",
        b: "Array",
        c: "Stack",
        d: "Tree",
        correct: "c"
      },
    
      // Insertion Sort (More)
      {
        question: "Insertion sort is better than bubble sort for:",
        a: "Large datasets",
        b: "Reverse sorted arrays",
        c: "Small or nearly sorted arrays",
        d: "Random arrays",
        correct: "c"
      },
    
      // Merge Sort (More)
      {
        question: "Merge sort is not preferred when:",
        a: "Memory is limited",
        b: "Data is huge",
        c: "Time complexity matters",
        d: "Sorting is recursive",
        correct: "a"
      },
    
      // Quick Sort (More)
      {
        question: "Quick sort performs poorly when:",
        a: "Elements are random",
        b: "All elements are unique",
        c: "Array is sorted",
        d: "Array has no duplicates",
        correct: "c"
      },
    
      // Trees & BSTs (Extended)
      {
        question: "Which property does a Binary Search Tree satisfy?",
        a: "Left child > root",
        b: "Right child < root",
        c: "Left < root < right",
        d: "Heap property",
        correct: "c"
      },
      {
        question: "What is the height of a balanced binary tree with n nodes?",
        a: "O(n)",
        b: "O(log n)",
        c: "O(1)",
        d: "O(n^2)",
        correct: "b"
      },
      {
        question: "What is a leaf node?",
        a: "A node with no children",
        b: "A node with two children",
        c: "A root node",
        d: "A node at the top",
        correct: "a"
      },
      {
        question: "BSTs can degenerate into linked lists when:",
        a: "They are balanced",
        b: "Data is inserted in sorted order",
        c: "Random insertion happens",
        d: "They are full trees",
        correct: "b"
      },
      {
        question: "Which is true for AVL trees?",
        a: "They are a type of heap",
        b: "They maintain balance using rotations",
        c: "They are faster than arrays",
        d: "They use merge sort",
        correct: "b"
      },
      {
        question: "Which traversal is used to print nodes at each level?",
        a: "Inorder",
        b: "Preorder",
        c: "Level Order",
        d: "Postorder",
        correct: "c"
      },
      {
        question: "Which traversal is used in DFS of a tree?",
        a: "Level order",
        b: "Breadth first",
        c: "Inorder/Preorder/Postorder",
        d: "None",
        correct: "c"
      },
      {
        question: "Which of the following traversals uses a queue?",
        a: "Inorder",
        b: "Postorder",
        c: "Preorder",
        d: "Level order",
        correct: "d"
      },
      {
        question: "The height of a tree is the:",
        a: "Number of leaf nodes",
        b: "Number of edges in the longest path from root",
        c: "Depth of root",
        d: "Total number of nodes",
        correct: "b"
      },
    
      // Selection Sort (More)
      {
        question: "Selection sort does not adapt to input because:",
        a: "It uses random numbers",
        b: "It has nested loops",
        c: "It always checks entire unsorted portion",
        d: "It uses divide and conquer",
        correct: "c"
      },
    
      // Insert extra to hit over 100
      {
        question: "Which of these sorts performs well on small datasets and is easy to implement?",
        a: "Quick Sort",
        b: "Merge Sort",
        c: "Insertion Sort",
        d: "Heap Sort",
        correct: "c"
      },
      {
        question: "In stack, where does push insert the element?",
        a: "Front",
        b: "Rear",
        c: "Top",
        d: "Middle",
        correct: "c"
      },
      {
        question: "Deque stands for:",
        a: "Double-ended queue",
        b: "Dynamic queue",
        c: "Double queue",
        d: "Derived queue",
        correct: "a"
      },
      {
        question: "In a queue using array, what causes overflow?",
        a: "Too many dequeues",
        b: "Too many enqueues without space",
        c: "Stack underflow",
        d: "Reversed array",
        correct: "b"
      },
      {
        question: "In a min-heap, what is the relationship between parent and children?",
        a: "Parent is greater",
        b: "Children are greater or equal",
        c: "Parent is less or equal",
        d: "Parent is always zero",
        correct: "c"
      }
  ];

export default questions;