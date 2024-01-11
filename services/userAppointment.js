import User from '../models/Signup.js';



const getUserByUid = async (uid) => {
    try {
      const user = await User.findOne({ uid });
      return user;
    } catch (err) {
      // Handle errors here
      console.error(err);
      throw new Error('Error fetching user by UID');
    }
  };

export {getUserByUid}