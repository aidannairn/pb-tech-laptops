const LaptopBundle = require('../../models/LaptopBundle')
const { LaptopBundleType } = require('./laptopBundleTypes')

const {
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType
} = require('graphql')

const laptopBundleMutations = {
  addLaptopBundle: {
    type: LaptopBundleType,
    args: {
      name: { type: GraphQLNonNull(GraphQLString) },
      type: {
        type: new GraphQLEnumType({
          name: 'ExtraType',
          values: {
            'accessories': { value: 'Popular Accessories' },
            'supplies': { value: 'Office Supplies' },
            'software': { value: 'Software' } 
          }
        }),
        defaultValue: 'Popular Accessories'
      },
      laptopExtraIDs: { type: GraphQLList(GraphQLID) }
    },
    resolve(parent, args) {
      const laptopBundle = new LaptopBundle({
        name: args.name,
        type: args.type,
        laptopExtraIDs: args.laptopExtraIDs
      })
      return laptopBundle.save()
    }
  },
  deleteLaptopBundle: {
    type: LaptopBundleType,
    args: {
      id: { type: GraphQLNonNull(GraphQLID) }
    },
    resolve(parent, args) {
      return LaptopBundle.findByIdAndRemove(args.id)
    }
  },
  updateLaptopBundle: {
    type: LaptopBundleType,
    args: {
      id: { type: GraphQLNonNull(GraphQLID) },
      name: { type: GraphQLString },
      type: {
        type: new GraphQLEnumType({
          name: 'ExtraTypeUpdate',
          values: {
            'accessories': { value: 'Popular Accessories' },
            'supplies': { value: 'Office Supplies' },
            'software': { value: 'Software' } 
          }
        })
      },
      laptopExtraIDs: { type: GraphQLList(GraphQLID) }
    },
    resolve(parent, args) {
      return LaptopBundle.findByIdAndUpdate(
        args.id,
        {
          $set: {
            name: args.name,
            type: args.type,
            laptopExtraIDs: args.laptopExtraIDs
          }
        },
        { new: true }
      )
    }
  }
}

module.exports = laptopBundleMutations