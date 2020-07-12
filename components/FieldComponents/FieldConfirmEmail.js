const FieldConfirmEmail = (props) => {
    let { input, type, styleTextError, name, placeholder, meta: { touched, error } } = props;
    return (
        <div>
            <input
                {...input}
                type={type}
                className="form-control"
                id="confirmEmail"
                name={name}
                placeholder={placeholder}
            />
            <p className={`${styleTextError} text-left font-weight-bold`}>{touched && error && <span>{error}</span>}</p>
        </div>
    );
};

export default FieldConfirmEmail;
