/**
 * Created by ta on 2/2/17.
 */
'use strict'

import GitHubApi from 'github'

let github = new GitHubApi({
    // optional
  debug: true,
  protocol: 'https',
  host: 'api.github.com', // should be api.github.com for GitHub
  headers: {
    'user-agent': 'cthulu', // GitHub is happy with a unique user agent
    'Accept': 'application/vnd.github.drax-preview+json'
  },
  followRedirects: false, // default: true; there's currently an issue with non-get redirects, so allow ability to disable follow-redirects
  timeout: 5000
})

export default github
