import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args: any): any {



    if (args === '' || args.length < 1) return value;
    const resultPosts = [];
    for (const Libros of value) {
      if (Libros.title.toLowerCase().indexOf(args.toLowerCase()) > -1) {
        resultPosts.push(Libros);
      };
    };
    return resultPosts;


  }


}
