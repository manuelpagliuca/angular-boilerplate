import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-source-code',
  templateUrl: './source-code.component.html',
  styleUrls: ['./source-code.component.scss']
})
export class SourceCodeComponent implements OnInit {
  @Input() sources: Array<string> = [];
  htmlSource: any;
  tsSource: any;
  showCode: boolean = true;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    if (this.sources) {
      this.httpClient.get('/app/' + this.sources[0], { responseType: 'text' })
        .subscribe((data) => { this.htmlSource = data; });

      this.httpClient.get('/app/' + this.sources[1], { responseType: 'text' })
        .subscribe((data) => { this.tsSource = data; });
    }
  }

  showContent() {
    this.showCode = !this.showCode;
  }
}