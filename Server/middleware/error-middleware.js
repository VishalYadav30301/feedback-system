const errorMiddleware = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "backend error";
    const extraDetails = err. extraDetails ||"Error from backend";

    return res.status(status).json({message, extraDetails});
}

module.exports = errorMiddleware;