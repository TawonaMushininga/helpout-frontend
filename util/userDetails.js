// Get all user details from session storage and return them as an object
export const getUserDetails = () => {
  const userDetails = {
    username: sessionStorage.getItem('username') || "",
    email: sessionStorage.getItem('email') || "",
    role: sessionStorage.getItem('user_role') || "",
    id: sessionStorage.getItem('user_id') || "",
    isAuthenticated: sessionStorage.getItem('isAuthenticated') === 'true', // Convert to boolean
    firstName: sessionStorage.getItem('first_name') || "Guest User",
    lastName: sessionStorage.getItem('last_name') || "",
  };

  return userDetails;
};
