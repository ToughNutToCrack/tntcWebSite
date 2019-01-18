import React from 'react';
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
    fullpage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF'
    }
})

function Page(props) {
    return (
        <div className={ css(styles.fullpage) }>
            {props.children}
        </div>
    );
  }

export default Page