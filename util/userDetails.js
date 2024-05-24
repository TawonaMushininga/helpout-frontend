// Get all user details from session storage and return them as an object
export const getUserDetails = () => {
  const userDetails = {
    username: sessionStorage.getItem('username') || "User",
    email: sessionStorage.getItem('email') || "",
    role: sessionStorage.getItem('user_role') || "guest",
    id: sessionStorage.getItem('user_id') || "",
    isAuthenticated: sessionStorage.getItem('isAuthenticated') === 'true', // Convert to boolean
  };

  return userDetails;
};
