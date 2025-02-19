import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filter',
    standalone: true
})

export class FilterPipe implements PipeTransform {
    transform(items: any[], property: string, value: string): any[] {
        return items.filter((item) => item[property] === value);
    }
} 