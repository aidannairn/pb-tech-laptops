const {
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLObjectType
} = require('graphql')

const LaptopExtraType = new GraphQLObjectType({
  name: 'LaptopExtra',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    types: { type: new GraphQLList(GraphQLString) },
    quantity: { type: GraphQLInt },
    price: { type: GraphQLInt},
    images: { type: new GraphQLList(GraphQLString) }
  })
})

module.exports = { LaptopExtraType }