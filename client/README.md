# nomjs search website: client

## Running The App

To run the app, follow these steps.

1. Make sure server is [started](../server/README.md)

1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.

1. From the project folder, execute the following command:

  ```shell
  npm install
  ```
1. Ensure that [Gulp](http://gulpjs.com/) is installed globally. If you need to install it, use the following command:

  ```shell
  npm install -g gulp
  ```
  > **Note:** Gulp must be installed globally, but a local version will also be installed to ensure a compatible version is used for the project.
1. Ensure that [jspm](http://jspm.io/) is installed globally. If you need to install it, use the following command:

  ```shell
  npm install -g jspm
  ```
  > **Note:** jspm must be installed globally, but a local version will also be installed to ensure a compatible version is used for the project.

  > **Note:** jspm queries GitHub to install semver packages, but GitHub has a rate limit on anonymous API requests. It is advised that you configure jspm with your GitHub credentials in order to avoid problems. You can do this by executing `jspm registry config github` and following the prompts. If you choose to authorize jspm by an access token instead of giving your password (see GitHub `Settings > Personal Access Tokens`), `public_repo` access for the token is required.
1. Install the client-side dependencies with jspm:

  ```shell
  jspm install -y
  ```
  >**Note:** Windows users, if you experience an error of "unknown command unzip" you can solve this problem by doing `npm install -g unzip` and then re-running `jspm install`.

1. To run the app, execute the following command:

  ```shell
  gulp
  ```

1. Browse to [http://localhost:9081](http://localhost:9081) to see the app.

## Bundling
Bundling is performed by [Aurelia Bundler](http://github.com/aurelia/bundler). A gulp task is already configured for that. Use the following command to bundle and export the app:

  ```shell
    gulp export
  ```

To run the bundled version of the app, copy the contents of the `export` directory to `../server/public`, first deleting any content that was already there (TODO this step should be automated). Then start the server, following [these](../server/README.md) instructions.

Also, temporarily required, while static sample data is being used for search results, copy `sample-data` folder to `../server/public`.

Remember to run `gulp unbundle` before committing any code changes.

#### Configuration
The configuration is done by ```bundles.js``` file.

##### Optional
Under ```options``` of ```dist/aurelia``` add ```rev: true``` to add bundle file revision/version.

## Running The Unit Tests

1. You can run the tests with this command:

  ```shell
  gulp test
  ```

## Running The E2E Tests
Integration tests are performed with [Protractor](http://angular.github.io/protractor/#/).

1. Place your E2E-Tests into the folder ```test/e2e/src```

1. Install the necessary webdriver

  ```shell
  gulp webdriver-update
  ```

1. Make sure your app runs and is accessible

  ```shell
  gulp
  ```

1. In another console run the E2E-Tests

  ```shell
  gulp e2e
  ```

## Exporting bundled production version

A gulp task is already configured for that. Use the following command to export the app:

  ```shell
    gulp export
  ```

The app will be exported into ```export``` directory preserving the directory structure.

#### Configuration

The configuration is done by ```bundles.js``` file.
In addition, ```export.js``` file is available for including individual files.
