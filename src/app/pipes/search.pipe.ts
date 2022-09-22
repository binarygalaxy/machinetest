import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(
    value: any,
    name?: string,
    company?: string,
    designation?: string
  ): any {
    if (!name && !company && !designation) {
      return value;
    }
    if (!value) {
      return null;
    }
    return value.filter(
      (row) =>
        row.name.toLocaleLowerCase().includes(name) &&
        row.company.name.toLocaleLowerCase().includes(company) &&
        row.company.designation.toLocaleLowerCase().includes(designation)
    );
  }
}
