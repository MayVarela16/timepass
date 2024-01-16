module.exports = (req, res, next) => {
    const hours = new Date().getHours();
    if (parseInt(hours) >= 12 && parseInt(hours) <= 14) {
        next();
    } else {
        res.status(403).send('Es hora de comer.');
    }
};