import { generateRandomPassword } from './password-generator';
import { Letters, Numbers, Symbols } from './characters';

describe('PasswordGenerator', () => {

  describe('generateRandomPassword()', () => {

    const options = {
      length: 6,
      characters: 'abc'.split('')
    };

    const DefaultOptions = {
      length: 33,
      characters: [
        ...Numbers,
        ...Letters,
        ...Symbols
      ]
    };

    function expectContainsOnlyCharactersIn(password: string, characters: string[]): void {
      for (let i = 0; i < password.length; i++) {
        expect(characters.indexOf(password.charAt(i)) !== -1).toBe(true);
      }
    }

    it('should use length option', () => {
      const password = generateRandomPassword(options);
      expect(password.length).toBe(options.length);
    });

    it('should use characters option', () => {
      const password = generateRandomPassword(options);
      expectContainsOnlyCharactersIn(password, options.characters);
    });

    it('should use default options', () => {
      const password = generateRandomPassword();
      expect(password.length).toBe(DefaultOptions.length);
      expectContainsOnlyCharactersIn(password, DefaultOptions.characters);
    });

    it('should use default length when not specified', () => {
      const options = {
        characters: 'efg'.split('')
      };
      const password = generateRandomPassword(options);
      expect(password.length).toBe(DefaultOptions.length);
    });

    it('should use default characters when not specified', () => {
      const options = {
        length: 1
      };
      const password = generateRandomPassword(options);
      expectContainsOnlyCharactersIn(password, DefaultOptions.characters);
    });

    it('should throw error for length < 1', () => {
      expect(() => generateRandomPassword({ length: 0 })).toThrowError();
    });

    it('should throw error for length < 0', () => {
      expect(() => generateRandomPassword({ length: -1 })).toThrowError();
    });

    it('should throw error for characters array being empty', () => {
      expect(() => generateRandomPassword({ characters: [] })).toThrowError();
    });

  });

});
