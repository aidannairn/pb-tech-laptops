const laptopQueries = require('./laptop/laptopQueries')
const laptopMutations = require('./laptop/laptopMutations')
const laptopBundleQueries = require('./laptopBundle/laptopBundleQueries')
const laptopBundleMutations = require('./laptopBundle/laptopBundleMutations')
const laptopExtraQueries = require('./laptopExtra/laptopExtraQueries')
const laptopExtraMutations = require('./laptopExtra/laptopExtraMutations')

const { GraphQLSchema, GraphQLObjectType } = require('graphql')

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    ...laptopQueries,
    ...laptopBundleQueries,
    ...laptopExtraQueries
  }
})

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    ...laptopMutations,
    ...laptopBundleMutations,
    ...laptopExtraMutations
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation
})