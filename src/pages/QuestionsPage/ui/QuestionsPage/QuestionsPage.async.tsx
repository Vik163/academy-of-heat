import { FC, lazy } from 'react';
import { QuestionsPageProps } from './QuestionsPage';

export const QuestionsPageAsync = lazy<FC<QuestionsPageProps>>(() => import('./QuestionsPage'));
