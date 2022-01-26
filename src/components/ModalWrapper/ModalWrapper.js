import styles from './ModalWrapper.module.scss';

const ModalWrapper = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default ModalWrapper;
