import { registerApiRoute } from "@mastra/core/server";
import { randomUUID } from "crypto";

export const dsaAgentRoute = registerApiRoute("/a2a/agent/", {
  method: "POST",

  handler: async (c) => {
    const mastra = c.get("mastra");
    const agent = mastra.getAgent("dsaAgent");

    if (!agent) {
      return c.json({
        jsonrpc: "2.0",
        id: null,
        error: { code: -32602, message: "Agent 'dsaAgent' not found" },
      }, 404);
    }

    const body = await c.req.json();
    const { jsonrpc, id: requestId, params } = body;

    if (jsonrpc !== "2.0" || !requestId) {
      return c.json({
        jsonrpc: "2.0",
        id: requestId || null,
        error: {
          code: -32600,
          message: `Invalid Request: "jsonrpc": "2.0" and "id" required`,
        },
      }, 400);
    }

    const { message, messages, contextId, taskId } = params || {};
    const inputMessages = message
      ? [message]
      : Array.isArray(messages)
      ? messages
      : [];

    const mastraMessages = inputMessages.map((msg) => ({
      role: msg.role,
      content: msg.parts
        ?.map((p: any) => (p.kind === "text" ? p.text : ""))
        .join("\n") || "",
    }));

    const response = await agent.generate(mastraMessages);
    const agentText = response.text || "No response generated.";

    return c.json({
      jsonrpc: "2.0",
      id: requestId,
      result: {
        id: taskId || randomUUID(),
        contextId: contextId || randomUUID(),
        status: {
          state: "completed",
          timestamp: new Date().toISOString(),
          message: {
            kind: "message",
            role: "agent",
            parts: [{ kind: "text", text: agentText }],
            messageId: randomUUID(),
          },
        },
        artifacts: [
          {
            artifactId: randomUUID(),
            name: "DSARecommendation",
            parts: [{ kind: "text", text: agentText }],
          },
        ],
        history: [
          ...inputMessages,
          {
            kind: "message",
            role: "agent",
            parts: [{ kind: "text", text: agentText }],
            messageId: randomUUID(),
          },
        ],
        kind: "task",
      },
    });
  },
});
