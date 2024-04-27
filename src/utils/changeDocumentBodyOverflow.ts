export const changeDocumentBodyOverflow = (isHidden: boolean) => {
  document.body.style.overflow = isHidden ? 'hidden' : 'auto';
};
