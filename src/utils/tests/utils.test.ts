import { getDateDays, getMonths, getYears } from '@/utils/dateOfBirth';
import { getCutString } from '@/utils/getCutString';

describe('Utils test', () => {
  it('Utils for working with date', () => {
    const years = new Date().getFullYear() - 1899;

    expect(getYears().length).toBe(years);
    expect(getMonths(2023)).toHaveLength(12);
    expect(getDateDays(1, 2024)).toHaveLength(29);
  });

  it('Should return correct value for getCutString function', () => {
    const string = 'String for cutting';
    const maxLength = 5;

    expect(getCutString(string, maxLength).length).toBe(maxLength);
  });
});
