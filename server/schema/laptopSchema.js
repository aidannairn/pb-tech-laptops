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
        images: { type: GraphQLNonNull(GraphQLList(GraphQLString)) }
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
    },
    updateLaptop: {
      type: LaptopType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        type: { type: GraphQLString },
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
              type: args.type,
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

/* # UPDATE LAPTOP
mutation {
  updateLaptop(
    id: "6320d23932e0ab7e3b651350",
    name: "Test Name",
    type: "Test Type",
    quantity: 69,
    price: 420,
    images: [
      "https://www.pbtech.co.nz/imgprod/N/B/NBKHNB141003__2.jpg?h=12519866",
      "https://www.pbtech.co.nz/imgprod/N/B/NBKHNB141003__1.jpg?h=2008561964"
    ]
  ) {
    id
    name
    type
    quantity
    price
    images
  }
} */