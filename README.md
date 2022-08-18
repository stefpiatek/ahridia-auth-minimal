# Ahridia Authorisation Minimal example

## Dependencies 

The project is built using React and requires an up-to-date version of [node and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to be installed.
These can be checked on the command line on unix systems:

```shell
node -v
```
| v17.4.0

```shell
npm -v
```
| 8.3.1



Setup a local version: clone the repository and install the npm dependencies

```shell
git clone https://github.com/stefpiatek/ahridia-auth-minimal.git
cd ahridia-auth-minimal
npm install
```

## Configuration

From the root of the project, copy the test env file to the root directory so that the application can use the correct environmental variables. 
The `.evn` file is ignored by git so won't be accidentally committed.  

```shell
cp env/example.env example.env 
```

Then edit the values for the `URL` and `CLIENT` variables to allow FHIR server authentication.

## Building and running

- From the repository directory, you can build and run development version using `npm start`
- Navigate to <http://localhost:8001/> and there is a link for a working redirect URI and one which does not work
