const ButtonSubmit = (props) => {
  let { input, label, type, style} = props;
  return (
    <div>
      <input
        {...input}
        className={style}
        type={type}
        value={label}
        className={style}
      />
      
    </div>
  );
};

export default ButtonSubmit;