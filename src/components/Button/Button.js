import styles from './Button.module.scss';

const Button = ({ children, isSmall, isSecondary, isTertiary, ...props }) => {
  const className = `
  ${styles.button}
  ${isSmall && styles.buttonSmall}
  ${isSecondary && styles.buttonSecondary}
  ${isTertiary && styles.buttonTertiary}
  }`;

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
