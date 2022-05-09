import React from 'react';
import Avatar, {AvatarProps} from '@mui/material/Avatar';

export default function MyAvatar(props:AvatarProps) {
    return (
        <Avatar {...props} sx={{borderRadius: 4, width: 128, height:128, ...props.sx}}/>
    )
}