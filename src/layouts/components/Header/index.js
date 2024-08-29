import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import image from '~/assets/images';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightFromBracket,
    faCircleQuestion,
    //faCloudArrowUp,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    // faEnvelope,
    faGear,
    //faMessage,
    faMoon,
    //faSignIn,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { MailboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import { Link } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English', // Trong menu english có children show language
        children: {
            title: 'Language', // header
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Dark theme',
    },
];

function Header() {
    const currentUser = true;

    const handleMenuItem = (menuItem) => {
        console.log(menuItem);
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/profile',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/*Logo */}
                <Link to={config.routes.home}>
                    <div className={cx('logo')}>
                        <img src={image.logo} alt="logo" />
                    </div>
                </Link>
                {/*End Logo */}

                {/*Search box */}
                <Search />
                {/*End search */}

                {/*Actions */}
                <div className={cx('actions')}>
                    {/*Nếu login => currentUser = true */}
                    {currentUser ? (
                        // Giao diện khi đã login
                        <>
                            <Tippy content="Upload video" placement="bottom">
                                <button className={cx('action-icon-u')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>

                            <Tippy content="Message" placement="bottom">
                                <button className={cx('action-icon-m')}>
                                    <MessageIcon />
                                    <span className={cx('icon-m-num')}>3</span>
                                </button>
                            </Tippy>

                            <Tippy content="Mailbox" placement="bottom">
                                <button className={cx('action-icon')}>
                                    <span className={cx('icon-mb-num')}>1</span>
                                    <MailboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        // Chưa login
                        <>
                            <Button primary medium>
                                Log in
                            </Button>
                            <Button outline medium>
                                Register
                            </Button>
                        </>
                    )}

                    {/*Avatar*/}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuItem}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                // src=""
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/7321711475926663169.jpeg?lk3s=a5d48078&nonce=47484&refresh_token=b1a26ff8a1edaade27c45fb65c243025&x-expires=1724821200&x-signature=%2BlNS0Ry%2FL%2BhGB3XHJyOLkecu0N8%3D&shp=a5d48078&shcp=81f88b70&quot"
                                alt="Nguyen Thach"
                            />
                        ) : (
                            <button className={cx('more-opt')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
