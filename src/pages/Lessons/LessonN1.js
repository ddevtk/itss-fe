import useCloseNavigation from 'hooks/useCloseNavigation';
import useTitle from 'hooks/useTitle';

import Grid from '@material-ui/core/Grid';
import wordMatchingIcon from 'assets/icons/games/word-match.png';
import { ROUTES } from 'constant';
import React, { useEffect, useRef, useState } from 'react';

import { Link } from 'react-router-dom';
import useStyle from '../../components/FeatureBox/style';

import QuizIcon from '@mui/icons-material/Quiz';

const { LESSONS } = ROUTES;

const perPage = 20;
function LessonDataPage() {
  useTitle('Lessons theo trình độ');
  useCloseNavigation();
  const classes = useStyle();
  const totalPage = useRef(0);
  const [packInfo, setPackInfo] = useState(() => ({
    type: 'N1',
    topics: [],
  }));
  const [box, setBox] = useState([]);
  // const setBoxTotal = (total) => {
  // };
  // get total word pack

  useEffect(() => {
    (async function () {
      try {
        //Day la goi Api tinh lay ra tong so tu theo type N1 N2 N3 hoac N4 N5 gi do
        // const apiRes = await commonApi.getWordPackTotal(packInfo);
        // if (apiRes.status === 200 && isSub) {
        //   const { total = 0 } = apiRes.data;
        //   totalPage.current = Math.ceil(total / perPage);
        // }
        // totalPage.current = Math.ceil(40 / perPage);
        // for (var i = 0; i < totalPage.current; i++) {
        // setBox((box) => [
        //   ...box,
        //   {
        //     title: `Gói ôn tập từ vựng N1 _ gói ${i+1}`,
        //     subTitle: 'Ôn tập từ vựng theo trình độ N1.',
        //     imgUrl: <QuizIcon className='card-spec2-icon' sx={{ color: "#f7ce42" }}/>,
        //     to: LESSONS.LESSON_PAGE,
        //     packInfo: packInfo,
        //     page: `${i+1}`,
        //     perPage: perPage,
        //   },
        // ]);
        // }

        //Day la to fix cung code
        for (let i = 0; i < 3; i++) {
          setBox((box) => [
            ...box,
            {
              title: `Gói ôn tập từ vựng N1 _ gói ${i + 1}`,
              subTitle: 'Ôn tập từ vựng theo trình độ N1.',
              imgUrl: <QuizIcon className='card-spec2-icon' sx={{ color: "#f7ce42" }}/>,
              to: LESSONS.LESSON_PAGE,
              packInfo: packInfo,
              page: `${i + 1}`,
              perPage: perPage,
            },
          ]);
        }
      } catch (error) {}
    })();
  }, []);
  
  return (
    <div className="container my-10">
      <Grid container spacing={3}>
        {box.map((box, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Link
              to={{
                pathname: box.to,
                state: { page: box.page, packInfo: box.packInfo, perPage:box.perPage },
              }}
              className={`${classes.root} flex-center--ver w-100`}>
              <img className={classes.icon} src={box.imgUrl} alt="Icon" />
              <div>
                <h2 className={classes.title}>{box.title}</h2>
                <p className={classes.subTitle}>{box.subTitle}</p>
              </div>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default LessonDataPage;
