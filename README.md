## node-fp-exp-01 ##

Experiment with Functional Programming in Node using:

  * ImmutableJS
  * Ramda
  * Redux

Example:

    [jfathman@cloud ~/work/git/node-fp-exp-01]$ ./app.js 
    Before INCREMENT 1 Map { "id": "abc", "counter": 0 }
    After  INCREMENT 1 Map { "id": "abc", "counter": 1 }
    After  DECREMENT 1 Map { "id": "abc", "counter": 0 }

Example:

    [jfathman@cloud ~/work/git/node-fp-exp-01]$ time ./app.js 1000000
    Before INCREMENT 1000000 Map { "id": "abc", "counter": 0 }
    After  INCREMENT 1000000 Map { "id": "abc", "counter": 1000000 }
    After  DECREMENT 1000000 Map { "id": "abc", "counter": 0 }

    real    0m4.943s
    user    0m4.226s
    sys     0m0.716s
