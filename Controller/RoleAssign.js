
const assignRole = require("../schemas/RoleAssign");
// Assuming this is the file where AdminUser schema is defined
const roles = require("../schemas/Roles"); // Assuming this is the file where Role schema is defined
const admin_user = require("../schemas/User_registration");

const RoleAssignPost = async (req, res) => {
    try {
        const { userid, roleid } = req.body;

        // Fetch the admin user by `userid`
        const adminUser = await admin_user.findOne({ userid });
        if (!adminUser) {
            return res.status(404).json({ message: 'Admin user not found' });
        }

        // Fetch the role by `roleid`
        const role = await roles.findOne({ roleid });
        if (!role) {
            return res.status(404).json({ message: 'Role not found' });
        }

        // Create a new AssignRole document with the ObjectIds
        const assignments ={
          userid: adminUser.userid,
          roleid: role.roleid,
          assigned_date: new Date()
      }
      const newdata= new assignRole(assignments)

        const response = await newdata.save();
        console.log('Role assigned successfully');
        res.status(200).json(response);
    } catch (err) {
        console.error('Error assigning role:', err);
        res.status(500).json({ message: 'Failed to assign role', error: err.message });
    }
};

const getAllUserDetailsWithRoles = async (req, res) => {
    try {
    const allUsersWithRoles = await admin_user.aggregate([
      // First $lookup: Join assignRole_tables with admin_user based on userid
      {
        $lookup: {
          from: "assignrole_tables", 
          localField: "userid",
          foreignField: "userid",
          as: "assignroles"
        }
      },
      // Unwind assignroles to access each roleid individually
      {
        $unwind: {
          path: "$assignroles",
          preserveNullAndEmptyArrays: true // Keep users even if they have no roles
        }
      },
      // Second $lookup: Join roles_tables based on roleid in assignroles
      {
        $lookup: {
          from: "roles_tables", 
          localField: "assignroles.roleid",
          foreignField: "roleid",
          as: "roles"
        }
      },
      // Unwind roles to access each rolename individually
      {
        $unwind: {
          path: "$roles",
          preserveNullAndEmptyArrays: true // Keep users even if they have no specific role in roles_tables
        }
      },
      // Group by user to collect roles in an array
      {
        $group: {
          _id: {
            userid: "$userid",
            user_name: "$user_name",
            password: "$password",
            status: "$status",
            registration_date: "$registration_date"
          },
          role_name: {
            $push: {
              $ifNull: ["$roles.role_name", "No Role Assigned"]
            }
          }
        }
      },
      // Format the final output
      {
        $project: {
          _id: 0,
          userid: "$_id.userid",
          user_name: "$_id.user_name",
          password: "$_id.password",
          status: "$_id.status",
          registration_date: "$_id.registration_date",
          role_name: {
            $cond: {
              if: { $eq: ["$role_name", ["No Role Assigned"]] },
              then: "No Role Assigned",
              else: {
                $reduce: {
                  input: "$role_name",
                  initialValue: "",
                  in: {
                    $concat: [
                      "$$value",
                      { $cond: { if: { $eq: ["$$value", ""] }, then: "", else: ", " } },
                      "$$this"
                    ]
                  }
                }
              }
            }
            
            }
          }
        
      }
    ]);
    
    res.status(200).json(allUsersWithRoles);
    
    } catch (err) {
      console.error('Error fetching all user details with roles:', err);
      res.status(500).json({ message: 'Failed to fetch all user details with roles', error: err.message });
    }
    
    
};


module.exports = { RoleAssignPost,getAllUserDetailsWithRoles };
