var mongoose = require('mongoose'),
    Schema = mongoose.Schema,

    _ = require('underscore');


var landSchema = new Schema({

    salePrice: {
        type: Number,
        required: false
    },
    isForSale: {
        type: Boolean,
        default: false
    },
    owner: {

        type: Schema.ObjectId,
        ref: 'User',
        required: true,
        validation: {
            message: 'Owner is required'
        }
    },
    localization: {

        street: String,
        city: String,
        number: Number,
        zipCode: Number
    },
    dividable:{
        type:Boolean,
        default:false
    },

    pins: [{
        longitude: {
            type: Number,
            required: true,
            validation: {
                message: 'Longitude is required'
            }
        },
        latitude: {
            type: Number,
            required: true,
            validation: {
                message: 'Latitude is required'
            }
        }

    }]

});
module.exports = mongoose.model('Land', landSchema);