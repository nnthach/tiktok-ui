import classNames from 'classnames/bind';
import styles from './FollowingAccount.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem({ heading }) {

    const renderPreview = (props) => {
        return(
            <div tabIndex='-1' {...props}>
                <PopperWrapper>
                    <AccountPreview/>
                </PopperWrapper>
            </div>
        )
    }

    return (
        <Tippy
            interactive
            delay={[800, 0]}
            offset={[-5, 0]}
            //visible
            placement="bottom"
            render={renderPreview}
            appendTo={'parent'}
        >
            <div className={cx('account-item')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/d9059f1ea59116dfb9f791411426ea29.jpeg?lk3s=a5d48078&nonce=57928&refresh_token=2510c6451fa6e654e0e03081270df567&x-expires=1725199200&x-signature=wA98e1hLDPUHFQ7o6cngl4i3YTg%3D&shp=a5d48078&shcp=81f88b70"
                    alt=""
                />
                <div className={cx('item-info')}>
                    <p className={cx('nickname')}>
                        <strong>nnthach</strong>
                        <FontAwesomeIcon icon={faCheckCircle} className={cx('icon')} />
                    </p>
                    <p className={cx('name')}>Nguyễn Ngọc Thạch</p>
                </div>
            </div>
        </Tippy>
    );
}

export default AccountItem;
