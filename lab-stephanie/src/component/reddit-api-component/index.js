import React from 'react'
import ReactDom from 'react-dom'
import superagent from 'superagent'

const API_URL = 'http://www.reddit.com/r'

class RedditApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      thumbnail: [],
      title: '',
      url: '',
    }
    this.getReddit = this.getReddit.bind(this)
  }

  getReddit() {
    superagent
      .get(`${API_URL}/ProgrammerHumor.json?limit=1`)
      .then(res => {
        console.log('res.body', res.body.data.children[0].data)
        this.setState({
          thumbnail: [
            ...this.state.thumbnail,
            res.body.data.children[0].data.thumbnail,
          ],
          title: res.body.data.children[0].data.title,
          url: res.body.data.children[0].data.url,
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  componentDidMount() {
    this.getReddit()
  }

  render() {
    return (
      <div className="reddit">
        <h3>Programmer Humor (Reddit)</h3>
        <a href={this.state.url} target="_blank">
          <img src={this.state.thumbnail[0]} />
          <h6>
            {this.state.title}
          </h6>
        </a>
      </div>
    )
  }
}

export default RedditApp
