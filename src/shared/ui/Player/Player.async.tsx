import { FC, lazy } from 'react';
import { PlayerProps } from './Player';

export const PlayerAsync = lazy<FC<PlayerProps>>(() => import('./Player'));
