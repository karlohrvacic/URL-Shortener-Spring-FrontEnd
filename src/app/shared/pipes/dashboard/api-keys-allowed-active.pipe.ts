import { Pipe, PipeTransform } from '@angular/core';
import {ApiKey} from "../../models/ApiKey";

@Pipe({
  name: 'apiKeysAllowedActive'
})
export class ApiKeysAllowedActivePipe implements PipeTransform {

  transform(apiKeys: ApiKey[]): Number {
    return apiKeys.filter((e) => e.active).length;
  }

}
