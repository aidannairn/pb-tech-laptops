import { sortArrByObjProps } from "../utils/sortArrByObjProps";

interface Person {
  firstName: string
  lastName: string
  age:  number
}

const people: Person[] = [
  {
    firstName: "Tommy",
    lastName: "PICKLES",
    age: 1
  },
  {
    firstName: "Chuckie",
    lastName: "FINSTER",
    age: 2
  },
  {
    firstName: "dil",
    lastName: "PICKLES",
    age: 0
  },
  {
    firstName: "Angelica",
    lastName: "PICKLES",
    age: 3
  },
  {
    firstName: "Phil",
    lastName: "DEVILLE",
    age: 2
  },
  {
    firstName: "Lil",
    lastName: "DEVILLE",
    age: 2
  }
]

describe('Sort array by object props', () => {
  it('Arrange people by oldest to youngest.', () => {
    const expected = [
      {
        firstName: "Angelica",
        lastName: "PICKLES",
        age: 3
      },
      {
        firstName: "Chuckie",
        lastName: "FINSTER",
        age: 2
      },
      {
        firstName: "Phil",
        lastName: "DEVILLE",
        age: 2
      },
      {
        firstName: "Lil",
        lastName: "DEVILLE",
        age: 2
      },
      {
        firstName: "Tommy",
        lastName: "PICKLES",
        age: 1
      },
      {
        firstName: "dil",
        lastName: "PICKLES",
        age: 0
      }
    ]

    const result: Person[] = sortArrByObjProps([...people], '-age')

    expect(result).toEqual(expected)
  })

  it('Arrange people by ascending last name, then ascending age.', () => {
    const expected = [
      {
        firstName: "Phil",
        lastName: "DEVILLE",
        age: 2
      },
      {
        firstName: "Lil",
        lastName: "DEVILLE",
        age: 2
      },
      {
        firstName: "Chuckie",
        lastName: "FINSTER",
        age: 2
      },
      {
        firstName: "dil",
        lastName: "PICKLES",
        age: 0
      },
      {
        firstName: "Tommy",
        lastName: "PICKLES",
        age: 1
      },
      {
        firstName: "Angelica",
        lastName: "PICKLES",
        age: 3
      }
    ]

    const result: Person[] = sortArrByObjProps([...people], 'lastName', 'age' )

    expect(result).toEqual(expected)
  })

  it('Arrange people by descending last name, then ascending first name.', () => {
    const expected = [
      {
        firstName: "Angelica",
        lastName: "PICKLES",
        age: 3
      },
      {
        firstName: "dil",
        lastName: "PICKLES",
        age: 0
      },
      {
        firstName: "Tommy",
        lastName: "PICKLES",
        age: 1
      },
      {
        firstName: "Chuckie",
        lastName: "FINSTER",
        age: 2
      },
      {
        firstName: "Lil",
        lastName: "DEVILLE",
        age: 2
      },
      {
        firstName: "Phil",
        lastName: "DEVILLE",
        age: 2
      }
    ]

    const result: Person[] = sortArrByObjProps([...people], '-lastName', 'firstName')

    expect(result).toEqual(expected)
  })
})
