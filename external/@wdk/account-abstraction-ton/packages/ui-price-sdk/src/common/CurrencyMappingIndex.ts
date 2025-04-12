import {type Currency, isToken} from '@layerzerolabs/ui-core';
import type {CurrencyMapping} from '../types';

export class CurrencyMappingIndex<TCurrencyMapping extends CurrencyMapping = CurrencyMapping> {
  constructor(protected readonly mappings: TCurrencyMapping[]) {
    validateMappings(this.mappings);
  }

  // todo: optimize
  get(currency: Currency): TCurrencyMapping | undefined {
    const chainKey: string = currency.chainKey;
    if (isToken(currency)) {
      const address = currency.address.toLowerCase();

      return this.mappings.find(
        (mapping) => mapping.chainKey === chainKey && mapping.address?.toLowerCase() === address,
      );
    }

    return this.mappings.find(
      (mapping) => mapping.chainKey === chainKey && mapping.address == null,
    );
  }
}

function validateMappings(mappings: CurrencyMapping[]) {
  const ids = new Set<string>();
  for (const mapping of mappings) {
    const id = `${mapping.chainKey}:${mapping.address ?? '0x'}`;
    if (ids.has(id)) {
      throw new Error(
        `Duplicate mapping for chainKey ${mapping.chainKey} and address: ${
          mapping.address ?? 'native'
        }`,
      );
    } else {
      ids.add(id);
    }
  }
}
