import Button from '@material-ui/core/Button';
import WrongIcon from '@material-ui/icons/Cancel';
import RightIcon from '@material-ui/icons/CheckCircle';
import CoinIcon from '@material-ui/icons/MonetizationOn';
import accountApi from 'apis/accountApi';
import highscoreApi from 'apis/highscoreApi';
import winAudioSrc from 'assets/audios/win.mp3';
import cupIcon from 'assets/icons/others/cup.png';
import { COINS, MAX, ROUTES } from 'constant';
import { HIGHSCORE_NAME } from 'constant/game';
import { onPlayAudio } from 'helper/speaker.helper';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setUserCoin } from 'redux/slices/userInfo.slice';
import { cwResultStyle } from './CorrectWord/style';

function convertQuesToCoin(nRight = 0, nWrong = 0, currentCoin = 0) {
  const newCoin =
    nRight * COINS.CORRECT_GAME_PER_QUES -
    nWrong * COINS.CORRECT_GAME_PER_QUES +
    currentCoin;

  if (newCoin < 0) {
    return 0;
  }
  if (newCoin > MAX.USER_COIN) {
    return MAX.USER_COIN;
  }
  return newCoin;
}

function CorrectWordResult({
  gameHistory,
  nRight,
  nWrong,
  nRightConsecutive,
  onReplay,
}) {
  const classes = cwResultStyle();
  const history = useHistory();
  const dispatch = useDispatch();
  const { isAuth, coin } = useSelector((state) => state.userInfo);

  // play win audio
  // useEffect(() => {
  //   onPlayAudio(winAudioSrc);
  // }, []);

  // save coin and update highscore
  useEffect(() => {
    if (!isAuth) return;

    (async function () {
      try {
        const newCoin = convertQuesToCoin(nRight, nWrong, coin);
        highscoreApi.putUpdateHighscore(HIGHSCORE_NAME.TOP_COIN, newCoin);

        highscoreApi.putUpdateHighscore(
          HIGHSCORE_NAME.CORRECT_GAME_RIGHT,
          nRight,
        );

        highscoreApi.putUpdateHighscore(
          HIGHSCORE_NAME.CORRECT_GAME_RIGHT_CONSECUTIVE,
          nRightConsecutive,
        );

        const apiRes = await accountApi.putUpdateUserCoin(newCoin);
        if (apiRes.status === 200) {
          dispatch(setUserCoin(newCoin));
        }
      } catch (error) {}
    })();
  }, []);

  const onGoBack = () => {
    history.push(ROUTES.GAMES.HOME);
  };

  return (
    <div>
      <div className={`${classes.root} flex-center-col`}>
        <img className={classes.img} src={cupIcon} alt="Cup Photo" />
        <div className={`${classes.result} flex-center--ver`}>
          <b>{nRight}</b>&nbsp;Đúng
          <RightIcon className={`${classes.icon} right`} />
          &nbsp;-&nbsp;
          <b>{nRightConsecutive}</b>&nbsp;Đúng liên tiếp
          <RightIcon className={`${classes.icon} right`} />
          &nbsp;-&nbsp;
          <b>{nWrong}</b>&nbsp;Sai
          <WrongIcon className={`${classes.icon} wrong`} />
        </div>

        {isAuth && (
          <div className={`${classes.result} flex-center--ver mt-4`}>
            <CoinIcon
              className={classes.icon}
              style={{ color: '#C3AD1A', marginLeft: 0 }}
            />
            Số coin hiện tại:&nbsp;<b>{coin}</b>
          </div>
        )}

        <div className="mt-10">
          <Button
            className="_btn _btn-outlined-stand mr-5"
            variant="outlined"
            onClick={onGoBack}>
            Quay về
          </Button>
          <Button className="_btn _btn-primary" onClick={onReplay}>
            Chơi lại
          </Button>
        </div>
      </div>
      <h1 className="mt-10 ">Lịch sử bài thi</h1>
      {gameHistory.map((question, index) => {
        var status = question.word === question.userAnswer ? 1 : 2;
        return (
          <>
            <div
              className={`${classes.mainContent} ${
                status !== 0 ? 'disabled' : 'ani-fade'
              }`}>
              {/* question */}
              <div className="flex-center-col mt-10">
                <span className={`${classes.question} t-center`}>
                  {question.mean}
                </span>
                <p
                  className={`${classes.result} ${
                    status === 1 ? 'right' : 'wrong'
                  }`}>
                  {status === 1 ? 'Bạn đã trả lời đúng' : 'Bạn đã trả lời sai'}
                </p>
              </div>

              {/* answers */}

              <div className={classes.answers}>
                <div
                  className={`${classes.answerItem} flex-center-col p-5
                      `}
                  key={index}>
                  <p className="mb-2 t-center right">{question.word}</p>
                  {question.phonetic && (
                    <span className="phonetic t-center">
                      /{question.phonetic}/
                    </span>
                  )}
                </div>
                {question.wrongList.map((answer, index) => (
                  <div
                    className={`${classes.answerItem} flex-center-col p-5
                      `}
                    key={index}>
                    <p
                      className={`mb-2 t-center  ${
                        answer.word === question.userAnswer ? 'wrong' : ''
                      }`}>
                      {answer.word}
                    </p>
                    {answer.phonetic && (
                      <span className="phonetic t-center">
                        /{answer.phonetic}/
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

CorrectWordResult.propTypes = {
  nRight: PropTypes.number,
  nWrong: PropTypes.number,
  nRightConsecutive: PropTypes.number,
  onReplay: PropTypes.func,
};

CorrectWordResult.defaultProps = {
  nRight: 0,
  nWrong: 0,
  nRightConsecutive: 0,
  onReplay: function () {},
};

export default CorrectWordResult;
