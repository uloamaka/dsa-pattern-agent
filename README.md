# DSA Pattern Assistant

A sophisticated AI-powered assistant that helps you practice Data Structures and Algorithms (DSA) interview questions.

## DSA Agent

The DSA Recommender Agent is designed to provide curated interview-style questions based on specific data structures and algorithms topics. Built with the Mastra framework and powered by Google's Gemini 2.5 Flash model, it offers intelligent recommendations for your interview preparation.

### Features

- **Topic-Based Questions**: Get tailored DSA questions based on specific topics
- **Smart Recommendations**: Powered by Google's Gemini 2.5 Flash model
- **Comprehensive Coverage**: Includes questions from key DSA categories

### Supported Topics

The agent currently supports the following DSA topics:

1. **Arrays**
   - Maximum subarray sum (Kadane's Algorithm)
   - Merge sorted arrays
   - Finding missing numbers
   - Array manipulation problems

2. **Strings**
   - Anagram detection
   - Longest substring problems
   - Pattern matching (KMP algorithm)

3. **Linked Lists**
   - Cycle detection
   - List reversal
   - Middle node finding

4. **Binary Trees**
   - Tree height calculation
   - Symmetry checking
   - Tree traversals (inorder, preorder, postorder)

5. **Dynamic Programming**
   - 0/1 Knapsack problem
   - Longest Common Subsequence
   - Coin Change problem
   - Subset sum problems

## Usage

The DSA agent can be used in your code as follows:

```typescript
import { dsaAgent } from "./mastra/agents/dsa-agent";

// The agent will provide relevant DSA questions based on the topic
const response = await dsaAgent.execute({
  message: "Give me some array questions"
});
```

## Architecture

The DSA agent is built using a modular architecture:
- `dsa-agent.ts`: Core agent implementation with natural language understanding
- `dsa-tool.ts`: Tool component that manages the question database and recommendation logic

## Technical Stack

- TypeScript
- Mastra Framework
- Google Gemini 2.5 Flash Model

## Installation

1. Install the package via npm:
   ```bash
   npm install @mastra/dsa-patterns
   ```

2. Set up your environment variables:
   ```bash
   GEMINI_API_KEY=your_api_key_here
   ```

## Integration Guide

### Integration with Telex.im

You can easily integrate the DSA agent with Telex.im for chat-based interactions:

```typescript
import { TelexAgent } from '@telex.im/core';
import { dsaAgent } from '@mastra/dsa-patterns';

// Create a Telex agent with DSA capabilities
const telexDSAAgent = new TelexAgent({
  name: "DSA Interview Assistant",
  agents: [dsaAgent],
  instructions: `
    You are a DSA interview preparation assistant.
    Use the DSA agent to provide practice questions and guidance.
  `
});

// Initialize the agent in your Telex.im application
await telexDSAAgent.initialize();
```

### Integration with Other Agents

The DSA agent can be composed with other agents to create more powerful combinations:

#### 1. With Code Review Agent
```typescript
import { CodeReviewAgent } from '@your-org/code-review';

const combinedAgent = new Agent({
  name: "DSA Code Reviewer",
  agents: [dsaAgent, CodeReviewAgent],
  instructions: `
    Review code solutions for DSA problems.
    Use DSA agent for questions and CodeReview agent for solution analysis.
  `
});
```

#### 2. With Learning Path Agent
```typescript
import { LearningPathAgent } from '@your-org/learning';

const dsaLearningAgent = new Agent({
  name: "DSA Learning Assistant",
  agents: [dsaAgent, LearningPathAgent],
  instructions: `
    Create personalized DSA learning paths.
    Recommend questions based on skill level and progress.
  `
});
```

#### 3. With Mock Interview Agent
```typescript
import { MockInterviewAgent } from '@your-org/interview';

const dsaInterviewAgent = new Agent({
  name: "DSA Interview Simulator",
  agents: [dsaAgent, MockInterviewAgent],
  instructions: `
    Conduct mock DSA interviews.
    Provide real-time feedback and hints.
  `
});
```

## Advanced Configuration

### Customizing Question Sets

You can extend the default question set by modifying the DSA tool configuration:

```typescript
import { dsaTool } from '@mastra/dsa-patterns';

const customDSATool = dsaTool.extend({
  additionalTopics: {
    'system-design': {
      topic: 'System Design',
      questions: [
        'Design a URL shortener',
        'Create a distributed cache'
      ]
    }
  }
});
```

### Performance Optimization

For better performance in production:

```typescript
import { dsaAgent } from '@mastra/dsa-patterns';

const optimizedAgent = dsaAgent.configure({
  caching: true,
  batchSize: 10,
  timeout: 5000
});
```

## Troubleshooting

Common issues and solutions:

1. **API Rate Limiting**
   - Implement proper rate limiting using the built-in mechanisms
   ```typescript
   const rateLimitedAgent = dsaAgent.withRateLimit({
     maxRequests: 100,
     perMinute: 1
   });
   ```

2. **Memory Management**
   - Use the cleanup utility for long-running applications
   ```typescript
   import { cleanup } from '@mastra/dsa-patterns';
   
   // Call periodically
   await cleanup();
   ```

## License

[Add your license information here]
