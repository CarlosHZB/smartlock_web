import { Classroom, convertJsonToClassroom } from './classroom';

export interface LockProps {
  id: string;
  name: string;
  state: boolean;
  classroom: Classroom | undefined;
}

export class Lock {
  private props: LockProps;

  constructor(props: LockProps) {
    this.props = {
      ...props,
    };
  }

  public get id(): string {
    return this.props.id;
  }

  public set id(id: string) {
    this.props.id = id;
  }

  public get name(): string {
    return this.props.name;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public get state(): boolean {
    return this.props.state;
  }

  public set state(state: boolean) {
    this.props.state = state;
  }

  public get classroom(): Classroom | undefined {
    return this.props.classroom;
  }

  public set classroom(classroom: Classroom | undefined) {
    this.props.classroom = classroom;
  }

}

export function convertJsonToLock(jsonData: any): Lock {
  const lockProps: LockProps = {
    id: jsonData.id,
    name: jsonData.name,
    state: jsonData.state,
    classroom: convertJsonToClassroom(jsonData.classroom),
  };

  return new Lock(lockProps);
}
