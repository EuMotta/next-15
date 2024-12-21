import { Suspense } from 'react';

import UsersList from './user-list';

const Page = () => {
  return (
    <>
      <Suspense fallback={<div>Carregando</div>}>
        <UsersList />
      </Suspense>
    </>
  );
};

export default Page;
