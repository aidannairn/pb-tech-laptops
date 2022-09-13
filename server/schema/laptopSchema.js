const Laptop = require('../models/Laptop')

const {
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType,
  GraphQLInt,
  GraphQLObjectType
} = require('graphql')

const LaptopType = new GraphQLObjectType({
  name: 'Laptop',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    type: { type: GraphQLString },
    quantity: { type: GraphQLInt },
    price: { type: GraphQLInt},
    images: { type: new GraphQLList(GraphQLString) }
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    laptops: {
      type: new GraphQLList(LaptopType),
      resolve(parent, args) {
        return Laptop.find()
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
})