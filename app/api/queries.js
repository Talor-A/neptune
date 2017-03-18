import gql from 'graphql-tag'

export const GET_VIEWER = gql`
{
  viewer {
    email
    avatarURL
    bio
    name
    repositories(first: 100, orderBy: {field: UPDATED_AT, direction: DESC}) {
      nodes {
        name
        id
        isPrivate
        description
       stargazers {
        totalCount
      }
        forks {
          totalCount
        }
        isFork
        parent {
          name
        }
        owner{
          login
        }
      }
    }
  }
}

`
export const GET_USER = gql`
query CurrentUser($user: String!) {
  user(login: $user) {
    email
    avatarURL
    bio
    name
    repositories(first: 100, orderBy: {field: UPDATED_AT, direction: DESC}) {
      nodes {
        name
        id
        isPrivate
        description
       stargazers {
        totalCount
      }
        forks {
          totalCount
        }
        isFork
        parent {
          name
        }
        owner{
          login
        }
      }
    }
  }
}

`
export const GET_REPO = gql`
query CurrentUser($user: String!, $repo: String!) {
  repository(owner: $user name: $repo) {
    name
    description
    homepageURL
    isPrivate
    url
    updatedAt
  }
}


`
