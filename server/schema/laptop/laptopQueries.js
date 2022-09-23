const { GraphQLID, GraphQLList, GraphQLString } = require('graphql')
const Laptop = require('../../models/Laptop')
const { LaptopType } = require('./laptopTypes')

const laptopQueries = {
  laptops: {
    type: new GraphQLList(LaptopType),
    resolve(parent, args) {
      return Laptop.find()
    }
  },
  laptopsByType: {
    type: new GraphQLList(LaptopType),
    args: { type: { type: GraphQLString }},
    resolve(parent, args) {
      return Laptop.find({
        types: args.type
      })
    }
  },
  laptop: {
    type: LaptopType,
    args: { id: { type: GraphQLID }},
    resolve(parent, args) {
      return Laptop.findById(args.id)
    }
  }
}

module.exports = laptopQueries