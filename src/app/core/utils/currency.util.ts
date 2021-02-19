import { Option } from '../models/option';

export function currencyToOptions(source: any, showKey = true): Option<string>[] {
  return Object.keys(source).map((key: string) => {
    // @ts-ignore
    return { label: `${source[key]}${showKey ? ' (' + key + ') ' : ''}`, value: key };
  });
}
