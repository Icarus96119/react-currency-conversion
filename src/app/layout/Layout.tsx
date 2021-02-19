import React from 'react';

import { Header } from './header/Header';

export const Layout = (props: React.PropsWithChildren<{}>) => {
  return (
    <section className="d-flex flex-column">
      <Header/>
      <div className="d-flex flex-grow-1">
        { props.children }
      </div>
    </section>
  );
}
