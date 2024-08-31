import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/d9059f1ea59116dfb9f791411426ea29.jpeg?lk3s=a5d48078&nonce=57928&refresh_token=2510c6451fa6e654e0e03081270df567&x-expires=1725199200&x-signature=wA98e1hLDPUHFQ7o6cngl4i3YTg%3D&shp=a5d48078&shcp=81f88b70"
                    alt=""
                />
                <Button primary small>
                    Follow
                </Button>
            </header>

            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>nnthach</strong>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('icon')} />
                </p>
                <p className={cx('name')}>Nguyễn Ngọc Thạch</p>
            </div>

            <div className={cx('footer')}>
                <p className={cx('quantity')}>
                    <strong className={cx('number')}>8.2M</strong>
                    <span className={cx('label')}>Followers</span>
                </p>
                <p className={cx('quantity')}>
                    <strong className={cx('number')}>456.2K</strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
