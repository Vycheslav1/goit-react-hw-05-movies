import { Name, Popular, Li, Img } from './CastItemStyles.js';
import PropTypes from 'prop-types';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

export const CastItem = ({
  id,
  profile_path,
  name,
  original_name,
  popularity,
}) => (
  <Li key={id}>
    <Img
      src={
        profile_path
          ? `https://image.tmdb.org/t/p/w500/${profile_path}`
          : defaultImg
      }
      alt={name}
    />
    <Name>
      <b>Original Name:&nbsp;</b>

      {original_name}
    </Name>
    <Popular>
      <b>Popularity:&nbsp; </b>

      {popularity}
    </Popular>
  </Li>
);

CastItem.propTypes = {
  id: PropTypes.string.isRequired,
  profile_path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  original_name: PropTypes.string.isRequired,
  popularity: PropTypes.number.isRequired,
};
