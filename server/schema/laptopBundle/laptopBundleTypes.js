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
    laptopExtra: {
      type: LaptopExtraType,
      resolve(parent, args) {
        return LaptopExtra.findById(parent.laptopExtraID)
      }
    }
  })
    
    
    
    /* {
      type: new GraphQLList({
        type: LaptopExtraType,
        resolve(parent, args) {
          console.log('Hit', parent)
          parent.laptopExtraIDs.map(id => {
            return LaptopExtra.findById(id)
          })
        }
      })
    } */
})

module.exports = { LaptopBundleType }