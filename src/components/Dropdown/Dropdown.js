import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import styles from './dropdown.module.css';
import cn from 'classnames';
import Icon from '../Icon';

const Dropdown = ({ className, value }) => {
  const [visible, setVisible] = useState(false);

  return (
    <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
      <div
        className={cn(styles.dropdown, className, { [styles.active]: visible })}
      >
        <div className={styles.head} onClick={() => setVisible(!visible)}>
          <div className={styles.selection}>Spagetti</div>
          <div className={styles.arrow}>
            <Icon name='arrow-bottom' size={10} />
          </div>
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default Dropdown;
