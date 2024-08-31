import people from "../../assets/img/people.png";
import vector from "../../assets/img/Vector.svg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import './Person.scss'

const Person = () => {
  return (
    <div className="All">
      <div className="People">
        <div className="container">
          <div className="person-start">
            <div className="people-one">
              <img src={people} alt="" />
            </div>
            <div className="people-two">
              <div className="two-one">
                <img src={vector} alt="" />
                <img src={vector} alt="" />
              </div>
              <div className="two-two">
                <p>
                  Managed Services team acts like an extension of yours to
                  expertly respond to any and all feedback, and scan and
                  evaluate reviews for any legal concerns, profanity or slander,
                  or any policy violations of
                </p>
                <p>
                  community and content. Services, analytics and reports can be
                  customized by location, project or initiative.
                </p>
              </div>
              <div className="two-three">
                <p>Mohammad Musa - CEO at Company</p>
              </div>
              <div className="two-four">
                <FaArrowLeft className="left" />
                <FaArrowRight className="right" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Person;
