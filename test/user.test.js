const mongoose = require('mongoose');
const User = mongoose.model('User');
const { hasPermission } = require('../service/permission');

let user;
describe('Organization Level Permission Test', async () => {
    beforeEach(async () => {
        user = await User.findOne({role:'manager'});
    });

    it('Manager can be able to invite user to the organization', async () => {
        expect(hasPermission(user,'inviteRemoveUserToOrg')).toEqual(true);

    });
});

describe('Project Level Permission Test', async () => {
    beforeEach(async () => {
        user = await User.findOne({role:'lead'});
    });

    it('Lead can be able to create a task', async () => {
        expect(hasPermission(user,'createDeleteTask')).toEqual(true);

    });

    it('Lead cannot be able to create a project', async () => {
        expect(hasPermission(user,'createProject')).toEqual(false);

    });
});

describe('Task Level Permission Test', async () => {
    beforeEach(async () => {
        user = await User.findOne({role:'reporter'});
    });

    it('Reporter can be able to mark a task', async () => {
        expect(hasPermission(user,'markTask')).toEqual(true);

    });

    it('Reporter cannot be able to create a task', async () => {
        expect(hasPermission(user,'createDeleteTask')).toEqual(false);
    });
});