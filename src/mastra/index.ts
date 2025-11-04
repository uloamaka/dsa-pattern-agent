import { Mastra } from "@mastra/core/mastra";
import { PinoLogger } from "@mastra/loggers";
import { LibSQLStore } from "@mastra/libsql";

import { dsaAgent } from "./agents/dsa-agent";
import { dsaAgentRoute } from "./routes/dsa-route";

export const mastra = new Mastra({
  workflows: {},
  agents: {
    dsaAgent,
  },
  scorers: {},
  server: {
    apiRoutes: [dsaAgentRoute],  
  },
  storage: new LibSQLStore({
    url: ":memory:",
  }),
  logger: new PinoLogger({
    name: "Mastra",
    level: "info",
  }),
  observability: {
    default: { enabled: true },
  },
});
