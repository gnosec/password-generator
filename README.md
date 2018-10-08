[![Build Status](https://travis-ci.org/gnosec/password-generator.svg?branch=develop)](https://travis-ci.org/gnosec/password-generator)

# Password Generator

Shared library with password generation utilities

## Install

```bash
npm install --save @gnosec/password-generator
```

## Usage

```typescript
import {
  generateRandomPassword,
  Numbers,
  Letters
} from '@gnosec/password-generator';

console.log(generateRandomPassword());
// XW*g1VVizD*KQ@0Ojj"x3'VHv[p1sKE4H

console.log(
  generateRandomPassword({
    length: 8,
    characters: [...Numbers, ...Letters]
  })
);
// PVf20mBm
```
