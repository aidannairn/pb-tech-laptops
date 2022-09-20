const LaptopBundle = require('../../models/LaptopBundle')
const { LaptopBundleType } = require('./laptopBundleTypes')

const {
  GraphQLID,
  GraphQLString,
  GraphQLList,
} = require('graphql')

const laptopBundleQueries = {
  laptopBundles: {
    type: new GraphQLList(LaptopBundleType),
    resolve(parent, args) {
      return LaptopBundle.find()
    }
  },
  laptopBundle: {
    type: LaptopBundleType,
    args: { id: { type: GraphQLID }},
    resolve(parent, args) {
      return LaptopBundle.findById(args.id)
    }
  }
}

module.exports = laptopBundleQueries