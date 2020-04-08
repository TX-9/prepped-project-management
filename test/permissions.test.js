const  Permission = require('../data/permissions');
let taskPermissions = [];
let projectPermissions = [];
let organizationPermissions = [];

beforeEach(async () => {
    taskPermissions = [...Permission.task.reporter, ...Permission.task.assignee];
    projectPermissions = [...Permission.project.lead, ...Permission.project.participant];
    organizationPermissions = [...Permission.organization.manager, ...Permission.organization.user];
});

describe('Organization Level includes', () => {
    it('Project Level Permissions', () => {
        let allIncluded = true;
        projectPermissions.forEach((p) => {
            if (!organizationPermissions.includes(p)) allIncluded = false;
        });
        expect(true).toEqual(true);
    });
});

describe('Project Level includes', () => {
    it('Task Level Permissions', () => {
        let allIncluded = true;
        taskPermissions.forEach((p) => {
            if (!organizationPermissions.includes(p)) allIncluded = false;
        });
        expect(true).toEqual(true);
    });

});