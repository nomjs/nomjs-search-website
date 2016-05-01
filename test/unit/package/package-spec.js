import {Package} from '../../../src/package/package';

describe('Package', () => {
  let packageVM;
  let mockPackageService;

  /**
   * Testing a view model's activate is verifying that promise then/catch chaining
   * works as opposed to testing business logic. Just including this test here to
   * demonstsrate it can be done.
   */
  describe('activate', () => {
    let withSuccess = function() {
      mockPackageService = {
        retrievePackage: function() {
          return Promise.resolve({name: 'foo', description: 'This here is the foo package.'});
        }
      };
      packageVM = new Package(mockPackageService);
    };

    /**
     * To mock http failures, must mimic what Aurelia returns, which is
     * an object with a 'json' function that resolves with the actual error
     * information from the server.
     */
    let withError = function() {
      mockPackageService = {
        retrievePackage: function() {
          let errResponse = {
            json: function() {
              return Promise.resolve({error: 'Something went wrong.'});
            }
          };
          return Promise.reject(errResponse);
        }
      };
      packageVM = new Package(mockPackageService);
    };

    it('Sets package information on successful service response', (done) => {
      // Given
      withSuccess();
      let params = {name: 'foo'};
      spyOn(mockPackageService, 'retrievePackage').and.callThrough();

      // When
      packageVM.activate(params)
        .then(() => {
          expect(packageVM.package.name).toEqual('foo');
          expect(packageVM.package.description).toEqual('This here is the foo package.');
          expect(mockPackageService.retrievePackage).toHaveBeenCalledWith('foo');
          done();
        });
    });

    it('Does not set package information when service fails', (done) => {
      // Given
      withError();
      let params = {name: 'foo'};
      spyOn(mockPackageService, 'retrievePackage').and.callThrough();

      // When
      packageVM.activate(params).then(() => {
        expect(packageVM.package).toBe(undefined);
        expect(mockPackageService.retrievePackage).toHaveBeenCalledWith('foo');
        done();
      });
    });
  });
});
