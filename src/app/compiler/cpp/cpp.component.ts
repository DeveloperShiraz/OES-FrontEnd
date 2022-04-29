import { OnInit } from "@angular/core";
import { Component, ViewChild, ElementRef } from "@angular/core";
import * as ace from "ace-builds";
import { CompilerService } from "../services/compiler.service";
@Component({
  selector: 'app-cpp',
  templateUrl: './cpp.component.html',
  styleUrls: ['./cpp.component.css']
})
export class CppComponent implements OnInit {
  defaultCode = `#include <iostream>

  int main() {
      std::cout << "I stole this code from Jagadeesh Sir. Hehehe!";
      return 0;
  }`;
  constructor(private compilerService:CompilerService) { }

  ngOnInit() {
    ace.config.set("fontSize", "16px");
    ace.config.set(
      "basePath",
      "https://unpkg.com/ace-builds@1.4.12/src-noconflict"
    );
    const aceEditor = ace.edit(this.code.nativeElement);
    const aceEditor1 = ace.edit(this.output.nativeElement);
    
    aceEditor1.session.setValue("OUTPUT:");
    aceEditor1.setReadOnly(true);
    //aceEditor.session.setValue("class Example{public static void main(string args[])");

    aceEditor.setValue(this.defaultCode);

    aceEditor.setTheme("ace/theme/twilight");
    aceEditor.session.setMode("ace/mode/c_cpp");
    // aceEditor.on("change", () => {
    //   console.log(aceEditor.getValue());
    // });
  }

  @ViewChild("code", { static: true }) private code: ElementRef<HTMLElement>;
  @ViewChild("output", { static: true }) private output: ElementRef<HTMLElement>;

  clear(){
    const code = ace.edit(this.code.nativeElement);
    const output = ace.edit(this.output.nativeElement);

    code.setValue(this.defaultCode);
    output.setValue("OUTPUT:");
  }
  run(){
    const code = ace.edit(this.code.nativeElement);
    const formData = new FormData();
    const output = ace.edit(this.output.nativeElement);
    formData.append("source",code.getValue());

    this.compilerService.compileCPP(formData).subscribe(res=>{
      output.setValue("OUTPUT:"+res['result']);
    })
  }

}
