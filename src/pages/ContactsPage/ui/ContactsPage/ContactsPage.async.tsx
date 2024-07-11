import { FC, lazy } from 'react';
import { ContactsPageProps } from './ContactsPage';

export const ContactsPageAsync = lazy<FC<ContactsPageProps>>(() => import('./ContactsPage'));
