const LaptopExtra = require('../../models/LaptopExtra')
const { LaptopExtraType } = require('./laptopExtraTypes')

const { GraphQLID, GraphQLList } = require('graphql')

const laptopExtraQueries = {
  laptopExtras: {
    type: new GraphQLList(LaptopExtraType),
    resolve(parent, args) {
      return LaptopExtra.find()
    }
  },
  laptopExtra: {
    type: LaptopExtraType,
    args: { id: { type: GraphQLID }},
    resolve(parent, args) {
      return LaptopExtra.findById(args.id)
    }
  }
}

module.exports = laptopExtraQueries