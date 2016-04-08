
import React, { Component } from 'react'
import { Renderer, Camera, Scene } from '../src'
import MyCube from './MyCube'


// extened threejs cube-rotating example
// http://threejs.org/docs/index.html#Manual/Introduction/Creating_a_scene
export default class Example extends Component {

  constructor (...args) {
    console.log('Example construct')
    super(...args)
    this.animate = this.animate.bind(this)

    this.rendererSize = {
      width: window.innerWidth,
      height: window.innerHeight,
    }

    this.state = {
      position: { x: 0, y: 0 },
      rotation: { x: 0, y: 0 },
    }
  }

  componentDidMount () {
    console.log('Example didMount')
    this.animate()
  }

  // custom/example animation
  // rotating the cube
  animate () {
    requestAnimationFrame(this.animate)
    const { rotation } = this.state
    this.setState({
      rotation: {
        x: rotation.x + 0.1,
        y: rotation.y + 0.1,
      },
    })
  }

  render () {
    // console.log('Example render')
    const { rendererSize } = this
    const { position, rotation } = this.state
    return (<div>
      <Renderer size={rendererSize}>
        <Camera position={{ z: 5 }} />
        <Scene>
          <MyCube color={0x00ff00} position={position} rotation={rotation}>
            <MyCube color={0xff0000} position={{ y: 2 }} />
            <MyCube color={0x0000ff} position={{ z: 3 }} />
          </MyCube>
        </Scene>
      </Renderer>
    </div>)
  }
}
