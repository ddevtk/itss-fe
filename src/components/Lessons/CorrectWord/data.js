import WordDetailModal from 'components/UI/WordDetailModal';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import DynoDictionary from '.';
import lessonsApi from 'apis/lessonsApi';

function LessonData({page, packInfo, perPage}) {
  const [list, setList] = useState([]);
  // get word pack
  useEffect(() => {
    let isSub = true;

    (async function () {
      try {
        // const apiRes = await lessonsApi.getWordPackCWG(
        //   page,
        //   perPage,
        //   packInfo
        // );
        // if (apiRes.status === 200 && isSub) {
        //   setList(newList);
        // }

        //Day la to fix cung code
        const apiRes = await lessonsApi.getWordPackCWG('','');
        setList(apiRes);
      } catch (error) {
      } finally {
        if (isSub) {
        }
      }
    })();

    return () => (isSub = false);
  }, [page, packInfo]);

  return (
    <>
      <DynoDictionary
        isTOEIC={true}
        list={list}
        loading={''}
        onLoadData={''}
        more={''}
        isFirstLoad={''}
        onSettingWordPack={''}
        onSortTypeChange={''}
        onSearchWord={''}
      />
      <WordDetailModal />
    </>
  );
}

LessonData.propTypes = {
  isTOEIC: PropTypes.bool,
};

LessonData.defaultProps = {
  isTOEIC: false,
};

export default LessonData;
