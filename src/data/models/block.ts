import { Classroom } from "./classroom";

export interface BlockProps {
    name: string;
    classrooms: Classroom[]
}


export class Block {
    private props: BlockProps;

    constructor(props: BlockProps) {
        this.props = props;
    }

    // Getter for 'name' property
    get name(): string {
        return this.props.name;
    }

    // Setter for 'name' property
    set name(name: string) {
        this.props.name = name;
    }

    // Getter for 'classrooms' property
    get classrooms(): Classroom[] {
        return this.props.classrooms;
    }

    // Setter for 'classrooms' property
    set classrooms(classrooms: Classroom[]) {
        this.props.classrooms = classrooms;
    }
}