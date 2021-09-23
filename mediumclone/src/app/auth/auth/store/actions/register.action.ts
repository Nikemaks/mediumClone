import {createAction, props} from "@ngrx/store";
import {ActionsTypes} from "../actions.types";
import {RegisterRequestInterface} from "../../shared/types/registerRequest.interface";

export const registerAction = createAction(
  ActionsTypes.REGISTER,
  props<RegisterRequestInterface>()
);
