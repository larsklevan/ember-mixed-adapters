I'm trying to convert our back-end API from a standard Rails API to JSONAPI with backward compatibility using the "Accept" header. I'm trying to convert one of my Ember models from REST to JSONAPI but when I traverse a `belongsTo` I don't get the expected "Accept" header.

Example:

If I have a model `post` using `RESTAdapter` / `RESTSerializer` and `user` using `JSONAPIAdapter` and `JSONAPISerializer` then if I do `this.get('store').findRecord('user', 1)` I get the expected `Accept` header of "application/vnd.api+json" but if I do `post.get('user')` I get "application/json, text/javascript, */*; q=0.01". This then fails to deserialize with "Assertion Failed: normalizeResponse must return a valid JSON API document"

Setup:

adapters/post.js

```js
import DS from 'ember-data';
export default DS.RESTAdapter.extend({});
```

adapters/user.js

```js
import DS from 'ember-data';
export default DS.JSONAPIAdapter.extend({});
```

models/post.js

```js
import DS from 'ember-data';
export default DS.Model.extend({
  user: DS.belongsTo('user')
});
```

models/user.js

```js
import DS from 'ember-data';
export default DS.Model.extend({});
```

serializers/post.js

```js
import DS from 'ember-data';
export default DS.RESTSerializer.extend({});
```

serializers/user.js

```js
import DS from 'ember-data';
export default DS.JSONAPISerializer.extend({});
```
