
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie ({id,coverImg,title,summary,genres}) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
      <p>{summary}</p>
      <ul>
        {Movie.genres !== undefined ? genres.map((g) => (<li key={g}>{g}</li>)) : null}
      </ul>
    </div>
  );
}


Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg : PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  summary:PropTypes.string.isRequired,
  genres:Movie.genres !== undefined ? PropTypes.arrayOf(PropTypes.string).isRequired : null,

}

export default Movie;