export function validateEmailAndPassword(email, password) {
  // Regular expression for validating email
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Regular expression for validating password (Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number, and one special character)
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  if (!isEmailValid) return 'Email is not valid !';
  if (!isPasswordValid) return 'Password is not valid !';

  return null;
}
