import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tvSearch'
})
export class TvSearchPipe implements PipeTransform {

  transform(mydata:any,searchTerm:string): [] {
    if(searchTerm == undefined || searchTerm == "")
    
      return mydata;


    
    let found:any = [];

   found =  mydata.filter(data =>
      {
       return data.name.toLowerCase().includes(searchTerm.toLowerCase()) 
      
 
      });
    

      console.log(found)
   return found;
  }
}
