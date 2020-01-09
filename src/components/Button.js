import styled from 'styled-components';

export default styled.button`
  text-decoration: none;
  cursor: pointer;
  margin-right: 8px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  background-color: #e49100;
  color: #fff;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  transition: color .15s ease-in-out, background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  &:hover {
    background-color: #c57e00
  }
`;