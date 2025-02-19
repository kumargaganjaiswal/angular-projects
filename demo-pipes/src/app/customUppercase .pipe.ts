import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: 'customUppercase',
    standalone: true
})

export class CustomUppercasePipe implements PipeTransform {
    transform(value: string) {
        return value.charAt(0).toLowerCase() + value.slice(1).toUpperCase();
    }
} 