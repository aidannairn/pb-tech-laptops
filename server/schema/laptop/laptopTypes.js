const { LaptopBundleType } = require('../laptopBundle/laptopBundleTypes')
const LaptopBundle = require('../../models/LaptopBundle')

const {
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLObjectType
} = require('graphql')

const LaptopType = new GraphQLObjectType({
  name: 'Laptop',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    types: { type: new GraphQLList(GraphQLString) },
    quantity: { type: GraphQLInt },
    price: { type: GraphQLInt},
    images: { type: new GraphQLList(GraphQLString) },
    bundle: {
      type: LaptopBundleType,
      resolve(parent, args) {
        return LaptopBundle.findById(parent.bundleID)
      }
    }
  })
})

module.exports = { LaptopType }