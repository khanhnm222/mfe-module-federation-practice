import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { mountRemoteComponent } from '@/utils/loadComponent';
import globalStorage from '@/utils/loadStorage';
import SignIn from '@/components/SignIn';
import styles from './Header.module.scss';
import Nav from './Nav';
import customPostMessage from '@/utils/custom-post-message';

const Header = () => {
  const user = globalStorage.getToken();
  const navigate = useNavigate();
  const token = globalStorage.getToken();
  const notificationContentRef = useRef('');

  useEffect(() => {
    customPostMessage.on('trigger-notification', (data: any) => {
      console.log('notificationContent', notificationContentRef.current);
      notificationContentRef.current = data.message;
    });

    return customPostMessage.remove('trigger-notification', () => { return; })
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.header__top}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-5">
              <div className={styles.header__top__left}>
                <ul>
                  <li><i className="fa fa-envelope" />admin@mfe.com</li>
                  <li>Free shipping for all orders over $50</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-7">
              <div className={styles.header__top__right}>
                <div className={styles.header__top__right__social}>
                  <a href="#"><i className="fa fa-facebook" /></a>
                  <a href="#"><i className="fa fa-twitter" /></a>
                  <a href="#"><i className="fa fa-linkedin" /></a>
                  <a href="#"><i className="fa fa-pinterest-p" /></a>
                </div>
                <div className={styles.header__top__right__language}>
                  <img src="/img/language.png" alt="" />
                  <div>English</div>
                  <span className="arrow_carrot-down" />
                  <ul>
                    <li><a href="#">Spanish</a></li>
                    <li><a href="#">English</a></li>
                  </ul>
                </div>
                <SignIn />
                <div style={{width: '35px'}}>
                  {mountRemoteComponent({ module: 'notification', component: 'NotificationButton', props: {
                    eventBus: customPostMessage
                  }})}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {mountRemoteComponent({ module: 'notification', component: 'NotificationBanner', props: {
              content: notificationContentRef.current,
              onClear: () => { notificationContentRef.current = '' }
            }})}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className={styles.header__logo}>
              <Link to="/">
                <img src="/img/logo.png" alt="" />
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <Nav />
          </div>
          <div className="col-lg-3">
            <div className={styles.header__cart}>
              <ul>
                <li>
                  <a href="#"><i className="fa fa-heart" /> <span>1</span></a>
                </li>
                <li>
                  {
                    mountRemoteComponent({
                      module: 'checkout',
                      component: 'CartIcon',
                      props: {
                        navigate,
                        token
                      }
                    })
                  }
                </li>
              </ul>
              <div className={styles.header__cart__price}>
                {
                  mountRemoteComponent({
                    module: 'checkout',
                    component: 'CartPrice',
                    props: { token }
                  })
                }
              </div>
            </div>
          </div>
        </div>
        <div className={styles.hamburger__open}>
          <i className="fa fa-bars" />
        </div>
      </div>
    </header>
  );
};

export default Header;
