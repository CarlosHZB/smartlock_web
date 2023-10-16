export function WeekDay(weekDay: number) {
    const day = weekDay;

    switch (day) {
        case 0:
            return 'Domingo';
        case 1:
            return 'Segunda-feira';
        case 2:
            return 'Terça-feira';
        case 3:
            return 'Quarta-feira';
        case 4:
            return 'Quinta-feira';
        case 5:
            return 'Sexta-feira';
        case 6:
            return 'Sábado';
        default:
            return 'Dia Inválido';
    }
}

export function weekDayToNumber(weekDayString: string): number {
    switch (weekDayString.toLowerCase()) {
        case 'domingo':
            return 0;
        case 'segunda-feira':
            return 1;
        case 'terça-feira':
            return 2;
        case 'quarta-feira':
            return 3;
        case 'quinta-feira':
            return 4;
        case 'sexta-feira':
            return 5;
        case 'sábado':
            return 6;
        default:
            return -1; // Retorna -1 para representar um dia inválido ou desconhecido
    }
}

export function formatDateToDDMMYYYY(date: Date) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}

export function formatStringToISOString(date: string): string {

    // Criar um objeto de data a partir da string
    const endDate = new Date(date);

    // Formatar a data no formato desejado
    return endDate.toISOString();
}

export const daysOfWeek = [
    'Segunda-Feira',
    'Terça-Feira',
    'Quarta-Feira',
    'Quinta-Feira',
    'Sexta-Feira',
    'Sábado',
    'Domingo',
]