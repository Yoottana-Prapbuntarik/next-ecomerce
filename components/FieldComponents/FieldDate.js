import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const FieldDate = (props) => {
    let { input,
        style,
        type,
        value } = props;
    return (
        <div>
            <input
                {...input}
                type={type}
                id="date"
                value={value}
                className={style} /> <FontAwesomeIcon className="text-secondary" icon={faCalendarAlt} />
        </div>
    );
};

export default FieldDate;