This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

---

## Pages & File-Based Routing

Next.js has a file-system based router built on the [_concept of pages_](https://nextjs.org/docs/basic-features/pages).

1. Static Routing
   - [index routes](https://github.com/ModRanjan/learning-nextJs 'Index Routes')
   - [nested routes](https://github.com/ModRanjan/learning-nextJs 'Nested Routes')
2. Dynamic Routing

### Index Routes

When a file is added to the `pages` directory, it's automatically available as a route.

The router will automatically route files named `index` to the root of the directory.

- `pages/index.js` → `/`

### Nested Routes

The router supports nested files. If you create a nested folder structure, files will automatically be routed in the same way still.

- `pages/portfolio/index.js` → `/portfolio/`
- `pages/portfolio/123` → `/portfolio/123`

### Dynamic Routing

To match a dynamic segment, you can use the bracket syntax. This allows you to match named parameters.

- `pages/blog/[...slug].js` → `/blog/:slug (/blog/hello-world)`
- `pages/clients/[username]/[clientId]` → `/:username/clientId (/modRanjan/123)`

---

For more information : [click me](https://nextjs.org/docs/routing/introduction)
