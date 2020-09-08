import React, {Component} from 'react';
import '../../App.css';

export const ChapterCoverImage = ({src}) => {
    return (
        <div style={{
            background: `url(${src})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            width: '-webkit-fill-available',
            height: '100vh',
        }}
        />
    )
};

export const MultiImageContainer = ({children}) => {
    return (
        <div className="Chapter-Multi-image-container">
            {children}
        </div>
    )
};

export const MultiImage = ({srcArray}) => {
    return (
        srcArray.map(src => (
            <div className="Chapter-Multi-image-image"
                 style={{
                     background: `url(${src})`,
                     backgroundSize: 'contain',
                     backgroundRepeat: 'no-repeat'
                 }}
            />
        ))
    )
};

export const ChapterBody = ({children}) => {
    return (
        <div className="Chapter-body">
            {children}
        </div>
    )
};

export const ChapterTitleGroup = ({children}) => {
    return (
        <div className="Chapter-body-title-group">
            {children}
        </div>
    )
};

export const ChapterFirstLayerNoListStyle = ({children}) => {
    return (
        <p className="first-layer-no-list-style">
            {children}
        </p>
    )
};

export const ChapterSecondLayerNoListStyle = ({children}) => {
    return (
        <p className="second-layer-no-list-style">
            {children}
        </p>
    )
};
