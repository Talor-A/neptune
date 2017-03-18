/**
 * Created by ta on 3/2/17.
 */
const API = {
  user: {
    type: 'basic',
    username: 'talor-a',
    password: 'a45g955p'
  },
  getLicenses () {
    let myHeaders = new Headers()
    myHeaders.append('Accept', 'application/vnd.github.drax-preview+json')
    myHeaders.append('Authorization', 'Bearer 8f46b2aaf601143e31314a67e1b09b904f85f46e')
    return fetch('https://api.github.com/licenses', {headers: myHeaders})
      .then(res => res.json())
      .then(json => { return json })
      .catch(err => console.warn(err))
  }
}

export default API
