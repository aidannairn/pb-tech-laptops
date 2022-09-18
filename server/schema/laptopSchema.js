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
    types: { type: new GraphQLList(GraphQLString) },
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
        types: { type: GraphQLNonNull(GraphQLList(GraphQLString)) },
        quantity: { type: GraphQLNonNull(GraphQLInt) },
        price: { type: GraphQLNonNull(GraphQLInt) },
        images: { type: GraphQLNonNull(GraphQLList(GraphQLString)) }
      },
      resolve(parent, args) {
        const laptop = new Laptop({
          name: args.name,
          types: args.types,
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
    },
    updateLaptop: {
      type: LaptopType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        types: { type: GraphQLList(GraphQLString) },
        quantity: { type: GraphQLInt },
        price: { type: GraphQLInt },
        images: { type: GraphQLList(GraphQLString) },
      },
      resolve(parent, args) {
        return Laptop.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              types: args.types,
              quantity: args.quantity,
              price: args.price,
              images: args.images,
            }
          },
          { new: true }
        )
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation
})