const mongoose = require('mongoose');
const User = mongoose.model('User');

export default class UserController {
  static async login(req, res, next) {
    try {
      // fetch user
      const user = await User.findOne({user_id:'jacobleeca'});
      // find allowed permissions by role
      const permissions = [];

      res.json({ permissions: permissions, info: user.toJson() });

    } catch (e) {
      res.status(400).json({ error: e });
      return
    }
  }
}
