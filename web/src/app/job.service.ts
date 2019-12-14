import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class JobService {

  constructor(private http: HttpClient) { }

  public getJob() {
    return this.http.get("http://localhost:3000/job").toPromise().then(res => {
      return res;
    });
  }

  public getJobById(id: number) {
    return this.http.get("http://localhost:3000/job/" + id).toPromise().then(res => {
       return res;
    });
  }

  public createJob(job: object) {
    return this.http.post("http://localhost:3000/job", job, {
      observe: "response",
      responseType: "text"
    });
  }

  public updateJob(job: object, id: number) {
    return this.http.put("http://localhost:3000/Job/" + id, job, {
      observe: "response",
      responseType: "text"
    });
  }
}
