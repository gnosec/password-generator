[![Build Status](https://travis-ci.org/gnosec/password-generator.svg?branch=develop)](https://travis-ci.org/gnosec/password-generator)
[![dependencies Status](https://david-dm.org/gnosec/password-generator/status.svg)](https://david-dm.org/gnosec/password-generator)
[![devDependencies Status](https://david-dm.org/gnosec/password-generator/dev-status.svg)](https://david-dm.org/gnosec/password-generator?type=dev)
[![Coverage Status](https://coveralls.io/repos/github/gnosec/password-generator/badge.svg)](https://coveralls.io/github/gnosec/password-generator)

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

generateRandomPassword();
// XW*g1VVizD*KQ@0Ojj"x3'VHv[p1sKE4H

generateRandomPassword({
  length: 8,
  characters: [...Numbers, ...Letters]
});
// PVf20mBm
```
