const User = require("../model/user");
const bcrypt = require("bcrypt");

// ✅ Signup Function
exports.signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    // Hash password
    const hashPass = await bcrypt.hash(password, 10);

    // Create new user
    await User.create({ name, email, password: hashPass, role });

    return res.status(201).json({ success: true, message: "User created successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: "Error in user creation" });
  }
};

// ✅ Login Function
exports.login = async (req, res) => {
  try {
    const { email,password } = req.body;
    const user = await User.findOne({email});
    if(!user){
        return res.status(400).json({
            success:false,
            message:"User not found"
        })
    }
    const ismatch = await bcrypt.compare(password,user.password)
    if(!ismatch){
        return res.status(400).json({
            success:false,
            message:"Incorrect Password"
        })
    }
    return  res.status(200).json({
        success:true,
        message:"User Login Successfully"
    })
  }catch(err){  
    console.log(err);
    return res.status(500).json({
        success:false,
        message:"Login error"
    })
  }
};
