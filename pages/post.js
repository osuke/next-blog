import React from 'react'
import axios from 'axios'

const Post = ({ title, content }) => (
  <div>
    <h1>{title.rendered}</h1>
    <div dangerouslySetInnerHTML={{__html: content.rendered}} />
  </div>
)

Post.getInitialProps = async ({ query }) => {
  const data = await axios.get('https://blog.funxion.jp/wp-json/wp/v2/posts/' + query.slug).then(res => res.data)
  return data
}

export default Post
