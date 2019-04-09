var keystone = require('keystone');
var User = new keystone.List('User');

User.add({
  displayName: {type: String},
  password: {type: keystone.Field.Types.Password},
  email: {type: keystone.Field.Types.Email, unique: true},
  isAdmin: {type: Boolean, label: 'Can access Keystone'},
});

User.schema.virtual('canAccessKeystone').get(function(){
  return this.isAdmin;
});

User.defaultColumns = 'displayName, email, isAdmin';
User.register();
