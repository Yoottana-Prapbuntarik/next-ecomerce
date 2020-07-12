const FieldSlip = (props) => {
    let { input,
        styles,
        type,
        value,
        name,
        meta: { touched, error } } = props;
    return (
        <div>
            <input
                {...input}
                name={name}
                type={type}
                id="slip"
                value={value}
                className={styles} />
            <p className={` text-danger text-left font-weight-bold`}>{touched && error && <span>{error}</span>}</p>
        </div>
    );
};

export default FieldSlip;