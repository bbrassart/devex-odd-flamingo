// React dependencies
import React, { Component } from 'react'
// Styling
import Badge from 'react-bootstrap/Badge'

class Articles extends Component {
  renderArticles() {
    return (
      <>
        <p>
          {this.props.articles.total} related article{this.props.articles.total === 0 ? '' : 's'}
        </p>
        <p>First 20 results</p>
        <ul>
          {
            this.props.articles.data.map((article, index) => {
              return (
                <li key={index}>
                  <a target='_blank' href={'https://www.devex.com/news/' + article.slud_and_id}>
                    {article.title}
                  </a>
                </li>
              )
            })
          }
        </ul>
      </>
    )
  }

  render() {
    return (
      <div>
        {
          <div className='mt-1 mb-5'>
            <Badge className='mb-3' variant="secondary">Related articles</Badge>
            {
              !!Object.keys(this.props.articles).length ?
                this.renderArticles()
                :
                <p>No related articles yet</p>
            }
          </div>
        }
      </div>
    )
  }
}

export default Articles;
