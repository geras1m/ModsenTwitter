import { FirebaseError } from 'firebase/app';

import { shortMonthNames } from '@/constants';
import { ErrorsMessages, FirebaseErrorCodes } from '@/types';
import { getDateDays, getMonths, getYears } from '@/utils/dateOfBirth';
import { getCutString } from '@/utils/getCutString';
import { getFirebaseErrorMessage } from '@/utils/getFirebaseErrorMessage';
import { getPhoneMask } from '@/utils/getPhoneMask';
import { getTweetDateForTweet } from '@/utils/getTweetDateForTweet';

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

  it('Should return correct value for getPhoneMask function', () => {
    const testValue1 = '375';
    const testValue2 = '375291';
    const testValue3 = '375291234567';
    const expectedTestResult1 = '+375';
    const expectedTestResult2 = '+375 (29) 1';
    const expectedTestResult3 = '+375 (29) 1234567';

    expect(getPhoneMask(testValue1)).toBe(expectedTestResult1);
    expect(getPhoneMask(testValue2)).toBe(expectedTestResult2);
    expect(getPhoneMask(testValue3)).toBe(expectedTestResult3);
  });

  it('Should return correct value for getFirebaseErrorMessage function', () => {
    const errorTest1 = new FirebaseError(FirebaseErrorCodes.emailAlreadyInUse, 'message');
    const errorTest2 = new FirebaseError(FirebaseErrorCodes.invalidPassword, 'message');
    const errorTest3 = new FirebaseError('unexpected error', 'message');

    expect(getFirebaseErrorMessage(errorTest1)).toBe(ErrorsMessages.userExist);
    expect(getFirebaseErrorMessage(errorTest2)).toBe(ErrorsMessages.invalidPassword);
    expect(getFirebaseErrorMessage(errorTest3)).toBe(ErrorsMessages.unexpectedError);
  });

  it('Should return correct value for getTweetDateForTweet function', () => {
    const fullDate = new Date();
    const currentData = fullDate.getDate();
    const currentMonth = shortMonthNames[fullDate.getMonth()];
    const expectedValue = `${currentMonth} ${currentData}`;

    expect(getTweetDateForTweet()).toBe(expectedValue);
  });
});
