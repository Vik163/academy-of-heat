import React, { memo, useState } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { FlexJustify } from '@/shared/ui/Stack/Flex';
import { Header } from '@/widgets/Header';
import { Navbar } from '@/widgets/Navbar';
import { AppRouter } from './providers/router';
import { Footer } from '@/widgets/Footer';

const App = memo(() => {
   const [openNavMobile, setOpenNavMobile] = useState(false);

   const onToggle = () => {
      setOpenNavMobile((prev) => !prev);
   };

   return (
      <VStack justify={FlexJustify.CENTER} className={classNames('app', {}, ['app_colors'])}>
         <Header openNavMobile={openNavMobile} onNavMobile={onToggle} />
         <Navbar openNavMobile={openNavMobile} />
         <main className='main'>
            <AppRouter />
         </main>
         <Footer />
      </VStack>
   );
});

export default App;
