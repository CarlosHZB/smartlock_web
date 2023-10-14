import { Skeleton } from '@mui/material';
import React from 'react';
import { RoomsCards, WrapRooms } from '../../styles/Rooms';



const LoadingBlocksSkeleton: React.FC = () => {
    return (
        <RoomsCards style={{paddingBottom: '4px'}}>
            <Skeleton style={{margin: '1rem 2rem'}} variant="rounded" width={250} height={80} />
            <Skeleton style={{marginLeft: '2rem'}} variant="rounded" width={150} height={30} />
            <WrapRooms>
                <Skeleton style={{marginLeft: '2rem'}} variant="rounded" width={50} height={50} />
                <Skeleton style={{marginLeft: '2rem'}} variant="rounded" width={50} height={50} />
                <Skeleton style={{marginLeft: '2rem'}} variant="rounded" width={50} height={50} />
                <Skeleton style={{marginLeft: '2rem'}} variant="rounded" width={50} height={50} />
                <Skeleton style={{marginLeft: '2rem'}} variant="rounded" width={50} height={50} />
            </WrapRooms>
        </RoomsCards>
    );
};

export default LoadingBlocksSkeleton;
