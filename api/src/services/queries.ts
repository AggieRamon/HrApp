export abstract class Queries {

    public static selectAll(table: string): string {
        if (table === "users") {
            return "SELECT * FROM " + table + " ORDER BY id ASC";
        } else {
            return "SELECT * FROM " + table + " ORDER BY code ASC";
        }
    }

    public static selectById(table: string, uid: string, val: string): string {
        return "SELECT * FROM " + table + " WHERE " + uid + "=" + val;
    }
    public static insert(obj: object, table: string): string {
        let fields = "(";
        let values = "(";
        Object.keys(obj).forEach((key) => {
            fields += key + ", ";
            values += "'" + obj[key] + "'" + ", ";
        });

        return "INSERT INTO " + table + " " + fields.replace(/, $/g, ")") + " VALUES " + values.replace(/, $/g, ")");
    }

    public static update(obj: object, table: string, uid: string, val: string): string {
        let fields = "(";
        let values = "(";
        Object.keys(obj).forEach((key) => {
            fields += key + ", ";
            values += "'" + obj[key] + "'" + ", ";
        });

        return "UPDATE " + table + " SET " + fields.replace(/, $/g, ")") + " = " + values.replace(/, $/g, ")") +
        " WHERE " + uid + "=" + val;
    }

    public static delete(table: string, uid: string, val: string): string {
        return "DELETE FROM " + table + " WHERE " + uid + "=" + val;
    }
}
