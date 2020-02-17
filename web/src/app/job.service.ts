import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class JobService {

  constructor(private http: HttpClient) { }

  public getJob() {
    return this.http.get("http://" + environment.host + ":" + environment.port + "/job").toPromise().then(res => {
      return res;
    });
  }

  public getJobById(id: number) {
    return this.http.get("http://" + environment.host + ":" + environment.port + "/job/" + id)
  }

  public createJob(job: object) {
    return this.http.post("http://" + environment.host + ":" + environment.port + "/job", job, {
      observe: "response",
      responseType: "text"
    });
  }

  public updateJob(job: object, id: number) {
    return this.http.put("http://" + environment.host + ":" + environment.port + "/job/" + id, job, {
      observe: "response",
      responseType: "text"
    });
  }

  public deleteJob(id: number) {
    return this.http.delete("http://" + environment.host + ":" + environment.port + "/job/" + id, {
      observe: "response",
      responseType: "text"
    })
  }
}
