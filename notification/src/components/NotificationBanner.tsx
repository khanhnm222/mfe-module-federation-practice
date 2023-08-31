import React from 'react'
import '../style/notification-banner.css'
import { createMountComponent } from '../utils/mountComponent';

const NotificationBanner = ({ content = null, onClear }: any) => {
  return (
    <>
    { content ? (
      <div className='notification-banner'>
        <div className="content">
          {content}
          <span className='remove-icon' onClick={() => onClear() }>
            <i className="fa fa-times" aria-hidden="true"></i>
          </span>
        </div>
      </div>
    ) : null}
    </>
  )
}

export default (el: any, props: any) => createMountComponent(NotificationBanner, props, el);