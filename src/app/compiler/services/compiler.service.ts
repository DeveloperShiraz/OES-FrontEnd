import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompilerService {

  URL = "http://localhost:8080/"
  constructor(private http:HttpClient) { }

  compileJava(source){
    return this.http.post(this.URL+"compilejava",source);
  }

  compilePython(source){
    return this.http.post(this.URL+"compilepython",source);
  }

  compileCPP(source){
    return this.http.post(this.URL+"cppcompiler",source);
  }
}
