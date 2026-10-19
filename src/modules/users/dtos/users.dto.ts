export class CreateUserDto {
  username: string;
  email: string;
  role: string;
  sector: string;
}

export class UpdateUserDto {
  username?: string;
  email?: string;
  role?: string;
  sector?: string;
}
