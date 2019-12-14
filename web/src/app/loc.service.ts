import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class LocService {
  constructor(private http: HttpClient) { }

  public getLoc() {
    return this.http.get("http://localhost:3000/loc").toPromise().then(res => {
      return res;
    });
  }

  public getLocById(id: number) {
    return this.http.get("http://localhost:3000/loc/" + id).toPromise().then(res => {
       return res;
    });
  }

  public createLoc(loc: object) {
    return this.http.post("http://localhost:3000/loc", loc, {
      observe: "response",
      responseType: "text"
    });
  }

  public updateLoc(loc: object, id: number) {
    return this.http.put("http://localhost:3000/loc/" + id, loc, {
      observe: "response",
      responseType: "text"
    });
  }
}
