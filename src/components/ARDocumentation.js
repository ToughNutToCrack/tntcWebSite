import React, { Component } from 'react'
import { css, StyleSheet } from 'aphrodite'
import ImageZoom from 'react-medium-image-zoom'

import img1 from '../assets/images/arwt/1.PNG'
import img2 from '../assets/images/arwt/2.PNG'
import img3 from '../assets/images/arwt/3.PNG'
import img4 from '../assets/images/arwt/4.PNG'
import img5 from '../assets/images/arwt/5.PNG'
import img6 from '../assets/images/arwt/6.PNG'
import img7 from '../assets/images/arwt/7.PNG'
import img8 from '../assets/images/arwt/8.PNG'
import img9 from '../assets/images/arwt/9.PNG'
import img10 from '../assets/images/arwt/10.PNG'
import img11 from '../assets/images/arwt/11.PNG'
import img12 from '../assets/images/arwt/12.PNG'

const name = 'ARWT'

const styles = StyleSheet.create({
    wrapper: {
        fontFamily: '"HeadLand One", serif',
        height: '100%',
        width: '60%',
        fontSize: '2vw',
        display: 'inline-table'
    },
    responsiveFont: {
        fontSize: '2vw',
        '@media screen and (min-width: 1200px) and (orientation: landscape)': {
            fontSize: '1vw',
        },
        '@media screen and (min-width: 0px) and (max-width: 880px)': {
            fontSize: '1.5vh'
        },
        '@media screen and (min-height: 332px) and (max-height: 565px)': {
            fontSize: '1.5vh'
        },
        '@media screen and (min-height: 0px) and (max-height: 331px)': {
            fontSize: '2.5vh'
        }
    },
    normal: {
        fontFamily: '"Patua One", regular',
        fontSize: '2vW',
        '@media only screen and (max-width: 880px)': {
            fontSize: '3vw',
        },
        '@media only screen and (max-width: 440px)': {
            fontSize: '4vw',
        },
        '@media only screen and (max-height: 300px)': {
            fontSize: '4vh',
        },
    },
    imageMargin5: {
        marginBottom: '5%'     
    },
    imageM: {
        width: '50%',
        '@media only screen and (max-width: 1300px)': {
            width: '80%',
        },
        '@media only screen and (max-width: 880px)': {
            width: '100%',
        },
    },
    imageL: {
        width: '80%',
        '@media only screen and (max-width: 880px)': {
            width: '100%',
        },
    },
    imageS: {
        width: '30%',
        '@media only screen and (max-width: 1200px)': {
            width: '80%',
        },
    },
    textOrange: {
        color: '#FF926B'
    },
    center: {
        display: 'inline-block',
        verticalAlign: 'middle',
        margin: 'auto'
    },
    leftText: {
        textAlign: 'left'
    }

})

class ARDocumentation extends Component {

    render() {
        return (
            <div className={ css(styles.wrapper, styles.responsiveFont, styles.leftText) }>

                <br></br>
                <p><b>Download</b></p>
                <p><a href="https://github.com/ToughNutToCrack/ARWT" target="_blank">{name} public GitHub repository</a></p>
                {/* <p><a href="https://github.com/ToughNutToCrack" target="_blank">{name} Unity package</a></p> */}
                {/* <p><a href="https://github.com/ToughNutToCrack" target="_blank">{name} Crash Bandicoot full project</a></p> */}
                <br></br>

                <p><b>Unity Version</b></p>
                <p>Actually we’re developing {name} using <b>Unity 2019.4 LTS</b>, since we've not tested previous versions we highly recommend using Unity from this version.</p>
                <p>Along with Unity, you need to install the WebGL build module.</p>
                <p>Be sure to set the target platform to WebGL.</p>
                <ImageZoom
                   image={ {
                       src: img1,
                       alt: '',
                       className: css(styles.imageM, styles.imageMargin5)
                   } }
                   zoomImage={ {
                       src: img1,
                       alt: ''
                   } }
                />

                <p><b>What's inside</b></p>
                <p>Along with all the core scripts of the library, we include basic demo scenes to get you started easily. <br></br> In the actual version you find: </p>

                <p><b>Marker recognition</b></p>
                <p>A basic marker recognition scene is composed by;</p>
                <p><b>Camera</b></p>
                <ul>
                    <li>The Camera gameobject <b>must</b> be called “Main Camera”</li>
                    <li>Clear Flags: <b>Depth only</b> or <b>Solid color with alpha at 0</b></li>
                    <li><b>“Camera Controller”</b> component attached</li>
                    <li>To add the camera right-click in the Hierarchy and select <b>{name} → WebARCamera</b></li>
                </ul>
                <ImageZoom
                   image={ {
                       src: img2,
                       alt: '',
                       className: css(styles.imageL, styles.imageMargin5)
                   } }
                   zoomImage={ {
                       src: img2,
                       alt: ''
                   } }
                />

                <p><b>Detection Manager</b></p>
                This manager receives tracking information and emits three key events.
                <ul>
                    <li><b>onMarkerDetected(m)</b></li>
                    <li><b>onMarkerVisible(m)</b></li>
                    <li><b>onMarkerLost(m)</b></li>
                    m is an object of type MarkerInfo and contains the name, visibility state, position, rotation, and scale of the tracked marker.
                </ul>
                <ImageZoom
                   image={ {
                       src: img3,
                       alt: '',
                       className: css(styles.imageS, styles.imageMargin5)
                   } }
                   zoomImage={ {
                       src: img3,
                       alt: ''
                   } }
                />

                <p><b>Controller</b></p>
                A controller is a component that subscribes to the DetectionManager’s events and handles the state of the object or objects that we want on our AR scene.
                {name} provides two examples of controllers; A <b>GenericController</b> and a <b>MultiMarkerController</b>.
                <br></br><br></br>
                <ul>
                    <li><b>GenericController</b></li>
                </ul>
                <ImageZoom
                   image={ {
                       src: img4,
                       alt: '',
                       className: css(styles.imageS)
                   } }
                   zoomImage={ {
                       src: img4,
                       alt: ''
                   } }
                />
                <p><i>MarkerToListen:</i> A string variable that needs the name of the marker we want to work and search for. The marker’s name is the name of the .patt file that you can find inside “Resources → Markers”</p>
                <p><i>Child:</i> Drag here the parent Gameobject of the objects you want to use on the marker. This is the gameobject that will be placed on top of the marker, rotated, scaled, and activated/deactivated according to the tracking events.</p>
                <ImageZoom
                   image={ {
                       src: img5,
                       alt: '',
                       className: css(styles.imageS)
                   } }
                   zoomImage={ {
                       src: img5,
                       alt: ''
                   } }
                />
                <p>Disable the child before building the project. This action prevents seeing the objects in the scene before tracking occurs.</p>

                <p><i>UpdateSpeed:</i> Each frame that a marker is tracked, the Child object position is updated. To avoid the scattering that is caused by positioning the object directly of the tracked marker position, we lerp between the tracked positions. UpdateSpeed represents the speed of the transition.</p>
                <p><i>Position Threshold:</i> Represents the minimum distance that is necessary to surpass to update the transform of the child object. Each frame {name} receives a different transform of the tracked marker, with this setting you can exclude minimum variations avoiding micro-movements.</p>
                
                <br></br>
                <ul>
                    <li><b>MultiMarkerController</b></li>
                </ul>
                <ImageZoom
                   image={ {
                       src: img6,
                       alt: '',
                       className: css(styles.imageS)
                   } }
                   zoomImage={ {
                       src: img6,
                       alt: ''
                   } }
                />
                <p>Similar to the GenericController but allows many markers for the same child object.</p>
                <p>In the same scene, <b>you can have more than 1 controller</b>. Check the “ARMultipleMarker” example scene for more.</p>
                
                <br></br>
                <p><b>Creating a marker</b></p>
                <ImageZoom
                   image={ {
                       src: img7,
                       alt: '',
                       className: css(styles.imageM)
                   } }
                   zoomImage={ {
                       src: img7,
                       alt: ''
                   } }
                />
                <p>{name} has the possibility to create a marker directly inside Unity <i>({name} → MarkerGenerator)</i>.</p>
                <ImageZoom
                   image={ {
                       src: img8,
                       alt: '',
                       className: css(styles.imageM)
                   } }
                   zoomImage={ {
                       src: img8,
                       alt: ''
                   } }
                />
                <p><i>Marker Image:</i> Insert a square image. This will be the center of the marker.</p>
                <p><i>Marker Name:</i> The name of the generated .patt name. This is the name that you need to specify in the controller component.</p>
                <p><i>Image Size:</i> Size of the generated image. 512px is default.</p>
                <p><i>Border percentage:</i> This is the dimension of the border that will be added to the chosen image. We highly raccomend avoiding dimensions smaller than 50. Using lower dimensions can make the marker unrecognizable.</p>
                <p><i>Border Color:</i> Use very dark colors.</p>
                <p>Click generate to output a new image inside <i>Resources → Images</i> and a .patt file inside <i>Resources → Markers</i></p>
                <p>To generate a marker you can also use <a href="https://jeromeetienne.github.io/AR.js/three.js/examples/marker-training/examples/generator.html" target="_blank">the official marker trainer.</a></p>
                <p>Once created, drag the .patt file inside the <i>Resources → Markers</i> and add the name of the marker in your controllers.</p>

                <br></br>
                <p><b>Example scenes</b></p>
                <ImageZoom
                   image={ {
                       src: img9,
                       alt: '',
                       className: css(styles.imageM)
                   } }
                   zoomImage={ {
                       src: img9,
                       alt: ''
                   } }
                />
                <p><i>ARMarker Rotate and Scale</i></p>
                A ready-to-build scene that provides an example of basic interactions. Check the <i>InteractionController</i> script for more. 
                <p><i>ARMarker Simple Button</i></p>
                A ready-to-build scene with an example of UI button.
                <p><i>ARMarker Multiple Marker</i></p>
                A ready-to-build scene with a MultipleMarkerController and a GenericController in the same scene.

                <br></br><br></br><br></br>
                <p><b>Build</b></p>
                <p>When you build your WebGL project, you can choose a template from <i>Project Settings → Resolution</i> and <i>Presentation → WebGL Template</i>.</p>
                <p>{name} provides a basic WebAR template, ready for your customization. Be sure to select it before building.</p>
                <ImageZoom
                   image={ {
                       src: img10,
                       alt: '',
                       className: css(styles.imageM)
                   } }
                   zoomImage={ {
                       src: img10,
                       alt: ''
                   } }
                />
                <p>To run a server on localhost and test your project from a mobile device there are many different solutions, we usually use <a href="https://www.npmjs.com/package/live-server-https" target="_blank">live-server-https</a>. 
                To set up your machine, install npm, and install the package, we remind you to the official guides.</p>

                <br></br>
                <p><b>Current limitations</b></p>

                <p><b>UI - Canvas elements responsiveness</b></p>
                <p>{name} reworks how Canvas scales across multiple resolutions. On a Canvas, remove the default <i>Canvas Scaler</i> component and add our custom <i>UI Scaler</i> component.</p>
                <ImageZoom
                   image={ {
                       src: img11,
                       alt: '',
                       className: css(styles.imageS)
                   } }
                   zoomImage={ {
                       src: img11,
                       alt: ''
                   } }
                />
                <p>The first child of the Canvas <b>must be a panel</b>, expanded, and anchored to the center. Drag the child panel inside the Panel property of the UI Scaler component.</p>
                <p>At the moment the panel adapts correctly to the end resolution but children don’t scale up or down. This means that all the elements are displayed in the correct position but don’t increase or decrease their size according to resolution. <i>(Feature in the roadmap, TBD)</i></p>
                <p>To avoid errors, use {name} built-in canvas</p>
                <ImageZoom
                   image={ {
                       src: img12,
                       alt: '',
                       className: css(styles.imageM)
                   } }
                   zoomImage={ {
                       src: img11,
                       alt: ''
                   } }
                />

                <p><b>Safari - VideoPlayer</b></p>
                <p>The Unity VideoPlayer component works correctly and you can set it up like in any other project. 
                    <br></br>On Chrome everything works fine.
                    <br></br>On Safari the video works but it is played in fullscreen. This means that Safari will open a different video player that covers the camera and the augmented reality. <i>(Feature in the roadmap, TBD)</i></p>

                <p><b>Unity Mobile WebGL warning</b></p>
                <p>At the moment we simply remove it. We hope that Unity will officially support this kind of build target near in the future.</p>

                <p><b><a href="https://docs.unity3d.com/Manual/webgl-browsercompatibility.html" target="_blank">Other official WebGL incompatibilities</a></b></p>

                <p><b>Send us any feedback and report to help with the development. Fork and make a pull request if you improve the library, we'll be happy to integrate your changes.</b></p>

            </div>
        )
    }
}

export default ARDocumentation
