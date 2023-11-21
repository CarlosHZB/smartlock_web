import { Alerts } from "../models/alert";

// Interface que define os métodos que a classe AlertsRepository deve implementar
interface AlertsRepository {
    getAllAlerts(): Promise<Alerts[]>,
}

export default AlertsRepository;