const jwt = require('jsonwebtoken');
const User = require('../models/user-models');
const authMiddleware = async (req, res, next) => {
      const token = req.header('Authorization');

      if(!token){
        return res.status(401).json({msg:"Unauthorized HTTP, Token not provided "});
      }

// Assuming token is in the format "Bearer token",<jwtToken>, removing the "Bearer prefix"
  const jwtToken = token.replace("Bearer", "").trim();
  console.log("Token from auth middleware", jwtToken);


  try {

    const isverified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
    console.log(isverified);
    const userData = await User.findOne({email:isverified.email}).select({
      password: 0,
    });
    
    console.log(userData);

    
    req.user = userData;
    req.token = token;
    req.userID = User._id;

    next();
  } catch (error) {
     return res.status(401).json({msg:"Unauthorized HTTP, Token not provided "});
      
  }
};

module.exports = authMiddleware;