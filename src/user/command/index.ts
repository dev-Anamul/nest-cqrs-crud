import { CreateUserHandler } from './create-user/create-user.handler';
import { RemoveUserHandler } from './remove-user/remove-user.handler';
import { UserUpdateHandler } from './update-user/update-user.handler';

export const userCommandsManager = [
  CreateUserHandler,
  RemoveUserHandler,
  UserUpdateHandler,
];
