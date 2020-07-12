const FieldFirstName = (props) => {
    let { input,
        label,
        type,
        styleTextError,
        name,
        placeholder,
        meta: { touched, error } } = props;
    return (
        <div>
            <input
                {...input}
                id="firstName"
                placeholder={label}
                type={type}
                name={name}
                className="form-control"
                required=""
                placeholder={placeholder}
            />
            <p className={`${styleTextError} text-left font-weight-bold`}>{touched && error && <span>{error}</span>}</p>
        </div>
    );
};

export default FieldFirstName;