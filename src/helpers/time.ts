export function formatDateToHHMM(date: Date) {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${hours}:${minutes}`;
}

export function convertTimeToISOString(time: string): string {
    // Crie um objeto de data com a data base "1970-01-01"
    const baseDate = new Date("1970-01-01");

    // Extraia as horas e minutos de initialTime
    const [hours, minutes] = time.split(':').map(Number);

    // Configure a hora no objeto de data base
    baseDate.setHours(hours);
    baseDate.setMinutes(minutes);

    // Formate a data resultante no formato desejado
    return baseDate.toISOString();
}