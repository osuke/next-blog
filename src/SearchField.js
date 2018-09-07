import React, { Component } from 'react'
import Router from 'next/router'

export default class SearchField extends Component {
  onSubmitHandler (e) {
    e.preventDefault()
    Router.push({
      pathname: '/',
      query: { search: this.textInput.value }
    })
  }

  render () {
    return (
      <form
        onSubmit={this.onSubmitHandler.bind(this)}>
        <input
          type="text"
          name="search"
          ref={
            (input) => { this.textInput = input }
          } />
      </form>
    )
  }
}
