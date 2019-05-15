export default ({ property = 'all', length = '0.3s', ease = 'ease-in' }) => `
  transition: ${property} ${length} ${ease}
`;
