import PropTypes from "prop-types";
import style from "./Button.module.css";



/* title이라는 같은 클래스명을 사용해도 스타일은 각자 다르게 들어간다 */

function Button({text}) {
  return (
  <button className={style.title}>{text}</button>

  );
}

Button.propTypes = {
  text:PropTypes.string.isRequired,
}
export default Button;