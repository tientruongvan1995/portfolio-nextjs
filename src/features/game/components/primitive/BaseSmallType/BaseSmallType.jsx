import styles from './BaseSmallType.module.css';

const BaseSmallType = ({ type = 'normal', text = '', className = '', ...rest }) => {
  return (
    <span {...rest} data-type={type} className={`${styles.type} ${className}`.trim()}>
      <small>{text}</small>
    </span>
  );
};

export default BaseSmallType;
