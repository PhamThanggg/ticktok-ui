import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/10c960446663589dc1d7dcf3d125f5c0.jpeg?lk3s=a5d48078&nonce=80435&refresh_token=c5998feb8ea4472e4f14bfa66edd6a22&x-expires=1726048800&x-signature=WFu2l6wTAmuJWCvNUVkvAQ4m3KA%3D&shp=a5d48078&shcp=81f88b70"
                alt="Thang"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Pham Huy Thang</span>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                </p>
                <span className={cx('username')}>PhamHuyThang</span>
            </div>
        </div>
    );
}

export default AccountItem;
