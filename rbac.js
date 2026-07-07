// RBAC Implementation

const roles = {
    admin: 'admin',
    user: 'user',
};

const permissions = {
    [roles.admin]: ['create', 'read', 'update', 'delete'],
    [roles.user]: ['read'],
};

function authorize(role, action) {
    return permissions[role] && permissions[role].includes(action);
}

module.exports = { roles, authorize };