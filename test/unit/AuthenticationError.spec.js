const AuthenticationError = require('../../models/errors/AuthenticationError');

describe('Salati - models - errors - AuthenticationError', () => {
  it('should create a valid instance', () => {
    const error = new AuthenticationError();
    expect(error).toBeDefined();
    expect(error.message).toBe('Authentication Error');
    expect(error.statusCode).toBe(401);
    expect(error.name).toBe('AuthenticationError');
  });
  it('should create a valid instance with specific message', () => {
    const error = new AuthenticationError('Specific message');
    expect(error).toBeDefined();
    expect(error.message).toBe('Specific message');
    expect(error.statusCode).toBe(401);
    expect(error.name).toBe('AuthenticationError');
  });
});
