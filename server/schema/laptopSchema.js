const Laptop = require('../models/Laptop')

const {
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
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

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addLaptop: {
      type: LaptopType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        type: { type: GraphQLNonNull(GraphQLString) },
        quantity: { type: GraphQLNonNull(GraphQLInt) },
        price: { type: GraphQLNonNull(GraphQLInt) },
        images: { type: GraphQLNonNull(GraphQLList(GraphQLString)) },
      },
      resolve(parent, args) {
        const laptop = new Laptop({
          name: args.name,
          type: args.type,
          quantity: args.quantity,
          price: args.price,
          images: args.images
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
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation
})