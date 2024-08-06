export enum AppRoutes {
   CATALOG = 'katalog',
   PRODUCT = 'product',
   CELLARS = 'pogreba',
   ABOUT = 'o-kompanii',
   RESULTS_SAWC = 'result-sout',
   QUESTIONS = 'vopros-otvet',
   CONTACTS = 'kontakty',
   MONTAGE_CAISSON = 'montazh-kessona',
   ARRANGEMENT_WELLS = 'obustrojstvo-skvazhin',
   MAIN = 'main',

   NOT_FOUND = 'not_found',
}

export const RoutePath = {
   [AppRoutes.MAIN]: '/',
   [AppRoutes.CONTACTS]: '/kontakty',
   [AppRoutes.ABOUT]: '/o-kompanii',
   [AppRoutes.CATALOG]: '/katalog',
   [AppRoutes.RESULTS_SAWC]: '/result-sout',
   [AppRoutes.PRODUCT]: '/product',
   [AppRoutes.CELLARS]: '/pogreba',
   [AppRoutes.QUESTIONS]: '/vopros-otvet',
   [AppRoutes.ARRANGEMENT_WELLS]: '/obustrojstvo-skvazhin',
   [AppRoutes.MONTAGE_CAISSON]: '/montazh-kessona',
   // последний
   [AppRoutes.NOT_FOUND]: '*',
};

export const getRouteMain = () => '/';
export const getRouteContacts = () => '/kontakty';
export const getRouteActions = () => '/actions';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteCatalog = () => '/katalog';
export const getRouteResultsSAWC = () => '/result-sout';
export const getRouteAbout = () => '/o-kompanii';
export const getRouteBasket = () => '/basket';
export const getRouteOrder = () => '/order';
export const getRouteProduct = (id?: string) => `/product/${id}`;
export const getRouteCellars = () => '/pogreba';
export const getRouteQuestions = () => '/vopros-otvet';
export const getRouteMontageCaisson = () => '/montazh-kessona';
export const getRouteArrangementWells = () => '/obustrojstvo-skvazhin';
export const getRouteNotFound = () => '*';

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
   [getRouteMain()]: AppRoutes.MAIN,
   [getRouteContacts()]: AppRoutes.CONTACTS,
   [getRouteCatalog()]: AppRoutes.CATALOG,
   [getRouteResultsSAWC()]: AppRoutes.RESULTS_SAWC,
   [getRouteAbout()]: AppRoutes.ABOUT,
   [getRouteProduct()]: AppRoutes.PRODUCT,
   [getRouteCellars()]: AppRoutes.CELLARS,
   [getRouteQuestions()]: AppRoutes.QUESTIONS,
   [getRouteMontageCaisson()]: AppRoutes.MONTAGE_CAISSON,
   [getRouteArrangementWells()]: AppRoutes.ARRANGEMENT_WELLS,
   [getRouteNotFound()]: AppRoutes.NOT_FOUND,
};
