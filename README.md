# MCP 邮件通知服务

本项目基于 [Model Context Protocol (MCP)](https://github.com/modelcontext/modelcontextprotocol) 实现了一个简单的邮件通知服务，支持通过 SSE（Server-Sent Events）与客户端通信，并通过 QQ 邮箱发送通知邮件。

## 功能特性

- 提供 SSE 实时消息推送接口
- 支持通过 MCP 协议发送邮件通知
- 健康检查接口
- 支持优雅关闭所有连接

## 目录结构

```
.
├── .env                # 环境变量配置
├── package.json        # 项目依赖与脚本
├── src/
│   ├── index.ts        # 服务器入口
│   ├── mcp/
│   │   └── notify.ts   # MCP 通知服务实现
│   └── tool/
│       └── notify.ts   # 邮件发送工具
└── tsconfig.json       # TypeScript 配置
```

## 快速开始

1. **安装依赖**

   ```sh
   npm install
   ```

2. **配置环境变量**

   在项目根目录下创建 `.env` 文件，内容示例：

   ```
   SMTP_USER=你的QQ邮箱
   SMTP_PASS=你的QQ邮箱SMTP授权码
   ```

3. **启动服务**

   ```sh
   npx ts-node src/index.ts
   ```

   默认监听端口为 `8721`，可通过环境变量 `PORT` 修改。

## API 说明

- `GET /health`  
  健康检查接口，返回服务状态。

- `GET /sse`  
  建立 SSE 连接，用于实时消息推送。

- `POST /messages?sessionId=xxx`  
  客户端发送消息接口，需携带 `sessionId`。

## MCP 工具：notify

- **方法**：`notify`
- **参数**：
  - `method`：通知方式，目前仅支持 `"email"`
  - `to`：收件人邮箱
  - `content`：邮件内容

## 依赖

- [@modelcontextprotocol/sdk](https://www.npmjs.com/package/@modelcontextprotocol/sdk)
- [nodemailer](https://nodemailer.com/about/)
- [zod](https://zod.dev/)
- [dotenv](https://github.com/motdotla/dotenv)

## 许可协议

MIT
