const FieldTotalPrice = (props) => {
    let { input,
        style,
        type,
        value,
        meta: { touched, error } } = props;
    return (
        <div>
            <input
                {...input}
                type={type}
                id="price"
                value={value}
                className={style} 
                placeholder="จำนวนเงิน"/>
            <p className={` text-danger text-left font-weight-bold`}>{touched && error && <span>{error}</span>}</p>
        </div>
    );
};

export default FieldTotalPrice;