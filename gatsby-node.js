const path = require(`path`);
const slash = require(`slash`);
const { paginate } = require("gatsby-awesome-pagination");

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;
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
            title
            template
            status
            slug
            wordpress_id
            content
            date(formatString: "Do MMM YYYY HH:mm")
            excerpt
            format
            tags {
              id
              name
              slug
            }
            categories {
              id
              name
              slug
            }
            author {
              name
              url
              link
              slug
              path
            }
          }
        }
      }
      allWordpressCategory {
        nodes {
          id
          name
          slug
          count
        }
      }
      allWordpressTag {
        nodes {
          id
          name
          slug
          count
        }
      }
      allWordpressWpPortfolio {
        edges {
          node {
            id
            title
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
      allWordpressWpUsers {
        nodes {
          name
          description
          url
          avatar_urls {
            wordpress_24
            wordpress_48
            wordpress_96
          }
          id
          slug
          path
        }
      }
    }
  `);

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors);
  }

  // Access query results via object destructuring
  const {
    allWordpressPage,
    allWordpressPost,
    allWordpressCategory,
    allWordpressTag,
    allWordpressWpPortfolio,
    allWordpressWpUsers,
  } = result.data;

  //-----WP PAGES
  const pageTemplate = path.resolve(`./src/templates/page.js`);
  const portfolioUnderContentTemplate = path.resolve(
    "./src/templates/portfolio/portfolioUnderContent.js"
  );
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
    });
  });

  //-----WP POSTS
  const postTemplate = path.resolve(`./src/templates/blog/blog.js`);
  // We want to create a detailed page for each post node.
  // The path field stems from the original WordPress link
  // and we use it for the slug to preserve url structure.
  // The Post ID is prefixed with 'POST_'
  const posts = allWordpressPost.edges;
  const postsPerPage = 5;
  const numberOfPages = Math.ceil(posts.length / postsPerPage);
  const pagingDisplay = 3;

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
    });
  });

  //----WP ARCHIVES
  const archiveTemplate = path.resolve(`./src/templates/blog/archive.js`);

  allWordpressCategory.nodes.forEach(catNode => {
    //filter out posts that belongs to the current category
    const filteredPosts = allWordpressPost.edges.filter(
      //destructure categories
      ({ node: { categories } }) => categories.some(el => el.id === catNode.id)
    );
    //some categories may be emtpy so dont show them
    if (filteredPosts.length > 0) {
      paginate({
        createPage,
        items: filteredPosts,
        itemsPerPage: 5,
        pathPrefix: `/archive/${catNode.slug}`,
        component: slash(archiveTemplate),
        context: {
          catId: catNode.id,
          catName: catNode.name,
          catSlug: catNode.slug,
          catCount: catNode.count,
          categories: allWordpressCategory.nodes,
        },
      });
    }
  });

  //----WP TAGS
  const tagsTemplate = path.resolve(`./src/templates/blog/tags.js`);

  allWordpressTag.nodes.forEach(tagNode => {
    //filter out posts that belongs to the current category
    const filteredPosts = allWordpressPost.edges.filter(
      //destructure categories
      ({ node: { tags } }) => tags.some(el => el.id === tagNode.id)
    );
    //some categories may be emtpy so dont show them
    if (filteredPosts.length > 0) {
      paginate({
        createPage,
        items: filteredPosts,
        itemsPerPage: 5,
        pathPrefix: `/tags/${tagNode.slug}`,
        component: slash(tagsTemplate),
        context: {
          tagId: tagNode.id,
          tagName: tagNode.name,
          tagSlug: tagNode.slug,
          tagCount: tagNode.count,
          tags: allWordpressTag.nodes,
        },
      });
    }
  });

  //-----WP SINGLE POST
  const singlePostTemplate = path.resolve(`./src/templates/post.js`);

  posts.forEach(({ node }, index) => {
    createPage({
      path: `/post/${node.slug}`,
      component: slash(singlePostTemplate),
      context: {
        title: node.title,
        content: node.content,
        pathSlug: node.slug,
        prev: index === 0 ? null : posts[index - 1].node,
        next: index === posts.length - 1 ? null : posts[index + 1].node,
      },
    });
  });

  //-----WP AUTHOR POST
  const authorPostTemplate = path.resolve(`./src/templates/author/author.js`);

  allWordpressWpUsers.nodes.forEach(userNode => {
    createPage({
      path: `/author/${userNode.slug}`,
      component: slash(authorPostTemplate),
      context: {
        name: userNode.name,
        slug: userNode.slug,
        website: userNode.url,
        description: userNode.description,
        largeAvatar: userNode.avatar_urls.wordpress_96,
      },
    });
  });

  //-----PORTFOLIO POSTS
  const portfolioTemplate = path.resolve(
    `./src/templates/portfolio/portfolio.js`
  );

  allWordpressWpPortfolio.edges.forEach(edge => {
    createPage({
      path: `/portfolio/${edge.node.slug}`,
      component: slash(portfolioTemplate),
      context: edge.node, //edge.node contains all the data for our post
    });
  });
};
