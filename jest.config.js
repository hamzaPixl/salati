module.exports = {
  restoreMocks: true,
  clearMocks: true,
  testMatch: ['**/unit/*.spec.js'],
  verbose: true,
  testPathIgnorePatterns: ['/node_modules/', '/config/', '/logs/', '/coverage/'],
  testURL: 'http://localhost:3000',
};
