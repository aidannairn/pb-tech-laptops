const {
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLFloat
} = require('graphql')

const LaptopExtraType = new GraphQLObjectType({
  name: 'LaptopExtra',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    types: { type: new GraphQLList(GraphQLString) },
    quantity: { type: GraphQLInt },
    price: { type: GraphQLFloat},
    images: { type: new GraphQLList(GraphQLString) }
  })
})

module.exports = { LaptopExtraType }