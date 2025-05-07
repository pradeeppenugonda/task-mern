const errorHandler = (err, req, res, next) => {
    console.log(`
        Came to Error Handler >>> ${err.message}`)
    const statusCode = res.statusCode || 500;
    res.status(statusCode);
    res.json({message : err.message})
}

module.exports = {
    errorHandler
}