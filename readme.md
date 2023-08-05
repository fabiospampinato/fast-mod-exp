# Fast Mod Exp

Fast modular exponentiation function, for numbers and bigints.

## Install

```sh
npm install --save fast-mod-exp
```

## Usage

This is equivalent to doing `( a % b ) % n`, assuming bigints or infinite precision, but way faster in many cases.

```ts
import fme from 'fast-mod-exp';

{ // It works with bigints
  const a = 123n;
  const b = 23n;
  const n = 531n;
  const result = fme ( a, b, n ); // => 171n
}

{ // It works with numbers also
  const a = 123;
  const b = 23;
  const n = 531;
  const result = fme ( a, b, n ); // => 171
}
```

## License

MIT © Fabio Spampinato
