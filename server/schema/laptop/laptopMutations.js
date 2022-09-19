const Laptop = require('../../models/Laptop')
const { LaptopType } = require('./laptopTypes')

const {
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInt
} = require('graphql')

const laptopMutations = {
  addLaptop: {
    type: LaptopType,
    args: {
      name: { type: GraphQLNonNull(GraphQLString) },
      types: { type: GraphQLNonNull(GraphQLList(GraphQLString)) },
      quantity: { type: GraphQLNonNull(GraphQLInt) },
      price: { type: GraphQLNonNull(GraphQLInt) },
      images: { type: GraphQLNonNull(GraphQLList(GraphQLString)) },
      bundleID: { type: GraphQLID }
    },
    resolve(parent, args) {
      const laptop = new Laptop({
        name: args.name,
        types: args.types,
        quantity: args.quantity,
        price: args.price,
        images: args.images,
        bundleID: args.bundleID
      })
      return laptop.save()
    }
  },
  deleteLaptop: {
    type: LaptopType,
    args: {
      id: { type: GraphQLNonNull(GraphQLID) },
    },
    resolve(parent, args) {
      return Laptop.findByIdAndRemove(args.id)
    }
  },
  updateLaptop: {
    type: LaptopType,
    args: {
      id: { type: GraphQLNonNull(GraphQLID) },
      name: { type: GraphQLString },
      types: { type: GraphQLList(GraphQLString) },
      quantity: { type: GraphQLInt },
      price: { type: GraphQLInt },
      images: { type: GraphQLList(GraphQLString) },
      bundleID: { type: GraphQLID }
    },
    resolve(parent, args) {
      return Laptop.findByIdAndUpdate(
        args.id,
        {
          $set: {
            name: args.name,
            types: args.types,
            quantity: args.quantity,
            price: args.price,
            images: args.images,
            bundleID: args.bundleID
          }
        },
        { new: true }
      )
    }
  }
}

module.exports = laptopMutations