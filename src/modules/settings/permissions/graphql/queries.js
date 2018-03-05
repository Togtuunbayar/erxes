const commonParamsDef = `
  $module: String,
  $action: String,
  $userId: String
`;

const commonParams = `
  module: $module,
  action: $action,
  userId: $userId
`;

const permissions = `
  query permissions(${commonParamsDef}, $page: Int,  $perPage: Int) {
    permissions(${commonParams}, page: $page, perPage: $perPage) {
      _id
      module
      action
      userId
      allowed

      user {
        _id
        username
        email
      }
    }
  }
`;

const modules = `
  query permissionModules {
    permissionModules {
      name
      description
    }
  }
`;

const actions = `
  query permissionActions($moduleName: String) {
    permissionActions(moduleName: $moduleName) {
      name
      description
      module
    }
  }
`;

const totalCount = `
  query permissionsTotalCount(${commonParamsDef}) {
    permissionsTotalCount(${commonParams})
  }
`;

export default {
  permissions,
  modules,
  actions,
  totalCount
};