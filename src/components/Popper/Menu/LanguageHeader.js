import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function LanguageHeader({ title, onBack}) {
    return (
        <header className={cx('header')}>
            <button className={cx('back-btn')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft}/>
            </button>
            <h4 className={cx('header-title')}>{title}</h4>
        </header>
    );
}

LanguageHeader.propTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,
}

export default LanguageHeader;