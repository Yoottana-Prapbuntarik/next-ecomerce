import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const CustomButtonGroupAsArrows = ({ next, previous }) => {
  return (
    <div className="container">
      <style js>{`
      .prev{
        position:absolute;
        bottom: 280px;
        left:0;
        cursor:pointer;
        margin-bottom:15px
      }
      .next{
        position:absolute;
        right:0;
        bottom: 280px;
        cursor:pointer;
        margin-bottom:15px
      }
      `}
      </style>
      <div className="row">
        <div className="col-6 mb-5">
          <FontAwesomeIcon className="prev" icon={faChevronLeft} size="3x" onClick={previous} />
        </div>
        <div className="col-6 mb-5">
          <FontAwesomeIcon className="next" icon={faChevronRight} size="3x" onClick={next} />
        </div>
      </div>
    </div>
  );
};

export default CustomButtonGroupAsArrows;