
/* HELPERS */

const fme_bigint = ( a: bigint, b: bigint, n: bigint ): bigint => {

  let r = 1n;
  let x = a % n;

  while ( b ) {

    if ( b & 1n ) {

      r = ( r * x ) % n;

    }

    x = ( x * x ) % n;

    b = b >> 1n;

  }

  return r;

};

/* MAIN */

function fme ( a: bigint, b: bigint, n: bigint ): bigint;
function fme ( a: number, b: number, n: number ): number;
function fme ( a: bigint | number, b: bigint | number, n: bigint | number ): bigint | number {

  if ( typeof a === 'bigint' && typeof b === 'bigint' && typeof n === 'bigint' ) {

    return fme_bigint ( a, b, n );

  } else {

    return Number ( fme_bigint ( BigInt ( a ), BigInt ( b ), BigInt ( n ) ) );

  }

}

/* EXPORT */

export default fme;
