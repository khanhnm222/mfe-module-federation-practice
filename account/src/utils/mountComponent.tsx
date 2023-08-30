import React from 'react';
import { render } from 'react-dom';

export const createMountComponent = (Component: any, props: any, el: any) => {
  return render(<Component {...props} />, el);
};
