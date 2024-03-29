import React from 'react'

export default function Loading() {
  return (
    <div style={{
        position: "fixed",
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        zIndex: 1,
        fontFamily: 'Helvetica',
        backgroundColor: 'white',

    }}>
        {/* el primer corteche detecta que es js, e, segundo que es amarillo indica que es un objeto */}

        
        <i className='fa fa-spinner fa-spin fa-6x' style={{
            color: 'slateblue',
            position: 'absolute',
            top: 'calc(50% - 50px)',
            left: 'calc(50% - 50px)'
        }}></i>
    </div>
  )
}
