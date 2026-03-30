// console.log("salam")
const errorMiddleware = (err, req, res, next) => {
    console.log("ERROR:", err.message);

    res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || "Server Error"
    });
};

module.exports = errorMiddleware;