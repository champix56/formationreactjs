import React from 'react';
import PropTypes from 'prop-types';
import styles from './Edition.module.scss';

const Edition = () => (
  <div className={styles.Edition} data-testid="Edition">
    Edition Component
  </div>
);

Edition.propTypes = {};

Edition.defaultProps = {};

export default Edition;
