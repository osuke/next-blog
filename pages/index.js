import React, { Component } from 'react'
import { Link } from '../routes'
import axios from 'axios'
import SearchField from '../src/SearchField'


class Home extends Component {
  render () {
    return (
      <div>
        <SearchField />
        <ul>
        {this.props.items.map(val => (
          <li key={val.id}>
            <Link route="post" params={{ slug: val.id }}>
              <a>{val.title.rendered}</a>
            </Link>
          </li>
        ))}
        </ul>
      </div>
    )
  }
}

Home.getInitialProps = async ({ query }) => {
  let url = 'https://blog.funxion.jp/wp-json/wp/v2/posts/'
  let data = {}
  data.items = await axios.get(url, { params: query }).then(res => res.data)
  return data
}

export default Home
