import styles from './styles.module.css';
import classnames from 'classnames';

export const FilmInfo = ({ title, genre, seasonsCount }) => {
  return (
    <>
      <p className={classnames(styles.title)}>{title || "Unknown Film"}</p>
      {Boolean(genre) && <p>{genre}</p>}
      <p>{seasonsCount > 0 ? `${seasonsCount} seasons` : "No seasons"}</p>
    </>
  );
};
