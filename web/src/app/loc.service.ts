import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class LocService {
  constructor(private http: HttpClient) { }

  public getLoc() {
    return this.http.get("http://" + environment.host + ":" + environment.port + "/loc").toPromise().then(res => {
      return res;
    });
  }

  public getLocById(id: number) {
    return this.http.get("http://" + environment.host + ":" + environment.port + "/loc/" + id)
  }

  public createLoc(loc: object) {
    return this.http.post("http://" + environment.host + ":" + environment.port + "/loc", loc, {
      observe: "response",
      responseType: "text"
    });
  }

  public updateLoc(loc: object, id: number) {
    return this.http.put("http://" + environment.host + ":" + environment.port + "/loc/" + id, loc, {
      observe: "response",
      responseType: "text"
    });
  }

  public deleteLoc(id: number) {
    return this.http.delete("http://" + environment.host + ":" + environment.port + "/loc/" + id, {
      observe: "response",
      responseType: "text"
    })
  }
}
