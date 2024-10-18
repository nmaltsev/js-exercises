## _.merge() from Lodash
Lodash  can't resolve collisions correctly:
``` JS
// lodash@4.17.15
var object = {
  'a': [
    { 'id': 1, 'value': 1 },
    { 'id': 2, 'value': null }
  ]
};
 
var other = {
  'a': [{ 'id': 3, 'value': null }]
};
 
_.merge(object, other); 

{
   "a": [
      {
         "id": 3,
         "value": null
      },
      {
         "id": 2,
         "value": null
      }
   ]
}

```

``` JS
var object = {
  'a': [
    { 'id': 1, 'value': 1 },
    { 'id': 2, 'value': null }
  ]
};
 
var other = {
  'a': [{ 'id': 2, 'value': 1 }]
};
 
_.merge(object, other);

{
   "a": [
      {
         "id": 2,
         "value": 1
      },
      {
         "id": 2,
         "value": null
      }
   ]
}
```
