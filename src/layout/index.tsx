import React from "react";
import Page from '@/pages';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { staticHomeAppRoute } from './routers/home';

const MainLayout: FC = () => {
  console.log('MainLayout');
  return (
    <div>
      <div className="flex">
        <h1>Hello World</h1>

        <Link to={'/hello'}>Go Hello</Link>
        <Link to={'/about'}>Go About</Link>
        <Link to={'/count'}>Go About</Link>

        <Page AppRoute={staticHomeAppRoute} />
      </div>
    </div>
  );
};

export default MainLayout;
