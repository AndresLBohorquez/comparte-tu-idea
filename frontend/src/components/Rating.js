function Rating(props) {
    const { rating } = props;
    return (
        <div>
            <span>
                <i className={
                    rating < 0.5 ? "far fa-star rating-ico" :
                        rating > 0.5 && rating < 1 ? "fa fa-star-half-alt rating-ico" : "fa fa-star rating-ico"
                } />
            </span>
            <span>
                <i className={
                    rating > 1 && rating < 1.5 ? "far fa-star rating-ico" :
                        rating > 1.5 && rating < 2 ? "fa fa-star-half-alt rating-ico" :
                            rating >= 2 ? "fa fa-star rating-ico" : ""
                } />
            </span>
            <span>
                <i className={
                    rating > 2 && rating < 2.5 ? "far fa-star rating-ico" :
                        rating > 2.5 && rating < 3 ? "fa fa-star-half-alt rating-ico" :
                            rating >= 3 ? "fa fa-star rating-ico" : ""
                } />
            </span>
            <span>
                <i className={
                    rating > 3 && rating < 3.5 ? "far fa-star rating-ico" :
                        rating > 3.5 && rating < 4 ? "fa fa-star-half-alt rating-ico" :
                            rating >= 4 ? "fa fa-star rating-ico" : ""
                } />
            </span>
            <span>
                <i className={
                    rating > 4 && rating < 4.5 ? "far fa-star rating-ico" :
                        rating > 4.5 && rating < 5 ? "fa fa-star-half-alt rating-ico" :
                            rating === 5 ? "fa fa-star rating-ico" : ""
                } />
            </span>
        </div>

    )
}

export default Rating;