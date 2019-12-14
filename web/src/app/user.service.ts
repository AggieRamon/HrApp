import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserService {

  constructor(private http: HttpClient) {}

  public getUser() {
    return this.http.get("http://localhost:3000/user").toPromise().then(res => {
      return res;
    });
  }

  public getUserById(id: string) {
    return this.http.get("http://localhost:3000/user/" + id).toPromise().then(res => {
       return res;
    });
  }

  public createUser(user: object) {
    return this.http.post("http://localhost:3000/user", user, {
      observe: "response",
      responseType: "text"
    });
  }

  public updateUser(user: object, id: string) {
    return this.http.put("http://localhost:3000/user/" + id, user, {
      observe: "response",
      responseType: "text"
    });
  }
}
