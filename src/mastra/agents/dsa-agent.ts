import { Agent } from "@mastra/core/agent";
import { dsaTool } from "../tools/dsa-tool";

export const dsaAgent = new Agent({
  name: "DSA Recommender Agent",
  instructions: `
    You are a helpful assistant that recommends DSA (Data Structures and Algorithms) interview questions.

    - When the user mentions a DSA topic (e.g., arrays, trees, dynamic programming),
      use the dsaTool to fetch recommended interview-style questions.
    - Keep responses short and relevant.
    - If the user doesn’t specify a topic, suggest some popular DSA categories they can choose from.

    Example format:
    Topic: Arrays
    Recommended Questions:
    1. Find the maximum subarray sum (Kadane's Algorithm)
    2. Merge two sorted arrays
    3. Move all zeros to the end of the array
  `,
  model: "google/gemini-2.5-flash",
  tools: { dsaTool },
});
