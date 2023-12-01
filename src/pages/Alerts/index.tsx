import { useAlerts } from "../../data/contexts/alerts";
import { AlertCard, AlertMessage, AlertsContainer } from "../../styles/Alerts";
import {
    TeacherContainer,
    TeacherHeader,
    TeacherTitle
} from "../../styles/Teachers";

export default function Alerts() {

    const { alerts } = useAlerts();


    return (
        <TeacherContainer>
            <TeacherHeader>
                <TeacherTitle>Alertas</TeacherTitle>
            </TeacherHeader>
            <AlertsContainer>
                {alerts.map((alert) => (
                    <AlertCard key={alert.id}>
                        <p>Alerta</p>
                        <AlertMessage>{alert.message}</AlertMessage>
                        <p>Sala: {alert.classroom.block}{alert.classroom.name}</p>
                    </AlertCard>
                ))}
            </AlertsContainer>
        </TeacherContainer>
    );
}