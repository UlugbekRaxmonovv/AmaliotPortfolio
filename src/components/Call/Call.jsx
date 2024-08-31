import call from "../../assets/img/call.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import './Call.scss'
const Call = () => {
  return (
    <div className="Call">
      <div className="container">
        <div className="call">
          <div className="call-one">
            <div className="call-img">
              <img src={call} alt="" />
            </div>
            <div className="call-h1">
              <p>How This Agency Helped My Business And Career Journey?</p>
            </div>
            <div className="call-p">
              <p>
                A successful marketing plan relies heavily on the pulling-power
                of advertising copy. writing result-oriented ad copy is
                dificult, as it must appeal to, entice, and onviced consumers tp
                action.
              </p>
            </div>
            <div className="call-btn">
              <div className="btn-one">
                <button>PUBLISHED IN</button>
                <button>Marketing</button>
                <button>Category</button>
              </div>
              <div className="btn-two">
                <p>05 jun, 2021</p>
              </div>
            </div>
          </div>
          <div className="call-two">
            <div className="two-h1">
              <p>My Blog And News</p>
            </div>
            <div className="two-p">
              <p>
                If It’s abillboard ad, you’ll need a super catchy headline due
                to the speed at which people will pass.
              </p>
            </div>
            <div className="two-btn">
              <button>Go To The Blog</button>
            </div>
            <div className="two-img">
              <button>
                <FaArrowLeft />
              </button>
              <button>
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Call;

