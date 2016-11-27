#!/usr/bin/env node

// app.js

'use strict';

const Immutable = require('immutable');
const R = require('ramda');
const Redux = require('redux');

const initialState = Immutable.Map({ id: 'abc', counter: 0 });

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state.set('counter', R.inc(state.get('counter')));
        case 'DECREMENT':
            return state.set('counter', R.dec(state.get('counter')));
        default:
            return state;
    }
};

const store = Redux.createStore(reducer, initialState);

const limit = R.defaultTo(1, process.argv[2]);

console.log('Before INCREMENT', limit, store.getState());

for (let i = 0; i < limit; i++) {
    store.dispatch({ type: 'INCREMENT' });
}

console.log('After  INCREMENT', limit, store.getState());

for (let i = 0; i < limit; i++) {
    store.dispatch({ type: 'DECREMENT' });
}

console.log('After  DECREMENT', limit, store.getState());

