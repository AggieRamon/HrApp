import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class UserService {

  constructor(private http: HttpClient) {}

  public getUser() {
    return this.http.get("http://" + environment.host + ":" + environment.port + "/user").toPromise().then(res => {
      return res;
    });
  }

  public getUserById(id: string) {
    return this.http.get("http://" + environment.host + ":" + environment.port + "/user/" + id).toPromise().then(res => {
       return res;
    });
  }

  public createUser(user: object) {
    return this.http.post("http://" + environment.host + ":" + environment.port + "/user", user, {
      observe: "response",
      responseType: "text"
    });
  }

  public updateUser(user: object, id: string) {
    return this.http.put("http://" + environment.host + ":" + environment.port + "/user/" + id, user, {
      observe: "response",
      responseType: "text"
    });
  }
}
