// app/page.tsx (or pages/index.tsx)
import React from 'react';
import UserDetail from './Components/userdetail';

const HomePage: React.FC = () => {
  return (
    <div>
      <UserDetail/>
    </div>
  );
};

export default HomePage;
