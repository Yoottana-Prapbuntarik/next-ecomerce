const FieldPassword = (props) => {
    let { input,
        type,
        placeholder,
        styleTextError,
        name,
        meta:{touched,error}
    } = props;
    return (
        <div>
            <input
                {...input}
                id="password"
                name={name}
                placeholder={placeholder}
                type={type}
                className="form-control"
                required="" />
            <p className={`${styleTextError} text-left font-weight-bold`}>{touched && error && <span>{error}</span>}</p>
        </div>
    );
};

export default FieldPassword;

