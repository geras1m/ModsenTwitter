import { useEffect } from 'react';

import { changeDocumentBodyOverflow } from '@/utils/changeDocumentBodyOverflow';

export const useChangeDocumentBodyOverflow = (value: boolean) => {
  useEffect(() => {
    changeDocumentBodyOverflow(value);
  }, [value]);
};
