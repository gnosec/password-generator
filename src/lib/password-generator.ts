import { randomBytes } from 'crypto';
import { toArray } from './support';
import { Letters, Numbers, Symbols } from './characters';
import { isArray, uniq } from 'lodash';

export interface Options {
  length?: number;
  characters?: string[];
}

const DefaultOptions = {
  length: 33,
  characters: [
    ...Numbers,
    ...Letters,
    ...Symbols
  ]
};

export function generateRandomPassword(options: Options = DefaultOptions): string {
  const {length, characters} = createSettings(options);
  return toArray(randomBytes(length))
    .map(byte => characters[ byte % characters.length ])
    .join('');
}

function createSettings(options: Options) {
  if (options === DefaultOptions) {
    return options;
  }
  const settings = {
    ...DefaultOptions,
    ...options
  };
  if (options.characters != null) {
    settings.characters = uniq(options.characters);
  }
  if (typeof settings.length !== 'number') {
    throw new Error(`option "length" must be of type number`);
  }
  if (settings.length < 1) {
    throw new Error(`option "length" must be a number larger than 1`);
  }
  if (!isArray(settings.characters)) {
    throw new Error(`option "characters" must be an array of strings`);
  }
  if (settings.characters.length === 0) {
    throw new Error(`option "characters" must not be empty`);
  }
  return settings;
}
