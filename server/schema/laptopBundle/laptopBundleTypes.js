const { LaptopExtraType } = require('../laptopExtra/laptopExtraTypes')
const LaptopExtra = require('../../models/LaptopExtra')

const {
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLObjectType
} = require('graphql')

const LaptopBundleType = new GraphQLObjectType({
  name: 'LaptopBundle',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    type: { type: GraphQLString },
    laptopExtras: { 
      type: new GraphQLList(LaptopExtraType),
      resolve(parent, args) {
        return LaptopExtra.find({
          '_id': { $in: [...parent.laptopExtraIDs]}
        })
      }
    }
  })
})

module.exports = { LaptopBundleType }