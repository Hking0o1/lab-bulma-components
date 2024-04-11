const CoolButton = ({ 
  isCentered, 
  isActive, 
  isBlack, 
  isDanger, 
  isDark, 
  isFocused, 
  isGrouped, 
  isHovered, 
  isInfo, 
  isInverted, 
  isLarge, 
  isLight, 
  isLink, 
  isLoading, 
  isMedium, 
  isOutlined, 
  isPrimary, 
  isRight, 
  isRounded, 
  isSelected, 
  isSmall, 
  isStatic, 
  isSuccess, 
  isText, 
  isWarning, 
  isWhite, 
  children 
}) => {
  const classNames = [
    'button',
    isCentered && 'is-centered',
    isActive && 'is-active',
    isBlack && 'is-black',
    isDanger && 'is-danger',
    isDark && 'is-dark',
    isFocused && 'is-focused',
    isGrouped && 'is-grouped',
    isHovered && 'is-hovered',
    isInfo && 'is-info',
    isInverted && 'is-inverted',
    isLarge && 'is-large',
    isLight && 'is-light',
    isLink && 'is-link',
    isLoading && 'is-loading',
    isMedium && 'is-medium',
    isOutlined && 'is-outlined',
    isPrimary && 'is-primary',
    isRight && 'is-right',
    isRounded && 'is-rounded',
    isSelected && 'is-selected',
    isSmall && 'is-small',
    isStatic && 'is-static',
    isSuccess && 'is-success',
    isText && 'is-text',
    isWarning && 'is-warning',
    isWhite && 'is-white'
  ].filter(Boolean).join(' ');

  return (
    <button className={classNames}>
      {children}
    </button>
  );
};

export default CoolButton;