let task = {
  reporter: [
    'markTask', 'assignTask', 'unassignTask', 'deleteTask'
  ],
  assignee: [
    'assignTask', 'unassignTask'
  ]
};

let project = {
  lead: [
    'inviteRemoveUserToProject', 'createDeleteTask', 'assignUnassignUserToTask',
      ...task.reporter
  ],
  participant: [
    'invteToProject', 'createTask'
  ]
};

let organization = {
  manager: [
      'inviteRemoveUserToOrg', 'createProject', 'seeProject', 'inviteRemoveUserToProject', 'assign/UnassignUserToTask',
      ...project.lead
  ],
  user: [
      'inviteUserToOrg', 'createProject', 'seeAssignProject'
  ]
};

let permissions = {
  organization: organization,
  project: project,
  task: task
}

module.exports = permissions;
