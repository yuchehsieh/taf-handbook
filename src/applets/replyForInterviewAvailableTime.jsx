import React, {Component} from 'react';

import img_Slide1 from '../images/replyForInterviewAvailableTime/Slide1.png';
import img_Slide2 from '../images/replyForInterviewAvailableTime/Slide2.png';
import img_Slide3 from '../images/replyForInterviewAvailableTime/Slide3.png';
import img_Slide4 from '../images/replyForInterviewAvailableTime/Slide4.png';
import img_Slide5 from '../images/replyForInterviewAvailableTime/Slide5.png';
import img_Slide6 from '../images/replyForInterviewAvailableTime/Slide6.png';
import img_Slide7 from '../images/replyForInterviewAvailableTime/Slide7.png';
import img_Slide8 from '../images/replyForInterviewAvailableTime/Slide8.png';

const operations = [
    img_Slide1,
    img_Slide2,
    img_Slide3,
    img_Slide4,
    img_Slide5,
    img_Slide6,
    img_Slide7,
    img_Slide8,
];

class ReplyForInterviewAvailableTime extends Component {
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
                height: "2.5vw",
                top: "0",
                right: "0",
                marginTop: "8.5%",
                marginRight: "0.5%",
                gotoNextImage: false
            },
            {
                width: "5vw",
                height: "6vw",
                top: "0",
                right: "0",
                marginTop: "29%",
                marginRight: "13%",
                gotoNextImage: true
            },
            {
                width: "3vw",
                height: "3vw",
                top: "0",
                left: "0",
                marginTop: "19.6%",
                marginLeft: "1.7%",
                gotoNextImage: false
            },
            {
                width: "6vw",
                height: "4.5vw",
                top: "0",
                right: "0",
                marginTop: "11.8%",
                marginRight: "7%",
                gotoNextImage: true
            },
            {
                width: "3vw",
                height: "3vw",
                top: "0",
                right: "0",
                marginTop: "18.5%",
                marginRight: "7%",
                gotoNextImage: true
            },
            {
                width: "30vw",
                height: "5vw",
                top: "0",
                right: "0",
                marginTop: "27%",
                marginRight: "34.5%",
                gotoNextImage: false
            },
            {
                width: "15vw",
                height: "4vw",
                top: "0",
                right: "0",
                marginTop: "42%",
                marginRight: "49.5%",
                gotoNextImage: true
            },
            {
                width: "8vw",
                height: "4vw",
                top: "0",
                right: "0",
                marginTop: "13.3%",
                marginRight: "13.5%",
                gotoNextImage: true
            },
            {
                width: "100%",
                height: "100%",
                top: "0",
                bottom: "0",
                left: "0",
                right: "0",
                gotoNextImage: true
            },
        ]
    }
}

export default ReplyForInterviewAvailableTime;
