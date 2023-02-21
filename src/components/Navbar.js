import React from 'react'
import { Anchor } from 'antd';

function Navbar() {
  return (
    <div>
      <div style={{ padding: '20px' }}>
        <Anchor
          direction="horizontal"
          items={[
            {
              key: 'home',
              href: '/',
              title: 'Home',
            },
            {
              key: 'statistics',
              href: '/statistics',
              title: 'Statistics',
            },
            {
              key: 'overview',
              href: '/overview',
              title: 'Overview',
            },
          ]}
        />
      </div>
      <div>
        <div
          id="part-1"
          style={{
            width: '100vw',
            height: '100vh',
            textAlign: 'center',
            background: 'rgba(0,255,0,0.02)',
          }}
        />
        <div
          id="part-2"
          style={{
            width: '100vw',
            height: '100vh',
            textAlign: 'center',
            background: 'rgba(0,0,255,0.02)',
          }}
        />
        <div
          id="part-3"
          style={{ width: '100vw', height: '100vh', textAlign: 'center', background: '#FFFBE9' }}
        />
      </div>
    </div>
  )
}

export default Navbar
