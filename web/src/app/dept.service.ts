import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class DeptService {
  constructor(private http: HttpClient) { }

  public getDept() {
    return this.http.get("http://" + environment.host + ":" + environment.port + "/dept").toPromise().then(res => {
      return res;
    });
  }

  public getDeptById(id: number) {
    return this.http.get("http://" + environment.host + ":" + environment.port + "/dept/" + id).toPromise().then(res => {
       return res;
    });
  }

  public createDept(dept: object) {
    return this.http.post("http://" + environment.host + ":" + environment.port + "/dept", dept, {
      observe: "response",
      responseType: "text"
    });
  }

  public updateDept(dept: object, id: number) {
    return this.http.put("http://" + environment.host + ":" + environment.port + "/dept/" + id, dept, {
      observe: "response",
      responseType: "text"
    });
  }
}
