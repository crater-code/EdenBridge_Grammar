import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function PageTitle() {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      '/': 'Edenbridge Grammar - Beyond Schooling',
      '/our-ideology': 'Our Ideology - Edenbridge Grammar',
      '/study': 'Study Programs - Edenbridge Grammar',
      '/study/foundation-phase': 'Foundation Phase - Edenbridge Grammar',
      '/study/formation-phase': 'Formation Phase - Edenbridge Grammar',
      '/study/orientation-phase': 'Orientation Phase - Edenbridge Grammar',
      '/study/direction-phase': 'Direction Phase - Edenbridge Grammar',
      '/study/learning-framework': 'Learning Framework - Edenbridge Grammar',
      '/team/board-of-directors': 'Board of Directors - Edenbridge Grammar',
      '/team/founders-message': "Founder's Message - Edenbridge Grammar",
      '/team/careers': 'Careers - Edenbridge Grammar',
      '/apply-now': 'Apply Now - Edenbridge Grammar',
    };

    document.title = titles[location.pathname] || 'Edenbridge Grammar - Beyond Schooling';
  }, [location]);

  return null;
}

export default PageTitle;
