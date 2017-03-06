# WMT Web
This is the webserver application that will present the information stored in
the WMT database to the end user.

It is a node.js application using the express web framework.

## Prerequisites
- Node v6.10.0 (managed using [nvm](https://github.com/creationix/nvm))

On OSX (using [homebrew](https://brew.sh/)):

- `brew install nvm`
- Follow the instructions in the brew installer output
- `nvm install 6.10.0`

## Getting Started
```
npm install
npm start
```

Navigate to `http://localhost:3000` to see the running application

## Active Directory Integration
A test AzureAD instance has been set up with a test user with the following
details:

- Username: john@testwmtdirectory.onmicrosoft.com
- Password: wmt-Password

To see this in action go to the following URL: `localhost:3000/login`.

This will use passport to redirect you to the AzureAD login page, authenticate
the user and post back to the wmt-web application with some claims about the
user.

### Next Steps
This is a simple SAML integration example. In order to extend it for real world
use the following steps need to be completed:

- Supply the identy providers certificate for verification
- Implement cookie based session management (using express-session and passport)
