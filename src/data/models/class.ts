import { Classroom, convertJsonToClassroom } from './classroom';
import { Teacher, convertJsonToTeacher } from './teacher';

export interface ClassProps {
    id: string;
    subject: string;
    name: string;
    dayOfTheWeek: number;
    initialDay: Date;
    endDay: Date;
    initialTimeClass: Date;
    endTimeClass: Date;
    teacher: Teacher | null;
    classroom?: Classroom;
}

export class Class {
    private props: ClassProps;

    constructor(props: ClassProps) {
        this.props = props;
    }

    public get id(): string {
        return this.props.id;
    }

    public set id(id: string) {
        this.props.id = id;
    }

    public get subject(): string {
        return this.props.subject;
    }

    public set subject(subject: string) {
        this.props.subject = subject;
    }

    public get name(): string {
        return this.props.name;
    }

    public set name(name: string) {
        this.props.name = name;
    }

    public get dayOfTheWeek(): number {
        return this.props.dayOfTheWeek;
    }

    public set dayOfTheWeek(dayOfTheWeek: number) {
        this.props.dayOfTheWeek = dayOfTheWeek;
    }

    public get initialDay(): Date {
        return this.props.initialDay;
    }

    public set initialDay(initialDay: Date) {
        this.props.initialDay = initialDay;
    }

    public get endDay(): Date {
        return this.props.endDay;
    }

    public set endDay(endDay: Date) {
        this.props.endDay = endDay;
    }

    public get initialTimeClass(): Date {
        return this.props.initialTimeClass;
    }

    public set initialTimeClass(initialTimeClass: Date) {
        this.props.initialTimeClass = initialTimeClass;
    }

    public get endTimeClass(): Date {
        return this.props.endTimeClass;
    }

    public set endTimeClass(endTimeClass: Date) {
        this.props.endTimeClass = endTimeClass;
    }

    public get teacher(): Teacher | null {
        return this.props.teacher;
    }

    public set teacher(teacher: Teacher | null) {
        this.props.teacher = teacher;
    }

    public get classroom(): Classroom | undefined {
        return this.props.classroom;
    }

    public set classroom(classroom: Classroom | undefined) {
        this.props.classroom = classroom;
    }
}

export function convertJsonToClass(jsonData: any): Class {
    const classProps: ClassProps = {
        id: jsonData.id,
        subject: jsonData.subject,
        name: jsonData.name,
        dayOfTheWeek: jsonData.dayOfTheWeek,
        initialDay: new Date(jsonData.initialDay), // Converta para um objeto Date
        endDay: new Date(jsonData.endDay), // Converta para um objeto Date
        initialTimeClass: new Date(jsonData.initialTimeClass), // Converta para um objeto Date
        endTimeClass: new Date(jsonData.endTimeClass), // Converta para um objeto Date
        teacher: convertJsonToTeacher(jsonData.teacher), // Suponho que você tenha uma estrutura de dados adequada para o professor
        classroom: convertJsonToClassroom(jsonData.classroom), // Suponho que você tenha uma estrutura de dados adequada para a sala de aula
    };

    return new Class(classProps);
}