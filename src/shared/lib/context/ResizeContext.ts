import { createContext } from 'react';
import { Devices } from '@/shared/types/devices';

export interface ResizeContextProps {
   device?: Devices;
}

export const ResizeContext = createContext<ResizeContextProps>({});
