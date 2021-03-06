export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */

  this.get('/posts', function() {
    return {
      posts: [
        {
          id: 1,
          title: 'All About Ember Adapters',
          links: {
            user: {
              href: '/users/1'
            }
          }
        },
        {
          id: 2,
          title: 'Adapters N Things',
          links: {
            user: {
              href: '/users/1'
            }
          }
        }
      ]
    }
  });

  this.get('/users/:id', function(params, request) {
    console.log(`Accept: ${request.requestHeaders.Accept}`);
    if (request.requestHeaders.Accept.match(/application\/vnd\.api\+json/)) {
      return {
        data: {
          id: 1,
          type: 'users',
          attributes: {
            name: 'John Doe'
          }
        }
      }
    } else {
      return {
        user: {
          id: 1,
          name: 'John Doe'
        }
      }
    }
  });
}
