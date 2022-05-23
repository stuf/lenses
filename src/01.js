const { inspect } = require('util');
const R = require('ramda');
const L = require('partial.lenses');
const { user } = require('./data');
const { runFirst, log } = require('./shared');

runFirst();

const fname = L.get('first_name', user);
const lname = L.get('last_name', user);
const phone = L.get(['contact', 'phone_number'], user);
const created = L.get('created_at', user);

// log({ fname, lname, phone, created: +created });

//

const user2 = L.set('first_name', 'Bob', user);

log({ user2 });
