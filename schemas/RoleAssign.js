const mongoose=require('mongoose');
const RoleAssignSchema = new mongoose.Schema({
    userid: {
        type: Number,
        ref: 'admin_user_registration',
        required: true
    },
    roleid:{
        type: Number,
        ref: 'roles_table',
        required: true
    },
    assigned_date: {
        type: Date,
        default: Date.now
    }
});
RoleAssignSchema.index({ userid: 1, roleid: 1 }, { unique: true });

const assignRole = mongoose.model('assignrole_table', RoleAssignSchema);
module.exports =assignRole;