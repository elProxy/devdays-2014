var SLIDE_CONFIG = {
  // Slide settings
  settings: {
    title: 'QtWebEngine',
    subtitle: 'Learning to walk',
    eventInfo: {
      title: 'Qt Developer days',
      date: '7/10/2014'
    },
    useBuilds: true, // Default: true. False will turn off slide animation builds.
    usePrettify: true, // Default: true
    enableSlideAreas: true, // Default: true. False turns off the click areas on either slide of the slides.
    enableTouch: true, // Default: true. If touch support should enabled. Note: the device must support touch.
    //analytics: 'UA-XXXXXXXX-1', // TODO: Using this breaks GA for some reason (probably requirejs). Update your tracking code in template.html instead.
    favIcon: 'images/qt_logo_favicon.ico',
//     fonts: [
//       'Open Sans:light,regular,semibold,italic,italicsemibold',
//       'Source Code Pro',
//     ],
    // Loads custom webfonts css from fonts/ subdir, in case the network is rubbish
    localfonts: [
      'font-awesome',
      'open-sans',
      'source-code-pro',
    ],
    theme: ['qtdd2014-light'], // Add your own custom themes or styles in /theme/css. Leave off the .css extension.
  },

  // Author information
  presenters: [{
    name: 'Pierre Rossi',
    company: 'Software Engineer<br>The Qt Company',
//    gplus: 'http://plus.google.com/1234567890',
//    twitter: '@yourhandle',
    www: 'http://www.qt.io',
    email: 'pierre.rossi@theqtcompany.com',
    IRC: '#qtwebengine',
    github: 'http://github.com/elproxy'
  }/*, {
    name: 'Second Name',
    company: 'Job Title, Google',
    gplus: 'http://plus.google.com/1234567890',
    twitter: '@yourhandle',
    www: 'http://www.you.com',
    github: 'http://github.com/you'
  }*/]
};

