import React from 'react';
import { MdNotifications } from 'react-icons/md';
import {
    Container,
    Badge,
    NotificationList,
    Scroll,
    Notification,
} from './styles';

export default function Notifications() {
    return (
        <Container>
            <Badge hasUnread>
                <MdNotifications color="#7159c1" size={20} />
            </Badge>

            <NotificationList>
                <Scroll>
                    <Notification unread>
                        <p>Um novo agendamento foi concluído</p>
                        <time>há 1 dia</time>
                        <button type="button">Marcar como lido</button>
                    </Notification>
                    <Notification>
                        <p>Um novo agendamento foi concluído</p>
                        <time>há 1 dia</time>
                        <button type="button">Marcar como lido</button>
                    </Notification>
                    <Notification>
                        <p>Um novo agendamento foi concluído</p>
                        <time>há 1 dia</time>
                        <button type="button">Marcar como lido</button>
                    </Notification>
                    <Notification>
                        <p>Um novo agendamento foi concluído</p>
                        <time>há 1 dia</time>
                        <button type="button">Marcar como lido</button>
                    </Notification>
                    <Notification>
                        <p>Um novo agendamento foi concluído</p>
                        <time>há 1 dia</time>
                        <button type="button">Marcar como lido</button>
                    </Notification>
                    <Notification>
                        <p>Um novo agendamento foi concluído</p>
                        <time>há 1 dia</time>
                        <button type="button">Marcar como lido</button>
                    </Notification>
                </Scroll>
            </NotificationList>
        </Container>
    );
}
