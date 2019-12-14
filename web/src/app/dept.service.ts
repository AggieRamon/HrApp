import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DeptService {
  constructor(private http: HttpClient) { }

  public getDept() {
    return this.http.get("http://localhost:3000/dept").toPromise().then(res => {
      return res;
    });
  }

  public getDeptById(id: number) {
    return this.http.get("http://localhost:3000/dept/" + id).toPromise().then(res => {
       return res;
    });
  }

  public createDept(dept: object) {
    return this.http.post("http://localhost:3000/dept", dept, {
      observe: "response",
      responseType: "text"
    });
  }

  public updateJob(dept: object, id: number) {
    return this.http.put("http://localhost:3000/Job/" + id, dept, {
      observe: "response",
      responseType: "text"
    });
  }
}
