import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'

class ErrorModal extends Component {
  componentDidMount() {
    let { title, message } = this.props

    let modalMarkup = (
      <div id='error-modal' className='reveal tiny text-center' data-reveal=''>
        <h4>{ title }</h4>
        <p>{ message }</p>
        <p>
          <button className='button hollow' data-close=''>
            Okay
          </button>
        </p>
      </div>
    )

    let $modal = $(ReactDOMServer.renderToString(modalMarkup))
    $(ReactDOM.findDOMNode(this)).html($modal)

    let modal = new Foundation.Reveal($('#error-modal'))
    modal.open()
  }
  render() {


    return (
      <div>
      </div>
    )
  }
}

ErrorModal.defaultProps = {
  title: 'Error'
}

ErrorModal.propTypes = {
  title: React.PropTypes.string,
  message: React.PropTypes.string.isRequired
}


export default ErrorModal
