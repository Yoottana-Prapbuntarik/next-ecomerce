const FieldTime = (props) => {
    let { input,
        styles,
        type,
        value } = props;
    return (
        <div>
            <input
                {...input}
                type={type}
                id="time"
                value={value}
                className={styles} />
        </div>
    );
};

export default FieldTime;