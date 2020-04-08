const  Permission = require('../data/permissions');

/**
 * Check if user has the permission
 * @param {string} permission - the requested permission
 * @returns {boolean} Returns true or false
 */
exports.hasPermission = function (user,permission) {
    for (let level in Permission) {
      if (level === user.level) {
          if(Permission[level][user.role].includes(permission)) return true;
      }
    }

    return false;
};