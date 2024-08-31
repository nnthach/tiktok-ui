import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import LanguageHeader from './LanguageHeader';
import { useState } from 'react';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [], onChange = defaultFn, hideOnClick = false }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1]; // level 1 of array is the last in array

    const renderItems = () => {
        return current.data.map((item, index) => {
            // level 2 of array
            const isParent = !!item.children; // if have children(level 2) => true
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]); // prev level 1 => take children from level 2
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const handleBack = () => {
        // prev level 2 => slice(cut) to level 1
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
                {history.length > 1 && <LanguageHeader title={current.title} onBack={handleBack} />}
                <div className={cx('menu-language')}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    );

    // Reset to first level (page)
    const handleResetMenu = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    return (
        <Tippy
            delay={[0, 100]}
            interactive
            placement="bottom"
            hideOnClick={hideOnClick}
            render={renderResult}
            // khi menu hide thì auto reset menu về level 1
            onHide={handleResetMenu}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node,
    items: PropTypes.array,
    onChange: PropTypes.func,
    hideOnClick: PropTypes.bool,
};

export default Menu;
