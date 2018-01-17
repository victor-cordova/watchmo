import React from 'react';
import styles from './ContentByCategory.scss';
import MovieSlider from '../MovieSlider/MovieSlider';

class ContentByCategory extends React.Component {
  constructor(props) {
    super(props);
    props.onLoad();
  }

  render() {
    return (
      <div className={styles.ContentByCategory}>
        <div className={styles.group}>
          <div className={styles.title}>Discover</div>
          <div className={styles.sliderContainer}>
            <MovieSlider movies={this.props.discoverMovies}/>
          </div>
        </div>
        <div className={styles.group}>
          <div className={styles.title}>New Movies</div>
          <div className={styles.sliderContainer}>
            <MovieSlider movies={this.props.newMovies}/>
          </div>
        </div>
        <div className={styles.group}>
          <div className={styles.title}>Upcoming Movies</div>
          <div className={styles.sliderContainer}>
            <MovieSlider movies={this.props.upcomingMovies}/>
          </div>
        </div>
      </div>
    );
  }
}

export default ContentByCategory;