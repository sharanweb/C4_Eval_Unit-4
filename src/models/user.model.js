const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        firstName: {type:String, required:true},
        lastName:{type:String, required:false},
        email:{type:String, required:true},
        password:{type:String, required:true},

    },
    {
        versionKey:false,
        timestamps:true
    }
);

userSchema.pre("save", function(next){
    const hash = bcrypt.hashSync(this.password, 8);
    this.password = hash;
    return next;
});

userSchema.methods.checkpassword = function(password){
    return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model("user",userSchema);

module.exports = User;