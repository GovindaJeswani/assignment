const express =require('express')
const morgan = require('morgan')

const eventRoutes = require('./routes/eventRoutes')
const trackRoutes = require('./routes/trackRoutes')

const app = express()

console.log(process.env.NODE_ENV);

if(process.env.NODE_ENV === "development"){
    app.use(morgan('dev'))
}

app.use((req,res,next)=>{
    req.requestTime = new Date().toISOString()
    next()
})



app.get('/',(req,res)=>{
    console.log('starting hello');
    res.status(200).json({
        status:'pass_ed',
        message: 'hello i am starting'
    })
})

app.use('/track',trackRoutes)
app.use('/api/v3/app/event', eventRoutes)


app.all('*',(req,res,next)=>{
    res.status(400).json({
        status:'fail',
        message:'not found this api'
    })
})

module.exports = app