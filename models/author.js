let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let AuthorSchema = new Schema(
    {
        first_name: {type: String, required: true, maxlength: 100},
        family_name: {type: String, required: true, maxlength: 100},
        date_of_birth: {type: Date},
        date_of_death: {type: Date}
    }
)

//Virtual for Author's full name
AuthorSchema.virtual('name').get(function(){
    /*
    To avoid errors in cases where an author does not have either a family name or first name.
    We want to make sure we handle the exception by returning an empty string for that case
    */

    let fullname = '';
    if(this.first_name && this.family_name){
        fullname = this.family_name + ', ' + this.first_name;
    };
    if(!this.first_name || !this.family_name){
        fullname = '';
    }

    return fullname;
});

//Virtual for Author's lifespan
AuthorSchema.virtual('lifespan').get(function(){
    return (this.date_of_death.getYear() - this.date_of_birth.getYear()).toString();
})

//Virtual for Author's URL
AuthorSchema.virtual('url').get(function(){
    return '/catalog/author/' + this._id;
});

//Export Module
module.exports = mongoose.model('Author', AuthorSchema);