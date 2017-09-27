
// Test data
var datasets = [];
var sink = function sink(dataset) {
    datasets.push(dataset);
};

describe('Factory: imageDockerManifest', function() {
    beforeEach(angular.mock.module('registryUI.images'));

    beforeEach(inject(function(_imageDockerManifest_) {
        imageDockerManifest = _imageDockerManifest_;
    }));

    it('should exist', function() {
        expect(imageDockerManifest).toBeDefined();
    });

    it('should handle undefined', function() {
        expect(imageDockerManifest(undefined)).toEqual({});
    });

    it('manifest to be parsed', function() {
        expect(datasets[0].kind).toEqual("Image");

        var manifest = imageDockerManifest(datasets[0]);
        expect(manifest).toBeDefined();
        expect(manifest.name).toEqual("marmalade/juggs");
    });
});
