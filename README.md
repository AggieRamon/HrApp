# Human Resource Appication

## Purpose
Simple application to act as a source of authority for an Identity System. **NOT** to be used for production.

## System Requirements

* Node
* Angular
* Postgresql

## Database (Postgresql)

You must manually download and configure the postgresql database. Below are the tables, and associated fields that need to be created

* users
    * firstname
    * middlename
    * lastname
    * preferredfirstname
    * preferredlastname
    * email
    * jobcode
    * jobtitle
    * departmentcode
    * department
    * locationcode
    * location
    * status
    * managerid
* jobs
    * code
    * title
    * shortdesc
* departments
    * code
    * name
    * shortdesc
* locations
    * code
    * name
    * shortdesc

You must also update the db.ts file with your database host, credentials, name, and port

## Starting Application

Run `npm run start` in the api folder, and then `ng serve` in the web folder