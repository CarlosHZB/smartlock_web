import { Teacher, convertJsonToTeacher } from './teacher';

export interface AccessProps {
    id: string;
    user: Teacher;
    code: string | null;
    accessType: string;
    openTime: Date;
    closeTime: Date;
}

export class Access {
    private props: AccessProps;

    constructor(props: AccessProps) {
        this.props = props;
    }

    public get id(): string {
        return this.props.id;
    }

    public set id(id: string) {
        this.props.id = id;
    }

    public get user(): Teacher {
        return this.props.user;
    }

    public set user(user: Teacher) {
        this.props.user = user;
    }

    public get code(): string | null {
        return this.props.code;
    }

    public set code(code: string | null) {
        this.props.code = code;
    }

    public get accessType(): string {
        return this.props.accessType;
    }

    public set accessType(accessType: string) {
        this.props.accessType = accessType;
    }

    public get openTime(): Date {
        return this.props.openTime;
    }

    public set openTime(openTime: Date) {
        this.props.openTime = openTime;
    }

    public get closeTime(): Date {
        return this.props.closeTime;
    }

    public set closeTime(closeTime: Date) {
        this.props.closeTime = closeTime;
    }
}

export function convertJsonToAccess(jsonData: any): Access {
    const accessProps: AccessProps = {
      id: jsonData.id,
      accessType: jsonData.access_type,
      openTime: new Date(jsonData.open_time),
      closeTime: new Date(jsonData.close_time),
      user: convertJsonToTeacher(jsonData.user),
      code: null
    };
  
    return new Access(accessProps);
  }
