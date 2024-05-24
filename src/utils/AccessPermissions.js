export const CustomerAccessPermissions = user => {
  if (!user) return false;
  const allowedRoles = ['2_CUSTOMER', '1_ADMIN', '3_TECHNICIAN'];
  return allowedRoles.includes(user.role_id);
};

export const TechnicianAccessPermissions = user => {
  if (!user) return false;
  const allowedRoles = ['3_TECHNICIAN', '1_ADMIN'];
  return allowedRoles.includes(user.role_id);
};

export const AdminAccessPermissions = user => {
  if (!user) return false;
  return user.role_id === '1_ADMIN';
};
