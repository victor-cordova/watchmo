import { connect } from "react-redux";
import ContentByCategory from "../../components/ContentByCategory";
import {
  fetchDiscoverMovies,
  fetchNewMovies,
  fetchUpcomingMovies
} from "../../actions";
import { MOVIES_PER_ROW } from "../../constants";

function sliceMaxElements(movies) {
  return movies.slice(0, MOVIES_PER_ROW);
}

const mapStateToProps = state => {
  return {
    discoverMovies: sliceMaxElements(state.discoverMovies),
    newMovies: sliceMaxElements(state.newMovies),
    upcomingMovies: sliceMaxElements(state.upcomingMovies)
  };
};

const mapDispatchToLinkProps = dispatch => {
  return {
    onLoad: () => {
      dispatch(fetchDiscoverMovies());
      dispatch(fetchNewMovies());
      dispatch(fetchUpcomingMovies());
    }
  };
};

const ContentByCategoryContainer = connect(
  mapStateToProps,
  mapDispatchToLinkProps
)(ContentByCategory);

export default ContentByCategoryContainer;
