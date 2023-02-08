const { connect } = require("http2")

exports.getview = ((req,res) =>{
    res.status(200).json({
        status:'sucess',
        message:'connected'
    })
})  