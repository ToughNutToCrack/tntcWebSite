import React, { Component } from 'react'
import { css, StyleSheet } from 'aphrodite'

const styles = StyleSheet.create({
    fullpage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF'
    }
})

class Page extends Component {

    render() {
        return (
            <div className={ css(styles.fullpage) }>
                {this.props.children}
            </div>
        )
    }
}

export default Page