import React from 'react';
import PropTypes from 'prop-types';
import styles from './Viewer.module.scss';

const Viewer = () => (
  <div className={styles.Viewer} data-testid="Viewer">
    Viewer Component
  </div>
);

Viewer.propTypes = {};

Viewer.defaultProps = {};

export default Viewer;
