import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paragraphCaptial',
})
export class ParagraphCaptialPipe implements PipeTransform {
  transform(value: string): string {
    const trimmed = value.trim();
    return `${trimmed[0].toUpperCase()}${trimmed.slice(1).toLowerCase()}${
      trimmed[trimmed.length - 1] === '.' ? '' : '.'
    }`;
  }
}
