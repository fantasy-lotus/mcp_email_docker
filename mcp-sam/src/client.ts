import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";

const serverUrl = process.env.MCP_SERVER_URL || "https://pma4wzby7wquykctaynxbzbirq0mfamr.lambda-url.ap-northeast-1.on.aws";

const transport = new StreamableHTTPClientTransport(new URL(serverUrl + "/mcp"));

const client = new Client(
    {
        name: "example-client",
        version: "1.0.0"
    }
);

async function main(): Promise<void> {
    await client.connect(transport);

    // Get list of available tools
    const tools = await client.listTools();
    console.log("Available tools:", tools);

    // Call the calculate tool
    const toolResult = await client.callTool({
      "name": "notify",
      "arguments": {
        "method": "email",
        "to": "lotus0721@outlook.com",
        "content": "hello world"
      }
    });
    console.log("Calculation result:", toolResult.content);
}

main().catch((error: unknown) => {
    console.error('Error running MCP client:', error);
    process.exit(1);
});