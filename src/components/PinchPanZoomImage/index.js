import React, { Component } from 'react'
import { Image, Dimensions } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';

class PinchPanZoomImage extends Component {
	render() {
		const { image } = this.props
		let uri = ""
		if (image) {
			if (image.uri) {
				uri = image.uri
			} else {
				uri = image
			}
		}
		return (
			<ImageZoom cropWidth={this.props._width}
			cropHeight={this.props._height}
			imageWidth={this.props._width}
			imageHeight={this.props._height}>
<Image style={{width:this.props._width, height:this.props._height}}
			source={{uri }}/>
</ImageZoom>
		)
	}
}

export default PinchPanZoomImage
