import React, {Component, Fragment} from 'react';

import img_Slide1 from '../images/hiringOperations/Slide1.png';
import img_Slide2 from '../images/hiringOperations/Slide2.png';
import img_Slide3 from '../images/hiringOperations/Slide3.png';
import img_Slide4 from '../images/hiringOperations/Slide4.png';
import img_Slide5 from '../images/hiringOperations/Slide5.png';
import img_Slide6 from '../images/hiringOperations/Slide6.png';
import img_Slide7 from '../images/hiringOperations/Slide7.png';
import img_Slide8 from '../images/hiringOperations/Slide8.png';
import img_Slide9 from '../images/hiringOperations/Slide9.png';

const operations = [
    img_Slide1,
    img_Slide2,
    img_Slide3,
    img_Slide4,
    img_Slide5,
    img_Slide6,
    img_Slide7,
    img_Slide8,
    img_Slide9
];

class HiringOperation extends Component {
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
        });
    }

    render() {

        return (
            <div
                style={{
                    width: '100vw',
                    height: '100vh',
                    display: 'block'
                }}
            >
                <div
                    style={{
                        background: `url(${operations[this.state.currentImageIndex]}) 0% 0% / contain no-repeat`,
                        height: '100%',
                        position: 'relative'
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        width: this.state.currentWidth,
                        height: this.state.currentHeight,
                        border: '1px solid red',
                        top: this.state.currentTop,
                        left: this.state.currentLeft,
                        bottom: this.state.currentBottom,
                        right: this.state.currentRight,
                    }}
                    onClick={this.handleSpotClick}
                />
            </div>
        )
    }

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
                width: "6em",
                height: "2em",
                top: "16em",
                bottom: 0,
                left: "8em",
                right: 0,
                gotoNextImage: true
            },
            {
                width: "2em",
                height: "2em",
                top: "2em",
                bottom: 0,
                left: 0,
                right: "1.5em",
                gotoNextImage: true
            },
            {
                width: "2em",
                height: "2em",
                top: "2.5em",
                bottom: 0,
                left: 0,
                right: ".2em",
                gotoNextImage: false
            },
            {
                width: "3em",
                height: "3em",
                top: "12.5em",
                bottom: 0,
                left: 0,
                right: "6.5em",
                gotoNextImage: true
            },
            {
                width: "1.5em",
                height: "1.5em",
                top: "8.5em",
                bottom: 0,
                left: "1em",
                right: 0,
                gotoNextImage: false
            },
            {
                width: "4.5em",
                height: "2em",
                top: "4.8em",
                bottom: 0,
                left: 0,
                right: "3em",
                gotoNextImage: true
            },
            {
                width: "2em",
                height: "2em",
                top: "8.5em",
                bottom: 0,
                left: 0,
                right: "3.5em",
                gotoNextImage: true
            },
            {
                width: "15em",
                height: "2.5em",
                top: "27%",
                bottom: 0,
                left: 0,
                right: "35%",
                gotoNextImage: false
            },
            {
                width: "8em",
                height: "2.5em",
                top: "43.5%",
                bottom: 0,
                left: 0,
                right: "49%",
                gotoNextImage: true
            },
            {
                width: "4em",
                height: "2.5em",
                top: "4.5em",
                bottom: 0,
                left: 0,
                right: "7em",
                gotoNextImage: true
            }
        ]
    }
}

const ImageWithClickSpot = ({
                                width = '5em',
                                height = '5em',
                                imgSrc,
                                left,
                                right,
                                top,
                                bottom,
                                onClick
                            }) => (
    <Fragment>
        <div
            style={{
                background: `url(${imgSrc}) 0% 0% / contain no-repeat`,
                height: '100%',
                position: 'relative'
            }}
        />
        <ClickSpot
            width={width}
            height={height}
            top={top}
            bottom={bottom}
            right={right}
            left={left}
            onClick={onClick}
        />
    </Fragment>
);

const ClickSpot = ({
                       width = '5em',
                       height = '5em',
                       onClick,
                       left,
                       right,
                       top,
                       bottom,
                       color,
                   }) => (
    <Fragment>
        <div
            style={{
                position: 'absolute',
                width: width,
                height: height,
                border: '1px solid red',
                top: top,
                left: left,
                bottom: bottom,
                right: right,
            }}
            onClick={onClick}
        />
    </Fragment>
);

export default HiringOperation;
