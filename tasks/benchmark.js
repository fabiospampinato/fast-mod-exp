
/* IMPORT */

import benchmark from 'benchloop';
import fme from '../dist/index.js';

/* MAIN */

benchmark.config ({
  iterations: 10
});

benchmark ({
  name: 'fme',
  fn: () => {
    fme ( 765314n, 226423n, 905693n );
    fme ( 804824n, 2n, 905693n );
    fme ( 905692n, 2n, 905693n );
    fme ( 544794n, 226425n, 905701n );
    fme ( 82143n, 2n, 905701n );
    fme ( 905700n, 2n, 905701n );
  }
});

benchmark ({
  name: 'native',
  fn: () => {
    ( 765314n ** 226423n ) % 905693n;
    ( 804824n ** 2n ) % 905693n;
    ( 905692n ** 2n ) % 905693n;
    ( 544794n ** 226425n ) % 905701n;
    ( 82143n ** 2n ) % 905701n;
    ( 905700n ** 2n ) % 905701n;
  }
});

benchmark.summary ();
