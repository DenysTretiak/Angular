import { Component, OnInit } from '@angular/core';
import {Http, URLSearchParams, Headers, RequestOptions} from '@angular/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  apiRoot: string = "http://httpbin.org";

  constructor(private http: Http) { }

  doGET() {
    console.log("GET");
    let url = `${this.apiRoot}/get`;
    let search = new URLSearchParams();
    search.set('foo', 'moo');
    search.set('limit', '25');
    this.http.get(url, {search}).subscribe(res => console.log(res.json()));
}

  doPOST() {
    console.log("POST");
  }

  doPUT() {
    console.log("PUT");
  }

  doDELETE() {
    console.log("DELETE");
    let url = `${this.apiRoot}/delete`;
  let search = new URLSearchParams();
  search.set('foo', 'moo');
  search.set('limit', '25');
  this.http.delete(url, {search}).subscribe(res => console.log(res.text()));
  }

  doGETAsPromise() {
    console.log("GET AS PROMISE");
    let url = `${this.apiRoot}/get`;
    this.http.get(url)
      .toPromise()
      .then(res=>console.log(res.json()));
  }

  doGETAsPromiseError() {
    console.log("GET AS PROMISE ERROR");
    let url = `${this.apiRoot}/post`;
    this.http.get(url)
      .toPromise()
      .then(
        res=>console.log(res.json()),
        msg=> console.error(`Error:${msg.status} ${msg.statusText}`)
        );
  }

  doGETAsObservableError() {
    console.log("GET AS OBSERVABLE ERROR");
  }

  doGETWithHeaders() {
    console.log("GET WITH HEADERS");
    let headers = new Headers();
    headers.append('Authorization', btoa('username:password'));
    let opts = new RequestOptions();
    opts.headers = headers;
    let url = `${this.apiRoot}/get`
    this.http.get(url, opts).subscribe(
        res => console.log(res.json()),
        msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
    );
  }
  ngOnInit(){

  }
}
