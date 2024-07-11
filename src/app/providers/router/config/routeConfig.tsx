import { AboutPage } from '@/pages/AboutPage';
import { ArragementWellsPage } from '@/pages/ArragementWellsPage';
import { CatalogPage } from '@/pages/CatalogPage';
import { ContactsPage } from '@/pages/ContactsPage';
import { MainPage } from '@/pages/MainPage';
import { MontageCaissonPage } from '@/pages/MontageCaissonPage';
import { ProductPage } from '@/pages/ProductPage';
import { QuestionsPage } from '@/pages/QuestionsPage';
import { ResultsSAWC } from '@/pages/ResultsSAWC';
import {
   AppRoutes,
   getRouteMain,
   getRouteCatalog,
   getRouteAbout,
   getRouteContacts,
   getRouteProduct,
   getRouteCellars,
   getRouteQuestions,
   getRouteArrangementWells,
   getRouteMontageCaisson,
   getRouteResultsSAWC,
} from '@/shared/const/router';
import { type AppRoutesProps } from '@/shared/types/router';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
   [AppRoutes.MAIN]: {
      path: getRouteMain(),
      element: <MainPage />,
   },
   [AppRoutes.CATALOG]: {
      path: getRouteCatalog(),
      element: <CatalogPage />,
   },
   [AppRoutes.CELLARS]: {
      path: getRouteCellars(),
      element: <CatalogPage />,
   },
   [AppRoutes.ABOUT]: {
      path: getRouteAbout(),
      element: <AboutPage />,
   },
   [AppRoutes.CONTACTS]: {
      path: getRouteContacts(),
      element: <ContactsPage />,
   },
   [AppRoutes.PRODUCT]: {
      path: getRouteProduct(':id'),
      element: <ProductPage />,
   },
   [AppRoutes.QUESTIONS]: {
      path: getRouteQuestions(),
      element: <QuestionsPage />,
   },
   [AppRoutes.ARRANGEMENT_WELLS]: {
      path: getRouteArrangementWells(),
      element: <ArragementWellsPage />,
   },
   [AppRoutes.MONTAGE_CAISSON]: {
      path: getRouteMontageCaisson(),
      element: <MontageCaissonPage />,
   },
   [AppRoutes.RESULTS_SAWC]: {
      path: getRouteResultsSAWC(),
      element: <ResultsSAWC />,
   },
   // [AppRoutes.ACTIONS]: {
   //    path: getRouteActions(),
   //    element: <ActionsPage />,
   // },
   // [AppRoutes.CONTACTS]: {
   //    path: getRouteContacts(),
   //    element: <ContactsPage />,
   // },
   // [AppRoutes.PROFILE]: {
   //    path: getRouteProfile(':id'),
   //    element: <ProfilePage />,
   // },
   // [AppRoutes.BASKET]: {
   //    path: getRouteBasket(),
   //    element: <BasketPage />,
   // },
   // [AppRoutes.ORDER]: {
   //    path: getRouteOrder(),
   //    element: <OrderPage />,
   // },
   // [AppRoutes.NOT_FOUND]: {
   //    path: getRouteNotFound(),
   //    element: <NotFoundPage />,
   // },
};
