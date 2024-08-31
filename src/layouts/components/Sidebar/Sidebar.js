import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import FollowingAccount from '~/components/FollowingAccount';
import Image from '~/components/Image';
import {
    LiveIcon,
    LiveActiveIcon,
    FriendIcon,
    FriendActiveIcon,
    FollowingIcon,
    FollowingActiveIcon,
    ExploreIcon,
    ExploreActiveIcon,
    HomeIcon,
    HomeActiveIcon,
} from '~/components/Icons/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<FollowingIcon />}
                    activeIcon={<FollowingActiveIcon />}
                />
                <MenuItem
                    title="Friends"
                    to={config.routes.friend}
                    icon={<FriendIcon />}
                    activeIcon={<FriendActiveIcon />}
                />
                <MenuItem
                    title="Explore"
                    to={config.routes.explore}
                    icon={<ExploreIcon />}
                    activeIcon={<ExploreActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />

                <MenuItem title="Profile" to={config.routes.profile} icon={null}>
                    <Image
                        className={cx('user-avatar')}
                        src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/7321711475926663169.jpeg?lk3s=a5d48078&nonce=47484&refresh_token=b1a26ff8a1edaade27c45fb65c243025&x-expires=1724821200&x-signature=%2BlNS0Ry%2FL%2BhGB3XHJyOLkecu0N8%3D&shp=a5d48078&shcp=81f88b70&quot"
                        alt="Ngoc Thach"
                    />
                </MenuItem>
            </Menu>

            <FollowingAccount heading="Following accounts" />
            <FollowingAccount heading="Suggested accounts" />

            <div className={cx('footer')}>
                <h4>Company</h4>
                <h4>Program</h4>
                <h4>Terms & Policies</h4>
                <span>
                    <FontAwesomeIcon icon={faCopyright} className={cx('copyright')}/>
                    2024 TikTok
                </span>
            </div>
        </aside>
    );
}

export default Sidebar;
