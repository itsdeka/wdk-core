import {Fraction} from './fraction';
import {describe, it, expect} from 'vitest';
import {parseFraction} from './utils/parseFraction';

describe('Fraction', () => {
  describe('#quotient', () => {
    it('floor division', () => {
      expect(new Fraction(BigInt(8), BigInt(3)).quotient).toEqual(BigInt(2)); // one below
      expect(new Fraction(BigInt(12), BigInt(4)).quotient).toEqual(BigInt(3)); // exact
      expect(new Fraction(BigInt(16), BigInt(5)).quotient).toEqual(BigInt(3)); // one above
    });
  });
  describe('#remainder', () => {
    it('returns fraction after divison', () => {
      expect(new Fraction(BigInt(8), BigInt(3)).remainder).toEqual(
        new Fraction(BigInt(2), BigInt(3)),
      );
      expect(new Fraction(BigInt(12), BigInt(4)).remainder).toEqual(
        new Fraction(BigInt(0), BigInt(4)),
      );
      expect(new Fraction(BigInt(16), BigInt(5)).remainder).toEqual(
        new Fraction(BigInt(1), BigInt(5)),
      );
    });
  });
  describe('#invert', () => {
    it('flips num and denom', () => {
      expect(new Fraction(BigInt(5), BigInt(10)).invert().numerator).toEqual(BigInt(10));
      expect(new Fraction(BigInt(5), BigInt(10)).invert().denominator).toEqual(BigInt(5));
    });
  });
  describe('#add', () => {
    it('multiples denoms and adds nums', () => {
      expect(new Fraction(BigInt(1), BigInt(10)).add(new Fraction(BigInt(4), BigInt(12)))).toEqual(
        new Fraction(BigInt(52), BigInt(120)),
      );
    });

    it('same denom', () => {
      expect(new Fraction(BigInt(1), BigInt(5)).add(new Fraction(BigInt(2), BigInt(5)))).toEqual(
        new Fraction(BigInt(3), BigInt(5)),
      );
    });
  });
  describe('#subtract', () => {
    it('multiples denoms and subtracts nums', () => {
      expect(
        new Fraction(BigInt(1), BigInt(10)).subtract(new Fraction(BigInt(4), BigInt(12))),
      ).toEqual(new Fraction(BigInt(-28), BigInt(120)));
    });
    it('same denom', () => {
      expect(
        new Fraction(BigInt(3), BigInt(5)).subtract(new Fraction(BigInt(2), BigInt(5))),
      ).toEqual(new Fraction(BigInt(1), BigInt(5)));
    });
  });
  describe('#lessThan', () => {
    it('correct', () => {
      expect(
        new Fraction(BigInt(1), BigInt(10)).lessThan(new Fraction(BigInt(4), BigInt(12))),
      ).toBe(true);
      expect(new Fraction(BigInt(1), BigInt(3)).lessThan(new Fraction(BigInt(4), BigInt(12)))).toBe(
        false,
      );
      expect(
        new Fraction(BigInt(5), BigInt(12)).lessThan(new Fraction(BigInt(4), BigInt(12))),
      ).toBe(false);
    });
  });
  describe('#lessThanOrEqualTo', () => {
    it('correct', () => {
      expect(
        new Fraction(BigInt(1), BigInt(10)).lessThanOrEqualTo(new Fraction(BigInt(4), BigInt(12))),
      ).toBe(true);
      expect(
        new Fraction(BigInt(1), BigInt(3)).lessThanOrEqualTo(new Fraction(BigInt(4), BigInt(12))),
      ).toBe(true);
      expect(
        new Fraction(BigInt(5), BigInt(12)).lessThanOrEqualTo(new Fraction(BigInt(4), BigInt(12))),
      ).toBe(false);
    });
  });
  describe('#equalTo', () => {
    it('correct', () => {
      expect(new Fraction(BigInt(1), BigInt(10)).equalTo(new Fraction(BigInt(4), BigInt(12)))).toBe(
        false,
      );
      expect(new Fraction(BigInt(1), BigInt(3)).equalTo(new Fraction(BigInt(4), BigInt(12)))).toBe(
        true,
      );
      expect(new Fraction(BigInt(5), BigInt(12)).equalTo(new Fraction(BigInt(4), BigInt(12)))).toBe(
        false,
      );
    });
  });
  describe('#greaterThan', () => {
    it('correct', () => {
      expect(
        new Fraction(BigInt(1), BigInt(10)).greaterThan(new Fraction(BigInt(4), BigInt(12))),
      ).toBe(false);
      expect(
        new Fraction(BigInt(1), BigInt(3)).greaterThan(new Fraction(BigInt(4), BigInt(12))),
      ).toBe(false);
      expect(
        new Fraction(BigInt(5), BigInt(12)).greaterThan(new Fraction(BigInt(4), BigInt(12))),
      ).toBe(true);
    });
  });
  describe('#greaterThanOrEqualTo', () => {
    it('correct', () => {
      expect(
        new Fraction(BigInt(1), BigInt(10)).greaterThanOrEqualTo(
          new Fraction(BigInt(4), BigInt(12)),
        ),
      ).toBe(false);
      expect(
        new Fraction(BigInt(1), BigInt(3)).greaterThanOrEqualTo(
          new Fraction(BigInt(4), BigInt(12)),
        ),
      ).toBe(true);
      expect(
        new Fraction(BigInt(5), BigInt(12)).greaterThanOrEqualTo(
          new Fraction(BigInt(4), BigInt(12)),
        ),
      ).toBe(true);
    });
  });
  describe('#multiplty', () => {
    it('correct', () => {
      expect(
        new Fraction(BigInt(1), BigInt(10)).multiply(new Fraction(BigInt(4), BigInt(12))),
      ).toEqual(new Fraction(BigInt(4), BigInt(120)));
      expect(
        new Fraction(BigInt(1), BigInt(3)).multiply(new Fraction(BigInt(4), BigInt(12))),
      ).toEqual(new Fraction(BigInt(4), BigInt(36)));
      expect(
        new Fraction(BigInt(5), BigInt(12)).multiply(new Fraction(BigInt(4), BigInt(12))),
      ).toEqual(new Fraction(BigInt(20), BigInt(144)));
    });
  });
  describe('#divide', () => {
    it('correct', () => {
      expect(
        new Fraction(BigInt(1), BigInt(10)).divide(new Fraction(BigInt(4), BigInt(12))),
      ).toEqual(new Fraction(BigInt(12), BigInt(40)));
      expect(
        new Fraction(BigInt(1), BigInt(3)).divide(new Fraction(BigInt(4), BigInt(12))),
      ).toEqual(new Fraction(BigInt(12), BigInt(12)));
      expect(
        new Fraction(BigInt(5), BigInt(12)).divide(new Fraction(BigInt(4), BigInt(12))),
      ).toEqual(new Fraction(BigInt(60), BigInt(48)));
    });
  });
  describe('#asFraction', () => {
    it('returns an equivalent but not the same reference fraction', () => {
      const f = new Fraction(1, 2);
      expect(f.asFraction).toEqual(f);
      expect(f === f.asFraction).toEqual(false);
    });
  });
  describe('#parseFraction', () => {
    it('parses correct fraction', () => {
      expect(parseFraction('5', 0)).toEqual(new Fraction(5, 1));
      expect(parseFraction('0.50', 1)).toEqual(new Fraction(5, 10));
      expect(parseFraction('1.23', 2)).toEqual(new Fraction(123, 100));
      expect(parseFraction('1.23', 4)).toEqual(new Fraction(12300, 10000));
    });
  });
});
