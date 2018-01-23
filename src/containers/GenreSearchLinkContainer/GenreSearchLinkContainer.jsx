import { connect } from 'react-redux';
import SearchLink from '../../components/SearchLink/SearchLink';
import { triggerGenreSearch } from '../../actions';


const mapStateToProps = (state, ownProps) => {
  return {
    title: ownProps.genre.name
  }
}

const mapDispatchToLinkProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      ownProps.clickCallback();
      triggerGenreSearch(dispatch, ownProps.genre.name, ownProps.genre.id);
    }
  }
};

const GenreSearchLinkContainer = connect(
  mapStateToProps,
  mapDispatchToLinkProps
)(SearchLink);

export default GenreSearchLinkContainer;