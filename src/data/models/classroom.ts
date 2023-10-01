export interface ClassroomProps {
  id: string;
  block: string;
  name: string;
  lock?: { id: string; state: boolean; name: string };
  access: any[];
}


export class Classroom {
  private props: ClassroomProps;

  constructor(props: ClassroomProps) {
    this.props = props;
  }

  get id(): string {
    return this.props.id;
  }

  set id(value: string) {
    this.props.id = value;
  }

  get block(): string {
    return this.props.block;
  }

  set block(value: string) {
    this.props.block = value;
  }

  get name(): string {
    return this.props.name;
  }

  set name(value: string) {
    this.props.name = value;
  }

  get access(): any[] {
    return this.props.access;
  }

  set access(value: any[]) {
    this.props.access = value;
  }

  get lock(): { id: string; state: boolean; name: string } | undefined {
    return this.props.lock;
  }

  set lock(value: { id: string; state: boolean; name: string } | undefined) {
    this.props.lock = value;
  }
}

export function convertJsonToClassroom(jsonData: any): Classroom {
  const classroomProps: ClassroomProps = {
    id: jsonData.id,
    block: jsonData.block,
    name: jsonData.name,
    lock: jsonData.lock,
    access: jsonData.access,
  };

  return new Classroom(classroomProps);
}