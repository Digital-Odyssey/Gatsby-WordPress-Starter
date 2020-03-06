# Gatsby Wordpress Starter

A starting build for a headless WordPress setup with Gatsby. Includes support for a custom post type and a custom blog template with paging. This starting build was taken from the Udemy course called "Gatsby JS: Build static sites with React WordPress and GraphQL" by Tom Phillips. The paging system was a bit incomplete so i made a few improvements to that. I will also be adding support for comments in a future update.

## Live demo running on Netlify:

https://thirsty-fermi-fdeecf.netlify.com/

## How to use:

1.  Clone the repo to your local drive

2.  Install the required dependencies with NPM

3.  Update the "baseUrl" parameter in gatsby-config.js (on line 38) with the path to your local WordPress installation.

4.  Install the following plugins on your local WordPress installation:

```
    - Advanced Custom Fields
    - ACF to REST API
    - WP REST API Menus
    - WP REST API logo
    - WP REST API favicon
```

5.  Populate some pages and posts and create a menu in WordPress. The menu does not need to be assigned to a display location since it is being parsed from the REST API with GraphQL.

6.  Upload a favicon and site logo in the theme customizer area under Site Identity.

7.  Create a custom post type on your local WordPress installation and call it portfolio (be sure to set the "show_in_rest" parameter to true to expose the CPT to the REST API) or you can copy and paste the code below into your functions.php file:

```
add_theme_support( 'custom-logo' );
add_theme_support( 'menus' );
add_theme_support( 'post-thumbnails' );

function create_portfolio_post_type() {

    register_post_type(
                        'portfolio',
                            array(
                            'labels' => array(
                            'name' => **('Portfolio'),
                            'singular_name' => **('Portfolio')
                            ),
    'public' => true,
    'show_in_admin_bar' => true,
    'show_in_rest' => true
    )
    );

    add_post_type_support('portfolio', array('thumbnail', 'excerpt'));

}

add_action('init', 'create_portfolio_post_type');
```

8. Create a custom WordPress template in the root of your theme and label the file portfolio_under_content.php. Within the file just add a template name so you can reference it from the WordPress admin Page Attributes -> Template list.

9. Under Custom Fields in WordPress create a new field groupd labelled "Portfolio" and add a new field lablled "portfolio_url". Then under "Rules" create a post type rule which is equal to "Portfolio"

10. Run "gatsby develop" in your terminal from your preferred IDE to start gatsby on localhost:8000.
