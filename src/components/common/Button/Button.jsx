import React from 'react';

import styles from './Button.module.scss';

export const Button = ({ label }) => {
  return <button className={styles.button}>{label}</button>;
};

export default Button;
