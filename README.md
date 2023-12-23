# Next.js Application with Google OAuth2 & OpenAI Summarizer

### Overview
This application is a modern web platform built with Next.js 14, leveraging Google OAuth2 for authentication and incorporating OpenAI's advanced summarization capabilities. It supports CRUD (Create, Read, Update, Delete) operations for blogs and prompts, making it an ideal solution for content management and generation.

### Features
- Google OAuth2 Integration: Secure user authentication utilizing Google's OAuth2 protocol.
- OpenAI Summarizer: Leverage OpenAI's API to provide summarization features for blog content.
- CRUD Operations: Full support for creating, reading, updating, and deleting blog posts and prompts.
- Next.js 14 & API Routes: Utilizes the latest features of Next.js, including the new api_router for efficient backend(MongoDB) functionality.
- Responsive Design: Crafted to provide an optimal viewing experience across a wide range of devices.
- Tailwind CSS: Leverage the powerful Tailwind CSS for responsiveness and modern looking.
- Utilizing React Markdown and MD-editor for blog content customization.

### Requirements
- Include a .env file in the toplevel folder.
  ```bash
  GOOGLE_CLIENT_ID=your_google_client_id
  GOOGLE_CLIENT_SECRET=your_google_client_secret
  OPENAI_API_KEY=your_openai_api_key
  MONGODB_URI=your_mongodb_uri
  NEXTAUTH_URL=http://localhost:3000

  ```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started


First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
