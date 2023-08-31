import React from 'react'
import { createMountComponent } from '../utils/mountComponent';

export interface IButtonProps {
  eventBus: any;
}

const NotificationButton = ({ eventBus }: IButtonProps): JSX.Element => {

  const handleOnclick = () => {
    eventBus.dispatch("trigger-notification", {
      serverity: "success",
      message: "No notification for a new fragment!",
    },)
  }

  return (
    <a className="icon-container" onClick={handleOnclick}>
      <i className="fa fa-bell" aria-hidden="true"></i>
      <span>1</span>
  </a>
  );
}

export default (el: any, props: IButtonProps) => createMountComponent(NotificationButton, props, el);
