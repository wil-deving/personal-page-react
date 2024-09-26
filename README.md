- This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
- This project also uses [Chakra UI librery].(https://v2.chakra-ui.com/docs/components)
- This project is running on node version 21.6.1

## Getting Started

Fisrt, download the project

```bash
git clone https://github.com/wil-deving/personal-page-react.git
```

Then, install dependencies
```bash
npm install
```

Then, run the development server:

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


## Deploy on Github pages

You must execute next comand

```bash
npm run build
```
So, it will generate "out" folder

### Deploying the project:

- Enter to out folder
- Copy _next contains to a new folder called **logic**
- Edit **index.html** and replace **/_next/** string for **/logic/** string and save
- Upload all files and folders into **out** folder on github pages repository

The built porject is running on repository [Github page].(https://github.com/wil-deving/about-me)

**Branch: gh-pages**

Link to repostory [Github repository].(https://github.com/wil-deving/personal-page-react)


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
