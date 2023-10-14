import { Class, convertJsonToClass } from "./class";

export interface TeacherProps {
    id?: string;
    name: string;
    email: string;
    code: string;
    createdAt: Date;
    classes: Class[]
}

export class Teacher {
    private props: TeacherProps;

    constructor(props: TeacherProps) {
        this.props = props;
    }

    get id(): string | undefined {
        return this.props.id;
    }

    set id(value: string | undefined) {
        this.props.id = value;
    }

    get name(): string {
        return this.props.name;
    }

    set name(value: string) {
        this.props.name = value;
    }

    get email(): string {
        return this.props.email;
    }

    set email(value: string) {
        this.props.email = value;
    }

    get code(): string {
        return this.props.code;
    }

    set code(value: string) {
        this.props.code = value;
    }

    get createdAt(): Date {
        return this.props.createdAt;
    }

    set createdAt(value: Date) {
        this.props.createdAt = value;
    }

    get classes(): Class[] {
        return this.props.classes;
    }

    set classes(value: Class[]) {
        this.props.classes = value;
    }
}

export function convertJsonToTeacher(jsonData: any): Teacher {
    const teacherProps: TeacherProps = {
        id: jsonData.id,
        name: jsonData.name,
        email: jsonData.email,
        code: jsonData.code,
        createdAt: jsonData.created_at == null ? new Date() : new Date(jsonData.created_at),
        classes: jsonData.classes != null ? jsonData.classes.map((classData: any) => convertJsonToClass(classData)) : []
    };

    return new Teacher(teacherProps);
}

