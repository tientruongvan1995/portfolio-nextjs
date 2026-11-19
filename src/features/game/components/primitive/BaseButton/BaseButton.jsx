import { Link } from '@/i18n/navigation';

const VARIANTS = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'ghost',
  special: 'ghost',
};

const BaseButton = ({
  buttonType = 'primary',
  role = 'button',
  className = '',
  disabled = false,
  ...rest
}) => {
  const classes = ['g-btn', `g-btn--${VARIANTS[buttonType] ?? 'primary'}`, className]
    .filter(Boolean)
    .join(' ');

  if (role === 'link') {
    const { children, href, ...linkProps } = rest;

    if (disabled) {
      return (
        <span className={classes} aria-disabled="true">
          {children}
        </span>
      );
    }

    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} disabled={disabled} {...rest}>
      {rest.children}
    </button>
  );
};

export default BaseButton;
