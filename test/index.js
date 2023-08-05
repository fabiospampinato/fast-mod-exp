
/* IMPORT */

import {describe} from 'fava';
import fme from '../dist/index.js';

/* HELPERS */

const rand = max => Math.ceil ( Math.random () * max );

/* MAIN */

describe ( 'Fast Mod Exp', it => {

  it ( 'works with bigint', t => {

    for ( let i = 0; i < 10_000; i++ ) {

      const a = BigInt ( rand ( 100 ) );
      const b = BigInt ( rand ( 5 ) );
      const n = BigInt ( rand ( 1000 ) );

      const result = fme ( a, b, n );
      const expected = ( a ** b ) % n;

      t.is ( result, expected );

    }

  });

  it ( 'works with numbers', t => {

    for ( let i = 0; i < 10_000; i++ ) {

      const a = rand ( 100 );
      const b = rand ( 5 );
      const n = rand ( 1000 );

      const result = fme ( a, b, n );
      const expected = ( a ** b ) % n;

      t.is ( result, expected );

    }

  });

  it ( 'works around precision issues with numbers', t => {

    t.is ( fme ( 123n, 23n, 531n ), 171n );
    t.is ( fme ( 123, 23, 531 ), 171 );

  });

});
