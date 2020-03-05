const path = require(`path`)
const slash = require(`slash`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions
  /* createRedirect({
    fromPath: "/",
    toPath: "/home",
    redirectInBrowser: true,
    isPermanent: true,
  }) */
  // The “graphql” function allows us to run arbitrary
  // queries against the local Gatsby GraphQL schema. Think of
  // it like the site has a built-in database constructed
  // from the fetched data that you can run queries against.
  const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            slug
            status
            template
            title
            content
          }
        }
      }
      allWordpressPost {
        edges {
          node {
            id
            slug
            status
            template
            wordpress_id
            format
            title
            content
            excerpt
            date(formatString: "Do MMM YYYY HH:mm")
          }
        }
      }
      allWordpressWpPortfolio {
        edges {
          node {
            id
            title
            guid
            excerpt
            slug
            content
            featured_media {
              source_url
            }
            acf {
              portfolio_url
            }
          }
        }
      }
    }
  `)

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors)
  }

  // Access query results via object destructuring
  const {
    allWordpressPage,
    allWordpressPost,
    allWordpressWpPortfolio,
  } = result.data

  //-----WP PAGES
  const pageTemplate = path.resolve(`./src/templates/page.js`)
  const portfolioUnderContentTemplate = path.resolve(
    "./src/templates/portfolioUnderContent.js"
  )
  // We want to create a detailed page for each page node.
  // The path field contains the relative original WordPress link
  // and we use it for the slug to preserve url structure.
  // The Page ID is prefixed with 'PAGE_'
  allWordpressPage.edges.forEach(edge => {
    // Gatsby uses Redux to manage its internal state.
    // Plugins and sites can use functions like "createPage"
    // to interact with Gatsby.
    createPage({
      // Each page is required to have a `path` as well
      // as a template component. The `context` is
      // optional but is often necessary so the template
      // can query data specific to each page.
      path: `/${edge.node.slug}`,
      component: slash(
        edge.node.template === "portfolio_under_content.php"
          ? portfolioUnderContentTemplate
          : pageTemplate
      ),
      context: edge.node, //edge.node contains all the data for our page
    })
  })

  //-----WP POSTS
  const postTemplate = path.resolve(`./src/templates/blogPostList.js`)
  // We want to create a detailed page for each post node.
  // The path field stems from the original WordPress link
  // and we use it for the slug to preserve url structure.
  // The Post ID is prefixed with 'POST_'
  const posts = allWordpressPost.edges
  const postsPerPage = 2
  const numberOfPages = Math.ceil(posts.length / postsPerPage)
  const pagingDisplay = 3

  Array.from({ length: numberOfPages }).forEach((page, index) => {
    createPage({
      path: index === 0 ? "/blog" : `/blog/${index + 1}`,
      component: slash(postTemplate),
      context: {
        posts: posts.slice(
          index * postsPerPage,
          index * postsPerPage + postsPerPage
        ),
        numberOfPages,
        pagingDisplay,
        currentPage: index + 1,
      },
    })
  })

  //-----WP SINGLE POST
  const singlePostTemplate = path.resolve(`./src/templates/post.js`)

  allWordpressPost.edges.forEach(edge => {
    createPage({
      path: `/post/${edge.node.slug}`,
      component: slash(singlePostTemplate),
      context: edge.node, //edge.node contains all the data for our post
    })
  })

  //-----PORTFOLIO POSTS
  const portfolioTemplate = path.resolve(`./src/templates/portfolio.js`)

  allWordpressWpPortfolio.edges.forEach(edge => {
    createPage({
      path: `/portfolio/${edge.node.slug}`,
      component: slash(portfolioTemplate),
      context: edge.node, //edge.node contains all the data for our post
    })
  })
}
