const jwt = require('jsonwebtoken')

module.exports ={
    eAuth: async (req,res,next)=>{
        const tk = req.headers["authorization"];
        try {
            if(!tk){
                return res.status(401).json({
                    err:true,
                    mensage:"Authentication error"
                })
            }
            const decod = jwt.verify(tk,process.env.TOKEN)
            if (!decod) {
                return res.status(401).json({
                    err:true,
                    mensage:"Authentication error"
                })
            }
            
            req.TOKEN = decod;
            next();

            
        } catch (error) {
            return res.status(400).json({
                err:true,
                menssage:"Authentication error => "+error
            })
        }
    }
}