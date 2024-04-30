const hiddenValue = 'hidden';
const autoValue = 'auto';

export const changeDocumentBodyOverflow = (isHidden: boolean) => {
  document.body.style.overflow = isHidden ? hiddenValue : autoValue;
};
