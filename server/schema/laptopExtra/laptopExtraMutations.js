const LaptopExtra = require('../../models/LaptopExtra')
const { LaptopExtraType } = require('./laptopExtraTypes')

const {
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLFloat
} = require('graphql')

const laptopExtraMutations = {
  addLaptopExtra: {
    type: LaptopExtraType,
    args: {
      name: { type: GraphQLNonNull(GraphQLString) },
      types: { type: GraphQLNonNull(GraphQLList(GraphQLString)) },
      quantity: { type: GraphQLNonNull(GraphQLInt) },
      price: { type: GraphQLNonNull(GraphQLFloat) },
      images: { type: GraphQLNonNull(GraphQLList(GraphQLString)) }
    },
    resolve(parent, args) {
      const laptopExtra = new LaptopExtra({
        name: args.name,
        types: args.types,
        quantity: args.quantity,
        price: args.price,
        images: args.images
      })
      return laptopExtra.save()
    }
  },
  deleteLaptopExtra: {
    type: LaptopExtraType,
    args: {
      id: { type: GraphQLNonNull(GraphQLID) },
    },
    resolve(parent, args) {
      return LaptopExtra.findByIdAndRemove(args.id)
    }
  },
  updateLaptopExtra: {
    type: LaptopExtraType,
    args: {
      id: { type: GraphQLNonNull(GraphQLID) },
      name: { type: GraphQLString },
      types: { type: GraphQLList(GraphQLString) },
      quantity: { type: GraphQLInt },
      price: { type: GraphQLFloat },
      images: { type: GraphQLList(GraphQLString) },
    },
    resolve(parent, args) {
      return LaptopExtra.findByIdAndUpdate(
        args.id,
        {
          $set: {
            name: args.name,
            types: args.types,
            quantity: args.quantity,
            price: args.price,
            images: args.images,
          }
        },
        { new: true }
      )
    }
  }
}

module.exports = laptopExtraMutations