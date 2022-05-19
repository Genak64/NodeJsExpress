var requestTime=function (req,res,next) {
    req.requestTime=Date.now()
    next()
}

var logger=function (req,res,next) {

}