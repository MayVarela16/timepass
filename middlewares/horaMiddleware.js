const dateMiddleware = (req, res, next) => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const formattedTime =`${hours}:${minutes}:${seconds}`;
    req.dateType = `La hora actual es: ${formattedTime}`
    next()
}

module.exports = dateMiddleware;