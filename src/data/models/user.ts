export interface UserProps {
    id?: string;
    name: string;
    email: string;
    password: string;
    code: string;
    userTypeId: string;
    createdAt: Date;
    updateAt?: Date;
  }
  
  export class User {
    private props: UserProps;
  
    constructor(props: UserProps) {
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
  
    get password(): string {
      return this.props.password;
    }
  
    set password(value: string) {
      this.props.password = value;
    }
  
    get code(): string {
      return this.props.code;
    }
  
    set code(value: string) {
      this.props.code = value;
    }
  
    get userTypeId(): string {
      return this.props.userTypeId;
    }
  
    set userTypeId(value: string) {
      this.props.userTypeId = value;
    }
  
    get createdAt(): Date {
      return this.props.createdAt;
    }
  
    set createdAt(value: Date) {
      this.props.createdAt = value;
    }
  
    get updatedAt(): Date | undefined {
      return this.props.updateAt;
    }
  
    set updatedAt(value: Date) {
      this.props.updateAt = value;
    }
  }
  