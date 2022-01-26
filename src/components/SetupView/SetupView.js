import { ReactComponent as Logo } from 'assets/logo.svg';
import { ReactComponent as IconX } from 'assets/icon-x.svg';
import { ReactComponent as IconO } from 'assets/icon-o.svg';
import Button from 'components/Button/Button';
import { useState } from 'react';
import styles from './SetupView.module.scss';

const SetupView = () => {
  const [selectedMark, setSelectedMark] = useState('X');

  const {
    wrapper,
    markPanel,
    header,
    markWrapper,
    markIcon,
    markButton,
    markButtonSelected,
    info,
  } = styles;

  return (
    <div className={wrapper}>
      <Logo />
      <div className={markPanel}>
        <h1 className={header}>pick player 1's mark</h1>
        <div className={markWrapper}>
          <button
            className={`${markButton} ${
              selectedMark === 'X' && markButtonSelected
            }`}
            onClick={() => setSelectedMark('X')}
          >
            <IconX className={markIcon} />
          </button>
          <button
            className={`${markButton} ${
              selectedMark === 'O' && markButtonSelected
            }`}
            onClick={() => setSelectedMark('O')}
          >
            <IconO className={markIcon} />
          </button>
        </div>
        <p className={info}>remember: x goes first</p>
      </div>

      <Button>new game (vs cpu)</Button>
      <Button isSecondary>new game (vs player)</Button>
    </div>
  );
};

export default SetupView;
