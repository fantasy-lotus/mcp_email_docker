# My SAM App

This project is an AWS Serverless Application Model (SAM) application that demonstrates how to create and deploy a simple AWS Lambda function using TypeScript.

## Project Structure

```
my-sam-app
├── src
│   ├── handlers
│   │   └── hello.ts        # Contains the Lambda function handler
│   └── types
│       └── index.ts        # Defines the event types
├── events
│   └── event.json          # Sample event data for testing
├── template.yaml            # AWS SAM template for defining resources
├── package.json             # NPM configuration file
├── tsconfig.json           # TypeScript configuration file
└── README.md                # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (version 14.x or later)
- AWS CLI configured with your credentials
- AWS SAM CLI

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd my-sam-app
   ```

2. Install the dependencies:

   ```
   npm install
   ```

### Building the Project

To build the project, run:

```
sam build
```

### Testing the Lambda Function

You can test the Lambda function locally using the sample event data provided in `events/event.json`:

```
sam local invoke HelloFunction -e events/event.json
```

### Deploying the Project

To deploy the application to AWS, run:

```
sam deploy --guided
```

Follow the prompts to configure your deployment settings.

## License

This project is licensed under the MIT License. See the LICENSE file for details.