import Speaker from 'components/UI/Speaker';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import useStyle from './style';
import Tooltip from '@material-ui/core/Tooltip';
import FavoriteIcon from '@material-ui/icons/Favorite';

function SliceExample({ word, example }) {
  const index = example.toLowerCase().indexOf(word.toLowerCase());

  return (
    <>
      {index === -1 ? (
        example
      ) : (
        <>
          {example.slice(0, index)}
          <b>{word}</b>
          {example.slice(index + word.length)}
        </>
      )}
    </>
  );
}

function SlideItem({ mean, word, type, phonetic, example, picture, showMean }) {
  const classes = useStyle({ picture });

  useEffect(() => {
    const item = document.getElementsByClassName(classes.root)[0];
    item.classList.remove('ani-fade');
    setTimeout(() => {
      item.classList.add('ani-fade');
    }, 0);
    return () => {};
  });
  function handlefavorite() {
    const wordList = JSON.parse(localStorage.getItem('wordList'));
    var wordObject = {
      word: word,
      mean: mean,
      imgURL: picture,
    };
    if (wordList.filter((e) => e.word === word).length > 0) {
      console.log('already exst');
    } else {
      if (wordList.length === 3) {
        const last2 = wordList.slice(-2);
        console.log(last2);
        last2.push(wordObject);
        localStorage.setItem('wordList', JSON.stringify(last2));
        console.log(localStorage.getItem('wordList'));
      } else {
        wordList.push(wordObject);
        localStorage.setItem('wordList', JSON.stringify(wordList));
        console.log(localStorage.getItem('wordList'));
      }
    }

    // console.log(wordList);
    // console.log(word);
    // let list = [];
    // list.push("<h1>John<h1>");
    // list.push("<h2>David<h2>");
    // localStorage.setItem("list", JSON.stringify(list));
  }
  return (
    <div className={`${classes.root} ani-fade`}>
      {word && word !== '' && (
        <>
          <div className={classes.picture} />

          <div className={`${classes.content} flex-center-col`}>
            <Tooltip title="Thêm vào yêu thích" placement="bottom">
              <FavoriteIcon
                onClick={(e) => handlefavorite()}
                className={classes.icon}
              />
            </Tooltip>
            {showMean && <h2 className={classes.mean}>{mean}</h2>}
            <h3 className={`${classes.word} flex-center--ver`}>
              <span>{word}</span> <Speaker className="ml-4" text={word} />
            </h3>

            {Boolean(type) && <p className={classes.type}>({type})</p>}
            {Boolean(phonetic) && (
              <p className={classes.phonetic}>/{phonetic}/</p>
            )}
            {example && example !== '' && (
              <p className={classes.example}>
                <SliceExample word={word} example={example} />
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
}

SlideItem.propTypes = {
  example: PropTypes.string,
  mean: PropTypes.string,
  phonetic: PropTypes.string,
  picture: PropTypes.string,
  showMean: PropTypes.bool,
  type: PropTypes.string,
  word: PropTypes.string,
};

SliceExample.propTypes = {
  example: PropTypes.string,
  word: PropTypes.string,
};

export default SlideItem;
