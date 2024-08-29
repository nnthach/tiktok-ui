import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary,
    outline,
    small,
    medium,
    large,
    round,
    disable,
    leftIcon,
    rightIcon,
    children,
    onClick,
    className,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        // props của các nút như a, link, button khác nhau
        onClick,
        ...passProps,
    };

    // Remove event listeners
    if (disable) {
        Object.keys(props).forEach((prop) => {
            if (prop.startsWith('on') && typeof props[prop] === 'function') {
                delete props[prop];
            }
        });
    }

    if (to) {
        // nếu có prop = to thì nó sẽ chuyển tag thành <link>
        props.to = to;
        Comp = Link;
    } else if (href) {
        // nếu có prop = href thì nó sẽ chuyển tag thành <a>
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        medium,
        large,
        disable,
        round,
        leftIcon,
        rightIcon,
        [className]: className, // Special prop setting for each different button
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    medium: PropTypes.bool,
    large: PropTypes.bool,
    round: PropTypes.bool,
    disable: PropTypes.bool,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
};

export default Button;
