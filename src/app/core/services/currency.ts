import axios, { AxiosResponse } from 'axios';

import { CurrencyRate } from '../models/currency';
import { currencyToOptions } from '../utils/currency.util';
import { Currency } from '../enums/currency';
import { environment } from '../../../environment';

export const getCurrencyRate = async (fromCurrency: string, toCurrency: string): Promise<number> => {
  const result: AxiosResponse<any> = await axios(`${ environment.apiUrl }symbols=${ toCurrency }&base=${ fromCurrency }`);
  if (result.data) {
    return result.data.rates[toCurrency];
  }
  return 1;
};

export const getAllCurrencyRates = async (): Promise<CurrencyRate[]> => {
  const result: AxiosResponse<any> = await axios(`${ environment.apiUrl }base=USD`);
  const currencyOptions = currencyToOptions(Currency, false).filter((option) => option.value != 'USD');
  if (result.data) {
    return currencyOptions.map((option) => {
      return {
        currency: option.value,
        name: option.label,
        rate: result.data.rates[option.value].toFixed(6) || 0
      }
    });
  }
  return [];
};

