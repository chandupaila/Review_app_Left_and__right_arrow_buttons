import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {currentCarouselIndex: 0}

  onClickRightArrow = () => {
    const {currentCarouselIndex} = this.state
    const {reviewsData} = this.props

    if (currentCarouselIndex < reviewsData.length - 1) {
      this.setState(prevState => ({
        currentCarouselIndex: prevState.currentCarouselIndex + 1,
      }))
    }
  }

  renderActiveReview = review => {
    const {imgUrl, username, companyName, description} = review

    return (
      <div className="review-container">
        <img src={imgUrl} alt={`${username}-avatar`} />
        <p className="username">{username}</p>
        <p className="company">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onClickLeftArrow = () => {
    const {currentCarouselIndex} = this.state
    if (currentCarouselIndex > 0) {
      this.setState(prevState => ({
        currentCarouselIndex: prevState.currentCarouselIndex - 1,
      }))
    }
  }

  render() {
    const {reviewsData} = this.props
    const {currentCarouselIndex} = this.state
    const currentReviewData = reviewsData[currentCarouselIndex]

    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="review-container-box">
          <button
            type="button"
            className="image"
            onClick={this.onClickLeftArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left-arrow"
            />
          </button>

          {this.renderActiveReview(currentReviewData)}

          <button
            type="button"
            className="image"
            onClick={this.onClickRightArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="left-arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
