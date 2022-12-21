import { useEffect } from 'react';

// set title for component
function useTitle(title = 'Hama', isOverride = false) {
  useEffect(() => {
    if (isOverride) {
      document.title = title;
    } else {
      document.title = title !== 'Hama' ? `${title} - Hama` : title;
    }
  }, []);

  return null;
}

export default useTitle;
