import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import useStyle from './style';
import './index.scss';


function FeatureBox({ to, imgUrl, title, subTitle }) {
  // const classes = useStyle();
  return (
    <Link to={to} className="card-spec2">
      {imgUrl}
      <div className="contnent">
        <h2 className="card-spec2-title">{title}</h2>
        <p className="card-spec2-descr">{subTitle}</p>
      </div>
    </Link>
  );
}

FeatureBox.propTypes = {
  imgUrl: PropTypes.string,
  title: PropTypes.string,
  to: PropTypes.string,
  subTitle: PropTypes.string,
};

FeatureBox.defaultProps = {
  imgUrl: '',
  title: '',
  to: '',
  subTitle: '',
};

export default FeatureBox;
