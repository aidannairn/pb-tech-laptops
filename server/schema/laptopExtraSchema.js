const LaptopExtra = require('../models/LaptopExtra')

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

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
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
})

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addLaptopExtra: {
      type: LaptopExtraType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        types: { type: GraphQLNonNull(GraphQLList(GraphQLString)) },
        quantity: { type: GraphQLNonNull(GraphQLInt) },
        price: { type: GraphQLNonNull(GraphQLInt) },
        images: { type: GraphQLNonNull(GraphQLList(GraphQLString)) }
      },
      resolve(parent, args) {
        const laptopExtra = new Laptop({
          name: args.name,
          types: args.types,
          quantity: args.quantity,
          price: args.price,
          images: args.images
        })
        return laptopExtra.save()
      }
    },
    deleteLaptopExtra: {
      type: LaptopExtraType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return LaptopExtra.findByIdAndRemove(args.id)
      }
    },
    updateLaptopExtra: {
      type: LaptopExtraType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        types: { type: GraphQLList(GraphQLString) },
        quantity: { type: GraphQLInt },
        price: { type: GraphQLInt },
        images: { type: GraphQLList(GraphQLString) },
      },
      resolve(parent, args) {
        return LaptopExtra.findByIdAndUpdate(
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