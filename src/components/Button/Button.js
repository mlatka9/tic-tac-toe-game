import styles from './Button.module.scss';

const Button = ({ children, isSmall, isSecondary, isTertiary }) => {
  const className = `
  ${styles.button}
  ${isSmall && styles.buttonSmall}
  ${isSecondary && styles.buttonSecondary}
  ${isTertiary && styles.buttonTertiary}
  }`;

  return <button className={className}>{children}</button>;
};

export default Button;
