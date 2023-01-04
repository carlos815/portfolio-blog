---
title: My Second Post!
date: "2015-05-06T23:46:37.121Z"
---

This is my first post on my new fake blog! How exciting!

1. Lists can be nested
   - Four spaces
     - Eight spaces
       - Twelve spaces
          - Don't know how many spaces            
2. And back

I'm sure I'll write a lot more interesting things in the future.

Oh, and here's a great quote from this Wikipedia on
[salted duck eggs](https://en.wikipedia.org/wiki/Salted_duck_egg).

> A salted duck egg is a Chinese preserved food product made by soaking duck
> eggs in brine, or packing each egg in damp, salted charcoal. In Asian
> supermarkets, these eggs are sometimes sold covered in a thick layer of salted
> charcoal paste. The eggs may also be sold with the salted paste removed,
> wrapped in plastic, and vacuum packed. From the salt curing process, the
> salted duck eggs have a briny aroma, a gelatin-like egg white and a
> firm-textured, round yolk that is bright orange-red in color.

![Chinese Salty Egg](./salty_egg.jpg)

You can also write code blocks here!

```js
const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      {/* <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      /> */}
      {author?.name && (
        <p>
          Hi, I'm <strong>{author.name}</strong>

        </p>
      )}
      {author?.summary && <p>{author?.summary}</p>}
    </div>
  )
}
```

| Number | Title                                    | Year |
| :----- | :--------------------------------------- | ---: |
| 1      | Harry Potter and the Philosopher’s Stone | 2001 |
| 2      | Harry Potter and the Chamber of Secrets  | 2002 |
| 3      | Harry Potter and the Prisoner of Azkaban | 2004 |

[View raw (TEST.md)](https://raw.github.com/adamschwartz/github-markdown-kitchen-sink/master/README.md)

This is a paragraph.

    This is a paragraph.

# Header 1

## Header 2

    Header 1
    ========

    Header 2
    --------

# Header 1

## Header 2

### Header 3

#### Header 4

##### Header 5

###### Header 6

    # Header 1
    ## Header 2
    ### Header 3
    #### Header 4
    ##### Header 5
    ###### Header 6

# Header 1

## Header 2

### Header 3

#### Header 4

##### Header 5

###### Header 6

    # Header 1 #
    ## Header 2 ##
    ### Header 3 ###
    #### Header 4 ####
    ##### Header 5 #####
    ###### Header 6 ######

> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

    > Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

> ## This is a header.
>
> 1. This is the first list item.
> 2. This is the second list item.
>
> Here's some example code:
>
>     Markdown.generate();

    > ## This is a header.
    > 1. This is the first list item.
    > 2. This is the second list item.
    >
    > Here's some example code:
    >
    >     Markdown.generate();

- Red
- Green
- Blue

* Red
* Green
* Blue

- Red
- Green
- Blue

```markdown
- Red
- Green
- Blue

* Red
* Green
* Blue

- Red
- Green
- Blue
```

- `code goes` here in this line
- **bold** goes here

```markdown
- `code goes` here in this line
- **bold** goes here
```

1. Buy flour and salt
1. Mix together with water
1. Bake

```markdown
1. Buy flour and salt
1. Mix together with water
1. Bake
```

1. `code goes` here in this line
1. **bold** goes here

```markdown
1. `code goes` here in this line
1. **bold** goes here
```

Paragraph:

    Code

<!-- -->

    Paragraph:

        Code

---

---

---

---

---

    * * *

    ***

    *****

    - - -

    ---------------------------------------

This is [an example](http://example.com "Example") link.

[This link](http://example.com) has no title attr.

This is [an example][id] reference-style link.

[id]: http://example.com "Optional Title"

    This is [an example](http://example.com "Example") link.

    [This link](http://example.com) has no title attr.

    This is [an example] [id] reference-style link.

    [id]: http://example.com "Optional Title"

_single asterisks_

_single underscores_

**double asterisks**

**double underscores**

    *single asterisks*

    _single underscores_

    **double asterisks**

    __double underscores__

This paragraph has some `code` in it.

    This paragraph has some `code` in it.

![Alt Text](https://placehold.it/200x50 "Image Title")

    ![Alt Text](https://placehold.it/200x50 "Image Title")


This 

#### Step 1. Creating a new Next.js project

Let's start with our front end.

Follow [Next.js' Getting Started guide](https://nextjs.org/docs/getting-started) to set up a new project.

Next.js is opinionated some things like what your folder structure you should use, but mostly it's just React. If you don't know React, then [go learn it](https://reactjs.org/docs/getting-started.html) and come back 😊 

After you are done and run ```npm run dev``` in your console you should have one of these:

![New project in Next.js](./next.png)

#### Step 2. Setting up a new KeystoneJS project.

This is our backend. This guy runs on Node.js, if you are familiar with Javascript you'll feel right at home.

Same drill as with Next.js, follow [their official documentation on how to get started](https://keystonejs.com/docs/getting-started).

After running ```npm run dev``` you'll be greeted with one of these.

![Account creation in KeystoneJS](./keystone.png)

You should create an account to get to actual dashboard.

#### Step 3.1 Setting up Apollo Client. The frontend

We've got both the front and backend running, now they need to talk to each other. This is where Apollo Client comes in.

In the diagram above, I put the Apollo Client in between or front-end and our backend, but it's actually part of our front-end.

So go to your Next.js project and install the dependencies, as shown in their [get started guide](https://www.apollographql.com/docs/react/get-started#step-2-install-dependencies).

Then create a file called ``apollo-client.js`` in the root folder with this:

```js
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

const uri = process.env.NODE_ENV == "production" ?
    process.env.NEXT_PUBLIC_BACKEND_URL : "http://localhost:3000/api/graphql"

const link = createHttpLink({
    uri,
    credentials: 'include'
});

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
});

export default client
```

The ``uri`` is the URL of the GraphQL endpoint that we want to send requests to. Notice the ``process.env.NEXT_PUBLIC_BACKEND_URL`` variable. When you deploy this project, it's good practice to add this value [as an environment variable in the server](https://vercel.com/docs/concepts/projects/environment-variables) instead of just hard-coding it.

We've exported a ``client`` object, but we need to use it.

Go to your ``pages/_app.js`` and wrap the ``<Component {...pageProps} />`` with an ApolloProvider.

It's better if I show you:

```js
import { ApolloProvider } from '@apollo/client'
import client from '../apollo-client'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return <ApolloProvider client={client}>
    <Component {...pageProps} />
  </ApolloProvider>
}
```

We've wrapped the Component with an ApolloProvider, and added the ``client`` object we just created. We created it in ``_app.js`` because it's basically the root of our project. This makes sure that every component in every page ever will have everything necessary to connect to our backend.

#### Step 3.1 Setting up Apollo Client. The backend

In your keystone project, go to your ``keystone.js`` file and replace it with this:

```typescript
import { config } from '@keystone-6/core';

// to keep this file tidy, we define our schema in a different file
import { lists } from './schema';

// authentication is configured separately here too, but you might move this elsewhere
// when you write your list-level access control functions, as they typically rely on session data
import { withAuth, session } from './auth';

export default withAuth(
  config({
    server: {
      cors: {
        origin: ["http://localhost:3001"], //TODO: add the production server when deploying
        credentials: true,
        methods: ['GET', 'PUT', 'POST'],
      },
      port: 3000,
      maxFileSize: 200 * 1024 * 1024,
      healthCheck: true,
    },
    db: {
      // we're using sqlite for the fastest startup experience
      //   for more information on what database might be appropriate for you
      //   see https://keystonejs.com/docs/guides/choosing-a-database#title
      provider: 'sqlite',
      url: 'file:./keystone.db',
    },
    lists,
    session,
  })
);
```

We've added the server part to it. This tells the server which urls is he allowed to connect to. For now it's just our localhost.

##### Step 4. Check if step 3 worked

Let's create some test query in our front end to see if it can connect to our backend.

The default keystone project comes with a posts schema already configured. So let's query all posts to see what comes back.

Our query will be:

```graphQl
query {
  posts {
    title
    content {
      document
    }
  }
}
```

You can go to ``pages/index.js`` and replace its content with this:

```jsx
import styles from '../styles/Home.module.css'
import { gql, useQuery } from '@apollo/client'

const TEST_QUERY = gql`
query {
  posts {
    title
    content {
      document
    }
  }
}
`
export default function Home() {
  const { data, loading, error } = useQuery(TEST_QUERY)
  return (
    <>
      <main className={styles.main}>
        {data && data.posts.length == 0 && <div>No Posts found</div>}
        {data && data.posts.map(post => <div>{post.title}</div>)}
      </main>
    </>
  )
}
```

Let's explain what's going on:

- To create queries with Apollo you use ``gql``.
- And to use said query, you use ``useQuery``, which gives you an object with ``{data, loading, error}`` that you can use to display your data.


Did it work? does it show your posts? try creating some posts via de Keystone CMS to see if they show up.

If it doesn't work, check your console for clues. check if the urls that you gave keystone and Next.js are correct, those can change if the ports are already in use. In your backend, you add the url of your frontend (mine is ``http://localhost:3001``), and in your frontend, you add the url of your backend (mine is ``http://localhost:3000/api/graphql``).

Step 5. Create custom schemas for products.
