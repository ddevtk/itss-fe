import LessonData from 'components/Lessons/CorrectWord/data';
import useCloseNavigation from 'hooks/useCloseNavigation';
import useTitle from 'hooks/useTitle';
import React from 'react';
import { useLocation } from 'react-router-dom';

function LessonDataPage() {
  useTitle('Lessons theo trình độ');
  useCloseNavigation();
  const location = useLocation();
  const { page } = location.state;
  const { packInfo } = location.state;
  const { perPage } = location.state;
  console.log(page, packInfo, perPage);
  return <LessonData page={page} packInfo={packInfo} perPage={perPage} />;
}

export default LessonDataPage;
