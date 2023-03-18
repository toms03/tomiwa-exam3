import axios from 'axios'

const getRepoList = async () =>
  await (
    await axios.get('https://api.github.com/users/toms03/repos')
  ).data
const getProfileOwner = async () =>
  await (
    await axios.get('https://api.github.com/users/toms03')
  ).data

export default { getProfileOwner, getRepoList }
