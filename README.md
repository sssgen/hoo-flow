# HooFlow

HooFlow is an innovative AI-powered tool designed to revolutionize the way users interact with their notes. By leveraging advanced natural language processing techniques, HooFlow reads user's notes and provides accurate answers to their questions, making information retrieval effortless and efficient.

## Features

- **Note Analysis**: HooFlow can process and understand text from a variety of note-taking formats.
- **Question Answering**: Ask any question related to your notes, and HooFlow will provide you with precise answers.
- **Intuitive Interface**: Easy to use interface for managing your notes and interacting with the AI.

## Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sssgen/hoo-flow
2. Navigate to the HooFlow directory:
   ```bash
   cd hoo-flow
3. Install the required packages:
   ```bash
   npm install
4. Set up your .env file:
   -**NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY** - can be found on [clerk.com](https://clerk.com/);
   -**CLERK_SECRET_KEY** - can be found on [clerk.com](https://clerk.com/);
   -**DATABASE_URL** - your database url;
   -**ORIGIN** - root domain, for example: http://localhost:3000/
   -**OPENAI_API_KEY** - can be found on [platform.openai.com](https://platform.openai.com/overview);
   -**PINECONE_API_KEY** - can be found on [www.pinecone.io](https://www.pinecone.io/);
5. Run application:
     ```bash
     npm run dev
