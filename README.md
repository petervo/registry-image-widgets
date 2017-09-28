Registry Image Widgets
========================

This provides rendering of Image and ImageStream objects as found in the
Openshift Kubernetes distribution and related Registry. If these types of objects
make their way into upstream Kubernetes, we should adapt the widgets here for
rendering them.

#### Disclaimer
This is an early implementation and is subject to change.

Getting Started
---------------

The image widgets are provided in the registry-image-widgets bower package.

To get the registry-image-widgets bower component in another project, run:

```
bower install registry-image-widgets --save
```

To see a simple running example git clone this repo and run

```
npm install
bower install
python -m SimpleHTTPServer &
firefox http://localhost:8000
```

This will install any required dependencies necessary to run the ```index.html``` demo.

Usage
-----

Include the JS and CSS files, after angularjs and d3:

```xml
<script src="bower_components/angular/angular.js"></script>
<script src="bower_components/angular/angular-gettext.js"></script>
<script src="bower_components/momentjs/moment.js"></script>
<script src="bower_components/registry-image-widgets/dist/images.js"></script>
<link rel="stylesheet" href="bower_components/registry-image-widgets/dist/images.css" />
```

Make sure your angular app / module includes ```registryUI.images``` as a module dependency.

```
angular.module('exampleApp', ['registryUI.images'])
```

Now include the terminal in your HTML. You must already have a pod resource, or a string
URL in the current scope you pass to the terminal for its initialization.

```xml
<registry-image-body image="image_resource" names="names_array" settings="settings">
</registry-image-body>
```

Documentation
-------------

#### &image

Required. A javascript object Image or ImageStreamImage resource.

#### &names

Optional. A list of qualified names (imagestream/image) this image goes by.

#### &settings

An optional javascript object with settings controlling the display. If
```settings.registry``` is set then commands for pulling the image from the
a docker registry will be displayed. The ```host``` field is used to show
the relevant host.


Styling
-------

See ```images.css``` for an example default look and feel.

Contributing
------------

Before committing any changes run the `webpack` task to make sure files have been
updated, and include the updated file in your commit.

Testing
-------

To install test dependencies, run ```npm install```.

To run tests use ```karma start```. This will run the test suite once with results displayed. Other options are available, such as ```--no-single-run``` to have tests run continuously with each file change (convenient for test development).
