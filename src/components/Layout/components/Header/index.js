import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';

import styles from './Header.module.scss';
import { useEffect, useState } from 'react';
import { Warpper as PopperWrapper } from '~/components/Popper';
import AccountItem from '../../AccountItem';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setsearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setsearchResult([1, 2, 3]);
        }, 0);
    });

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
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
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
                </Tippy>
                <div className={cx('actions')}></div>
            </div>
        </header>
    );
}

export default Header;
