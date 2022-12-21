import Grid from '@material-ui/core/Grid';
import communicateIcon from 'assets/icons/communicate.png';
import dictionaryIcon from 'assets/icons/dictionary.png';
import editIcon from 'assets/icons/edit.png';
import favoriteIcon from 'assets/icons/favorite.png';
import flashcardIcon from 'assets/icons/flashcard.png';
import friendsIcon from 'assets/icons/friends.png';
import gameIcon from 'assets/icons/game.png';
import grammarIcon from 'assets/icons/grammar.png';
import ipaIcon from 'assets/icons/ipa.png';
import toeicIcon from 'assets/icons/toeic.png';
import verbIcon from 'assets/icons/verb.png';
import medalIcon from 'assets/icons/medal.png';
import FeatureBox from 'components/FeatureBox';
import WordBox from 'components/WordBox';
import { ROUTES } from 'constant';
import useScrollTop from 'hooks/useScrollTop';
import useTitle from 'hooks/useTitle';
import React, { useEffect, useState } from 'react';
import StyleIcon from '@mui/icons-material/Style';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import QuizIcon from '@mui/icons-material/Quiz';
const FEATURE_LIST = [
  {
    title: 'Từ vựng với Flashcard',
    subTitle:
      'Flashcard phương pháp học từ vựng nổi tiếng. Nay hoàn toàn miễn phí trên Hama',
    imgUrl: <StyleIcon className="card-spec2-icon" sx={{ color: '#3498db' }} />,
    to: ROUTES.FLASHCARD,
    color: '#3498db',
  },
  {
    title: 'Từ điển trong Hama',
    subTitle: 'Danh sách từ vựng được phân loại theo cấp độ, loại từ, ...',
    imgUrl: (
      <LocalLibraryIcon className="card-spec2-icon" sx={{ color: '#27ae60' }} />
    ),
    to: ROUTES.DYNO_DICTIONARY,
  },
  {
    title: 'Từ vựng yêu thích của bạn',
    imgUrl: (
      <FavoriteIcon className="card-spec2-icon" sx={{ color: '#e74c3c' }} />
    ),
    subTitle: 'Danh sách những từ vựng yêu thích mà bạn đã lưu',
    to: ROUTES.FAVORITE,
  },
  {
    title: 'Ngữ pháp',
    imgUrl: (
      <GTranslateIcon className="card-spec2-icon" sx={{ color: '#2c3e50' }} />
    ),
    subTitle: 'Danh sách tổng hợp những cấu trúc câu trong tiếng Anh',
    to: ROUTES.GRAMMAR,
  },
  // {
  //   title: 'Từ vựng TOEIC',
  //   subTitle: 'Các từ vựng thường gặp trong đề thi Toeic',
  //   imgUrl: toeicIcon,
  //   to: ROUTES.TOEIC_DICTIONARY,
  // },

  // {
  //   title: 'Động từ bất quy tắc',
  //   imgUrl: verbIcon,
  //   subTitle: 'Tất cả những động từ bất quy tắc trong tiếng Anh',
  //   to: ROUTES.IRREGULAR,
  // },

  {
    title: 'Làm bài Test',
    imgUrl: <QuizIcon className="card-spec2-icon" sx={{ color: '#f7ce42' }} />,
    subTitle:
      'Ôn luyện kiến thức hiệu quả và đỡ nhàm chán hơn qua việc làm bài test',
    to: ROUTES.GAMES.HOME,
  },
  // {
  //   title: 'Bảng xếp hạng',
  //   imgUrl: medalIcon,
  //   subTitle: 'Cùng xem thành tích của bạn bè và những người khác nhé',
  //   to: ROUTES.LEADERBOARD,
  // },
  // {
  //   title: 'Đóng góp',
  //   imgUrl: editIcon,
  //   subTitle:
  //     'Hama rất mong được sự đóng góp của bạn. Bạn có thể thêm từ mới, sửa lỗi sai',
  //   to: ROUTES.CONTRIBUTION,
  // },
  {
    title: 'Bài học',
    imgUrl: <QuizIcon className="card-spec2-icon" sx={{ color: '#f7ce42' }} />,
    subTitle:
      'Lựa chọn học theo cấp độ N1, N2, N3,..',
    to: ROUTES.LESSONS.HOME,
  },
];

function HomePage() {
  useTitle('Hama - Ứng dụng học tiếng Nhật miễn phí');
  useScrollTop();
  const [wordList, setWordList] = useState();
  useEffect(() => {
    setWordList(JSON.parse(localStorage.getItem('wordList')));
    console.log(wordList);
  }, []);
  return (
    <div className="container my-10">
      <Grid container spacing={3}>
        {wordList == null ? (
          <></>
        ) : (
          <>
            {wordList.map((word, index) => (
              <Grid item xs={12} md={12} lg={4} key={index}>
                <WordBox
                  imgUrl={word.imgUrl}
                  word={word.word}
                  mean={word.mean}
                  index={index}
                />
              </Grid>
            ))}
          </>
        )}
      </Grid>
      <Grid container spacing={3}>
        {FEATURE_LIST.map((box, index) => (
          <Grid item xs={12} md={12} lg={12} key={index}>
            <FeatureBox
              imgUrl={box.imgUrl}
              title={box.title}
              to={box.to}
              subTitle={box.subTitle}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default HomePage;
