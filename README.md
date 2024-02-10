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


## Additional Notes
- The Api seems to have a bug in the endpoint `people/17/`. This specific URL sends a 404 response and the endpoints with ids>17 return
  the details of the persons at index `index-1`.

- Used Swr for data fetching.


## Points that could be improved
- The Application would benefit from the uage of typescript as the api responsed from the endpoints could be implemneted with interfaces instead of the keys   defintions in the utils folder.

- LocalStorage or url params could be used to presist the current page of the user. Which could be used to redirect to the previously accessed page intead of at the first page.
