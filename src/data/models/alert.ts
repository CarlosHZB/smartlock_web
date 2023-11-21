import { Classroom, convertJsonToClassroom } from './classroom';

export interface AlertsProps {
  id: string;
  classroom: Classroom;
  message: string;
  createdAt: Date;
}

export class Alerts {
  private props: AlertsProps;

  constructor(props: AlertsProps) {
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

  public get classroom(): Classroom {
    return this.props.classroom;
  }

  public set classroom(classroom: Classroom) {
    this.props.classroom = classroom;
  }

  public get message(): string {
    return this.props.message;
  }

  public set message(message: string) {
    this.props.message = message;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public set createdAt(createdAt: Date) {
    this.props.createdAt = createdAt;
  }
}

export function convertJsonToAlert(jsonData: any): Alerts {
    const alertProps: AlertsProps = {
      id: jsonData.id,
      message: jsonData.message,
      createdAt: jsonData.createdAt,
      classroom: convertJsonToClassroom(jsonData.classroom)
    };
  
    return new Alerts(alertProps);
  }