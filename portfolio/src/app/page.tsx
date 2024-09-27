// app/page.tsx (or pages/index.tsx)
import React from 'react';
import UserDetail from './Components/userdetail';
import WhatIDo from './Components/Whatido';

const HomePage: React.FC = () => {
  return (
    <div>
      <UserDetail/>
      <WhatIDo/>
    </div>
  );
};

export default HomePage;
