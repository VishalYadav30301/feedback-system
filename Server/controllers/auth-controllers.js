const User = require('../models/user-models');
const bcrypt = require('bcryptjs');



const home = async (req, res) => {
      try {
        res.status(200).send("Welcome to the server using controller module");
      } catch (error) {
        console.log(error);
      }
};


const register = async (req, res) => {
    try {
        console.log(req.body);

      const {username,email,phone,password} = req.body;

      const userExist = await User.findOne({email});

      if(userExist){
        return res.status(400).json({message: "email already exist"});
      }

      // const saltRound = 10;
      // const hash_password = await bcrypt.hash(password, saltRound);

     const userCreated = await User.create({username,email,phone,password});

     res.status(201).json({
     msg:"Registration Successfully", 
     token: await userCreated.generatetoken(), 
     userId:userCreated._id.toString(),
    });
    } catch (error) {
      console.log(req.body);
      // res.status(500).send({msg: "Error registering user", error: error.message});
      next(error);
    }
};

const login = async (req, res) =>{
  try {
    const {email, password}= req.body;
    
    const userExist = await User.findOne({email});
    console.log(userExist);

    if(!userExist){
      return res.status(400).json({msg: "Invalid Credentials"});
    }

    // const user = await bcrypt.compare(password, userExist.password);
    const user = await userExist.comparePassword(password);


   if(user){
    res.status(200).json({msg: "login successfully", token: await userExist.generatetoken(), userId: userExist._id.toString()});
   }
   else{
    res.status(400).json({msg: "Invalid credentials"})
   }


  } catch (error) {
    // res.status(500).json("login page not found");
    next(error);
  }
};

const user = async (req, res) => {
  try {

    const userData = req.user;
    console.log(userData);
    return res.status(200).json({userData});
   

  } catch (error) {
    console.log("Error from the user root", error);
  }
}

module.exports = {home, register, login, user};