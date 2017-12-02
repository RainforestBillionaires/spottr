module.exports = function (mongoose) {
    var userSchema = new mongoose.Schema({
        _id: Schema.Types.ObjectId,
    });

    return {
        User: mongoose.model('User', userSchema)
    }
}
