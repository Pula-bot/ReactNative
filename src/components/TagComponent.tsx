import  React, { ReactNode } from 'react';
import RowComponent from './RowComponent';

interface Props {
    icon?: ReactNode;
    tile: string;
    isFill?: boolean;
    color?: string;
}

const TagComponent = (props: Props) => {
    const { icon, tile, isFill, color } = props;

    return <RowComponent>{icon && icon}</RowComponent>
 
};

export default TagComponent;
