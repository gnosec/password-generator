# Password Generator

Shared library with password generation utilities

## Install

```bash
npm install --save @gnosec/password-generator
```

## Usage

```typescript
import { PasswordGenerator } from '@gnosec/password-generator';

const randomPassword = new PasswordGenerator().generateRandomPassword();
console.log(randomPassword); //
```
