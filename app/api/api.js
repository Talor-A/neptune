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
    return fetch('https://api.github.com/licenses', {headers: myHeaders})
      .then(res => res.json())
      .then(json => { return json })
      .catch(err => console.warn(err))
  }
}

export default API
