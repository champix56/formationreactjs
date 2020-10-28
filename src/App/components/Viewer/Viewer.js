import React from 'react';
import PropTypes from 'prop-types';
import styles from './Viewer.module.scss';

const Viewer = (props) => (
  <div className={styles.Viewer} data-testid="Viewer">
    {JSON.stringify(props.meme)}{`img/${props.meme.img.url}`}
    <svg viewBox={`0 0 ${props.meme.img.w} ${props.meme.img.h}`}>
      <image xlinkHref={`/img/${props.meme.img.url}`} x={0} y={0}/>
    </svg>
  </div>
);

Viewer.propTypes = {
  meme:PropTypes.object.isRequired
};

Viewer.defaultProps = {};

export default Viewer;
