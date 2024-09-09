import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/TikTok_logo.svg/640px-TikTok_logo.svg.png"
                        height="36"
                        width="118"
                        alt="TikTok"
                    ></img>
                </div>
                <div className={cx('search')}>
                    <input placeholder="Search accounts and video" spellCheck={false} />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('actions')}></div>
            </div>
        </header>
    );
}

export default Header;
