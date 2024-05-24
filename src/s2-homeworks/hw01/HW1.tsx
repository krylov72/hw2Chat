import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'
import { Container } from '@mui/material'

/*
* 1 - описать тип MessageType
* 2 - описать тип MessagePropsType в файле Message.tsx
* 3 - в файле Message.tsx отобразить приходящие данные
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
* 5 - сделать стили в соответствии с дизайном
* */

// нужно создать правильный тип вместо any

export type UserType = {
    avatar:string
    name:string
}

export type MessageTextType = {
    text:string
    time:string
}

export type MessageType = {
    id:number
    user:UserType
    message:MessageTextType
}

// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: avatar, // можно менять
        name: 'Denis',  // можно менять
    },
    message: {
        text: 'Hello, how are you?', // можно менять
        time: '09:00', // можно менять1
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: avatar, // можно менять
        name: 'Ivan', // можно менять
    },
    message: {
        text: 'I\'m fine, are you? What you want doing today?', // можно менять
        time: '09:01', // можно менять
    },
}

const HW1 = () => {
    return (
        <Container>
            <div id={'hw1'}>
            <div className={s2.hwTitle}>Homework #1</div>
            <div className={s2.hw}>
                {/*проверка отображения (не менять)*/}
                <div>
                    <Message message={message0} />
                    <FriendMessage message={friendMessage0} />
                </div>

                {/*для автоматической проверки дз (не менять)*/}
                <MessageSender M={Message} />
            </div>
        </div>
        </Container>
        
    )
}

export default HW1
