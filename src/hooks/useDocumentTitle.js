import { useEffect } from "react";

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = `Quizzap | ${title}`;
  }, [title]);
};
export { useDocumentTitle };
