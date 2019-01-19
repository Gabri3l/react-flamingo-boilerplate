import styled from '@emotion/styled';

export default styled.button({
  width: 100,
  height: 25,
  border: 'solid 1px black',
  background: 'white',
  fontFamily: 'monospace',
  fontSize: 12,
  cursor: 'pointer',
  margin: '5px 0',
  ':focus': {
    outline: 'none',
  },
  ':hover': {
    background: 'black',
    color: 'white',
  },
});
