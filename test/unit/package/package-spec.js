import {Package} from '../../../src/package/package';

describe('Package', () => {
  let packageVM;
  let mockPackageService;
  beforeEach(() => {
    mockPackageService = {
      retrievePackage: function() {
        return Promise.resolve({name: 'foo', description: 'this here is the foo package'});
      }
    };
    packageVM = new Package(mockPackageService);
  });

  describe('activate', () => {
    it('Sets package information on successful service response', (done) => {
      // Given
      let params = {name: 'foo'};
      spyOn(mockPackageService, 'retrievePackage').and.callThrough();

      // When
      packageVM.activate(params)
        .then(() => {
          expect(packageVM.package.name).toEqual('foo');
          expect(packageVM.package.description).toEqual('this here is the foo package');
          expect(mockPackageService.retrievePackage).toHaveBeenCalledWith('foo');
          done();
        });
    });
  });
});
