import classNames from 'classnames/bind';
import styles from './FollowingAccount.module.scss';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function FollowingAccount({ heading }) {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('heading')}>{heading}</h2>

            <AccountItem />
            <AccountItem />
            <AccountItem />

            <button className={cx('see-more-btn')}>See more</button>
        </div>
    );
}

FollowingAccount.propTypes = {
    heading: PropTypes.string.isRequired,
};

export default FollowingAccount;
