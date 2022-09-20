const Laptop = require('../../models/Laptop')
const { LaptopType } = require('./laptopTypes')

const {
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLFloat
} = require('graphql')

const laptopMutations = {
  addLaptop: {
    type: LaptopType,
    args: {
      name: { type: GraphQLNonNull(GraphQLString) },
      brand: { type: GraphQLNonNull(GraphQLString) },
      caption: { type: GraphQLString },
      types: { type: GraphQLNonNull(GraphQLList(GraphQLString)) },
      quantity: { type: GraphQLNonNull(GraphQLInt) },
      price: { type: GraphQLNonNull(GraphQLFloat) },
      images: { type: GraphQLNonNull(GraphQLList(GraphQLString)) },
      isTrending: { type: GraphQLBoolean },
      isOnSpecial: { type: GraphQLBoolean },
      amountSold: { type: GraphQLNonNull(GraphQLInt) },
      userRatings: { type: GraphQLList(GraphQLInt)},
      operatingSystem: { type: GraphQLNonNull(GraphQLString) },
      ram: { type: GraphQLNonNull(GraphQLString) },
      storage: { type: GraphQLNonNull(GraphQLString) },
      sizeInInches: { type: GraphQLNonNull(GraphQLString) },
      bundleIDs: { type: GraphQLList(GraphQLID) }
    },
    resolve(parent, args) {
      const laptop = new Laptop({
        name: args.name,
        brand: args.brand,
        caption: args.caption,
        types: args.types,
        quantity: args.quantity,
        price: args.price,
        images: args.images,
        isTrending: args.isTrending,
        isOnSpecial: args.isOnSpecial,
        amountSold: args.amountSold,
        userRatings: args.userRatings,
        operatingSystem: args.operatingSystem,
        ram: args.ram,
        storage: args.storage,
        sizeInInches: args.sizeInInches,
        bundleIDs: args.bundleIDs
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
      brand: { type: GraphQLString },
      caption: { type: GraphQLString },
      types: { type: GraphQLList(GraphQLString) },
      quantity: { type: GraphQLInt },
      price: { type: GraphQLFloat },
      images: { type: GraphQLList(GraphQLString) },
      isTrending: { type: GraphQLBoolean },
      isOnSpecial: { type: GraphQLBoolean },
      amountSold: { type: GraphQLInt },
      userRatings: { type: GraphQLList(GraphQLInt)},
      operatingSystem: { type: GraphQLString },
      ram: { type: GraphQLString },
      storage: { type: GraphQLString },
      sizeInInches: { type: GraphQLString },
      bundleIDs: { type: GraphQLList(GraphQLID) }
    },
    resolve(parent, args) {
      return Laptop.findByIdAndUpdate(
        args.id,
        {
          $set: {
            name: args.name,
            brand: args.brand,
            caption: args.caption,
            types: args.types,
            quantity: args.quantity,
            price: args.price,
            images: args.images,
            isTrending: args.isTrending,
            isOnSpecial: args.isOnSpecial,
            amountSold: args.amountSold,
            userRatings: args.userRatings,
            operatingSystem: args.operatingSystem,
            ram: args.ram,
            storage: args.storage,
            sizeInInches: args.sizeInInches,
            bundleIDs: args.bundleIDs
          }
        },
        { new: true }
      )
    }
  }
}

module.exports = laptopMutations