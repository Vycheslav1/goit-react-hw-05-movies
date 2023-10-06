import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Form, Input, Button } from './SearchFormStyles.js';
const inputText = nanoid();
export const SearchForm = ({ submitForm, setParam }) => (
  <Form onSubmit={e => submitForm(e, document.getElementById(inputText).value)}>
    <Input
      type="text"
      id={inputText}
      name="search"
      placeholder="Search"
      onChange={e => setParam({ query: e.target.value })}
    />
    <Button type="submit">Search</Button>
  </Form>
);

SearchForm.propTypes = {
  submitForm: PropTypes.func.isRequired,
  setParam: PropTypes.func.isRequired,
};
