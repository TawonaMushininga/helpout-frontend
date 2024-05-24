// Get all user details from session storage and return them as an object
export const getUserDetails = () => {
  const userDetails = {
    username: localStorage.getItem('username') || "User",
    email: localStorage.getItem('email') || "",
    role: localStorage.getItem('user_role') || "guest",
    id: localStorage.getItem('user_id') || "",
    isAuthenticated: localStorage.getItem('isAuthenticated') === 'true', // Convert to boolean
  };

  return userDetails;
};
