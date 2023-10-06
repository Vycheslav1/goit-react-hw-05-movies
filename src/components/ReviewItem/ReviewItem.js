import PropTypes from 'prop-types';

import {
  Li,
  Author,
  Rating,
  Content,
  Created,
  Updated,
  Url,
} from './ReviewItemStyles.js';

export const ReviewItem = ({
  id,
  author_details,
  content,
  created_at,
  updated_at,
  url,
}) => (
  <Li key={id}>
    <Author>
      <b>Author: &nbsp;</b>
      {author_details.name}
    </Author>
    <Rating>
      <b>Rating: &nbsp;</b>
      {author_details.rating}
    </Rating>
    <Content>
      <b>Content:&nbsp; </b>
      {content}
    </Content>
    <Created>
      <b>created at:&nbsp; </b>
      {created_at}
    </Created>
    <Updated>
      <b>updated at: &nbsp;</b>
      {updated_at}
    </Updated>
    <Url>
      <b>url: &nbsp;</b>
      {url}
    </Url>
  </Li>
);

ReviewItem.propTypes = {
  id: PropTypes.string.isRequired,
  author_details: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
  updated_at: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
