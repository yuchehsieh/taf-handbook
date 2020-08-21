import React, {Component} from 'react';

import img_Slide1 from '../images/replyToTheInterviewReview/Slide1.png';
import img_Slide2 from '../images/replyToTheInterviewReview/Slide2.png';
import img_Slide3 from '../images/replyToTheInterviewReview/Slide3.png';

const operations = [
    img_Slide1,
    img_Slide2,
    img_Slide3,
];

class ReplyToTheInterviewReview extends Component {
    constructor(props) {
        super(props);

        this.getNextImageIndex = this.getNextImageIndex.bind(this);
        // this.goPrevImage = this.goPrevImage.bind(this);
        this.getNextMovementIndex = this.getNextMovementIndex.bind(this);
        // this.goPrevMovement = this.goPrevMovement.bind(this);
        this.handleSpotClick = this.handleSpotClick.bind(this);
        this.state = {
            currentImageIndex: 0,
            currentClickSpotIndex: 0,

            currentWidth: '100%',
            currentHeight: '100%',
            currentTop: 0,
            currentLeft: 0,
            currentRight: 0,
            currentBottom: 0,
            currentMarginTop: null,
            currentMarginLeft: null,
            currentMarginBottom: null,
            currentMarginRight: null,
        }
    }

    getNextImageIndex() {
        let index = this.state.currentImageIndex;

        if (index === operations.length - 1) index = 0;
        else index = index + 1;

        return index;
    }

    // goPrevImage() {
    //     let index = this.state.currentImageIndex;
    //
    //     if (index === 0) index = 0;
    //     else index = index - 1;
    //
    //     this.setState({
    //         currentImageIndex: index
    //     })
    // }

    getNextMovementIndex() {
        let index = this.state.currentClickSpotIndex;

        if (index === this.getMovements().length - 1) index = 0;
        else index = index + 1;

        return index;
    }

    // goPrevMovement() {
    //     let index = this.state.currentClickSpotIndex;
    //
    //     if (index === 0) index = 0;
    //     else index = index - 1;
    //
    //     this.setState({
    //         currentClickSpotIndex: index
    //     })
    // }

    handleSpotClick() {
        let nextMovementIndex = this.getNextMovementIndex();

        console.log(nextMovementIndex);

        let currentMovement = this.getMovements()[this.state.currentClickSpotIndex];
        let nextMovement = this.getMovements()[nextMovementIndex];

        let imageIndex = currentMovement.gotoNextImage
            ? this.getNextImageIndex()
            : this.state.currentImageIndex;


        this.setState({
            currentImageIndex: imageIndex,
            currentClickSpotIndex: nextMovementIndex,

            currentWidth: nextMovement.width || null,
            currentHeight: nextMovement.height || null,
            currentTop: nextMovement.top || null,
            currentLeft: nextMovement.left || null,
            currentRight: nextMovement.right || null,
            currentBottom: nextMovement.bottom || null,
            currentMarginTop: nextMovement.marginTop || null,
            currentMarginLeft: nextMovement.marginLeft || null,
            currentMarginBottom: nextMovement.marginBottom || null,
            currentMarginRight: nextMovement.marginRight || null,
        });
    }

    render() {

        return (
            <div
                style={{
                    width: '100vw',
                    height: '100vh',
                    display: 'block',
                    overflowY: 'hidden'
                }}
            >
                <div
                    style={{
                        background: `url(${operations[this.state.currentImageIndex]}) 0% 0% / contain no-repeat`,
                        height: 0,
                        // paddingTop: '100%',
                        paddingBottom: "56.25%",
                        position: 'relative'
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        border: '3px solid red',
                        transition: 'all .3s',
                        cursor: 'pointer',
                        width: this.state.currentWidth,
                        height: this.state.currentHeight,
                        top: this.state.currentTop,
                        left: this.state.currentLeft,
                        bottom: this.state.currentBottom,
                        right: this.state.currentRight,
                        marginTop: this.state.currentMarginTop,
                        marginLeft: this.state.currentMarginLeft,
                        marginBottom: this.state.currentMarginBottom,
                        marginRight: this.state.currentMarginRight,
                    }}
                    onClick={this.handleSpotClick}
                />
            </div>
        )
    }

    // 0 equals to null, use "0" instead
    getMovements() {
        return [
            {
                width: "100%",
                height: "100%",
                top: "0",
                bottom: "0",
                left: "0",
                right: "0",
                gotoNextImage: true
            },
            {
                width: "3vw",
                height: "3vw",
                top: "0",
                right: "0",
                marginTop: "14.7%",
                marginRight: "20.2%",
                gotoNextImage: false
            },
            {
                width: "3vw",
                height: "3vw",
                top: "0",
                left: "0",
                marginTop: "27.2%",
                marginLeft: "1.7%",
                gotoNextImage: false
            },
            {
                width: "3vw",
                height: "3vw",
                top: "0",
                right: "0",
                marginTop: "20.4%",
                marginRight: "6.8%",
                gotoNextImage: true
            },
            {
                width: "33vw",
                height: "4.7vw",
                top: "0",
                left: "0",
                marginTop: "30.7%",
                marginLeft: "1%",
                gotoNextImage: false
            },
            {
                width: "7.5vw",
                height: "4.2vw",
                top: "0",
                right: "0",
                marginTop: "13%",
                marginRight: "13.9%",
                gotoNextImage: true
            },
        ]
    }
}

export default ReplyToTheInterviewReview;
