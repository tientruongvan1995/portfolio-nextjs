const SearchIcon = () => (
  <svg className="g-search__icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="6.75" cy="6.75" r="4.75" stroke="currentColor" strokeWidth="1.5" />
    <path d="m10.4 10.4 3.1 3.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const BaseInput = ({
  label,
  inputType = 'text',
  inputRef = null,
  onChange = null,
  onClick = null,
  classNameLabel = '',
  classNameInput = '',
  ...rest
}) => {
  const id = rest.id || rest.name;
  const labelNode = label ? (
    <label className={`g-label ${classNameLabel}`.trim()} htmlFor={id}>
      {label}
    </label>
  ) : null;

  if (inputType === 'search') {
    const onKeyDownHandler = (event) => {
      if (event.key === 'Enter') {
        onClick?.();
      }
    };

    return (
      <div className="g-field">
        {labelNode}
        <div className="g-search">
          <div className="g-search__field">
            <SearchIcon />
            <input
              {...rest}
              id={id}
              ref={inputRef}
              className={`g-input g-input--search ${classNameInput}`.trim()}
              type="text"
              onKeyDown={onKeyDownHandler}
              onChange={onChange}
            />
          </div>
          <button type="button" className="g-btn g-btn--primary g-search__btn" onClick={onClick}>
            Search
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="g-field">
      {labelNode}
      <input
        {...rest}
        id={id}
        className={`g-input ${classNameInput}`.trim()}
        type="text"
        onChange={onChange}
      />
    </div>
  );
};

export default BaseInput;
