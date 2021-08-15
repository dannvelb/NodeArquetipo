'use strict'

const mongoose = require('mongoose');

const { Schema } = mongoose;
const UserSchema = Schema({
    username: {
        type: String,
        lowecase: true,
        unique: true,
        required: [true, 'username is required']
    },
    password: {
        type: String,
        required: [true, 'password is required'],
    },
    fullName: {
        type: String,
        required: [true, 'fullName is required']
    }
});

UserSchema.plugin(require('mongoose-autopopulate'));

UserSchema.pre('save', function (next) {
    if (this.password && this.isModified('password')) {
        genSalt(10, (err, salt) => {
            if (err) return next(err);
            hash(this.password, salt, null, (err, hash) => {
                if (err) return next(err);
                this.password = hash;
                next();
            });
        });
    }
    next()
})


UserSchema.methods.comparePassword = async (candidatePassword) =>
    compareSync(candidatePassword, this.password);

UserSchema.methods.toJSON = function () {
    let user = this.toObject();
    delete user.password;
    return user;
};

module.exports = mongoose.model('user', UserSchema);