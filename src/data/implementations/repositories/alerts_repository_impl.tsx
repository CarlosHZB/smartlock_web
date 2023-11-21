import { Alerts, convertJsonToAlert } from "../../models/alert";
import AlertsRepository from "../../repositories/alerts_repository";
import { ApiContextType } from "../../services/api_provider";

export class AlertsRepositoryImpl implements AlertsRepository {
    private api: ApiContextType;

    constructor(provider: ApiContextType) {
        this.api = provider;
    }

    async getAllAlerts(): Promise<Alerts[]> {
        try {
            const response = await this.api.get(`/alerts`);
            const jsonData = response.data;

            if (Array.isArray(jsonData)) {
                // console.log(jsonData)
                // Mapear o JSON para instâncias da classe Alerts
                const alerts = jsonData.map((alertData: any) =>
                    convertJsonToAlert(alertData)
                );

                return alerts;
            } else {
                throw new Error('Resposta da API não é um array JSON.');
            }
        } catch (error) {
            console.error(`Erro ao buscar alertas:`, error);
            throw error;
        }
    }
}