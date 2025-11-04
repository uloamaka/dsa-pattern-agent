import { createTool } from "@mastra/core/tools";
import { z } from "zod";

export const dsaTool = createTool({
  id: "dsaTool",
  description: "Recommends DSA interview-style questions for a given topic.",

  inputSchema: z.object({
    topic: z.string().describe("The DSA topic to get interview questions for"),
  }),

  outputSchema: z.object({
    topic: z.string(),
    questions: z.array(z.string()),
  }),

  async execute({ input }: any) {   // ✅ Fix here
    const { topic } = input;
    const lower = topic.toLowerCase();

    const data: Record<string, { topic: string; questions: string[] }> = {
      arrays: {
        topic: "Arrays",
        questions: [
          "Find the maximum subarray sum (Kadane’s Algorithm)",
          "Merge two sorted arrays",
          "Find the missing number in an array",
          "Move all zeros to the end of the array",
        ],
      },
      strings: {
        topic: "Strings",
        questions: [
          "Check if two strings are anagrams",
          "Find the longest substring without repeating characters",
          "Implement pattern matching (KMP algorithm)",
        ],
      },
      "linked list": {
        topic: "Linked List",
        questions: [
          "Detect a cycle in a linked list",
          "Reverse a linked list",
          "Find the middle of a linked list",
        ],
      },
      "binary tree": {
        topic: "Binary Tree",
        questions: [
          "Find the height of a binary tree",
          "Check if a binary tree is symmetric",
          "Perform inorder, preorder, and postorder traversals",
        ],
      },
      "dynamic programming": {
        topic: "Dynamic Programming",
        questions: [
          "0/1 Knapsack problem",
          "Longest Common Subsequence",
          "Coin Change problem",
          "Partition Equal Subset Sum",
        ],
      },
    };

    return (
      data[lower] || {
        topic,
        questions: [
          "No specific questions found for this topic. Try common topics like arrays, strings, or trees.",
        ],
      }
    );
  },
});
