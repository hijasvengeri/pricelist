const mongoose = require('mongoose')

const productSchema=mongoose.Schema(
    {
        slno:{
            type:String,
            require:true
        },

        items:{
            type:String,
           require:true
        },

        brand:{
            type:String,
           require:true
        },

        single:{
            type:String,
           require:true
        },

        price1:{
            type:String,
           require:true
        },

        price2:{
            type:String,
           require:true
        },


        price3:{
            type:String,
           require:true
        },

        price4:{
            type:String,
           require:true
        },

        price5:{
            type:String,
           require:true
        },

        gst:{
            type:String,
           require:true
        },

        mrp:{
            type:String,
           require:true
        },
    },
    {
        timestamps: true
    }
)
const Product=mongoose.model('data4', productSchema)

module.exports=Product