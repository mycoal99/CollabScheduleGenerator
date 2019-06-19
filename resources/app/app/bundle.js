/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/app/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _materialUi = __webpack_require__(3);

	var _MuiThemeProvider = __webpack_require__(4);

	var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

	var _reactTapEventPlugin = __webpack_require__(5);

	var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

	var _Dailies = __webpack_require__(6);

	var _Dailies2 = _interopRequireDefault(_Dailies);

	var _Weeklies = __webpack_require__(23);

	var _Weeklies2 = _interopRequireDefault(_Weeklies);

	var _Settings = __webpack_require__(26);

	var _Settings2 = _interopRequireDefault(_Settings);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	(0, _reactTapEventPlugin2.default)();

	var App = function (_React$Component) {
	  _inherits(App, _React$Component);

	  function App() {
	    _classCallCheck(this, App);

	    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

	    _this.state = {
	      drawerOpen: true,
	      activeMenuItem: 'Dailies'
	    };
	    return _this;
	  }

	  _createClass(App, [{
	    key: 'setActiveMenuItem',
	    value: function setActiveMenuItem(menuItemName) {
	      this.setState({ activeMenuItem: menuItemName });
	    }
	  }, {
	    key: 'toggleDrawer',
	    value: function toggleDrawer() {
	      var drawerOpen = !this.state.drawerOpen;
	      this.setState({ drawerOpen: drawerOpen });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var drawerStyle = {
	        top: '64px',
	        width: '15em',
	        backgroundColor: 'inherit',
	        boxShadow: ''
	      };
	      var gray = 'rgba(0, 0, 0, 0.0980)';
	      return _react2.default.createElement(
	        _MuiThemeProvider2.default,
	        null,
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(_materialUi.AppBar, {
	            style: { position: 'fixed', top: '0px' },
	            onLeftIconButtonTouchTap: function onLeftIconButtonTouchTap() {
	              return _this2.toggleDrawer();
	            },
	            title: this.state.activeMenuItem,
	            iconClassNameRight: 'muidocs-icon-navigation-expand-more'
	          }),
	          _react2.default.createElement(
	            _materialUi.Drawer,
	            { containerStyle: drawerStyle, open: this.state.drawerOpen },
	            ['Dailies', 'Weeklies'].map(function (itemName) {
	              return _react2.default.createElement(
	                _materialUi.MenuItem,
	                {
	                  key: itemName,
	                  onClick: function onClick() {
	                    return _this2.setActiveMenuItem(itemName);
	                  },
	                  style: { backgroundColor: _this2.state.activeMenuItem === itemName ? gray : '' }
	                },
	                itemName
	              );
	            }),
	            _react2.default.createElement('hr', null),
	            _react2.default.createElement(
	              _materialUi.MenuItem,
	              {
	                key: 'Settings',
	                onClick: function onClick() {
	                  return _this2.setActiveMenuItem('Settings');
	                },
	                style: { backgroundColor: this.state.activeMenuItem === 'Settings' ? gray : '' }
	              },
	              'Settings'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: { margin: '75px 15em 2em 15em' } },
	            this.state.activeMenuItem === 'Dailies' && _react2.default.createElement(_Dailies2.default, null),
	            this.state.activeMenuItem === 'Weeklies' && _react2.default.createElement(_Weeklies2.default, null),
	            this.state.activeMenuItem === 'Settings' && _react2.default.createElement(_Settings2.default, null)
	          )
	        )
	      );
	    }
	  }]);

	  return App;
	}(_react2.default.Component);

	_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = require("react-dom");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = require("material-ui");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = require("material-ui/styles/MuiThemeProvider");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = require("react-tap-event-plugin");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(7);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _materialUi = __webpack_require__(3);

	var _electron = __webpack_require__(8);

	var _SettingsStore = __webpack_require__(9);

	var _SettingsStore2 = _interopRequireDefault(_SettingsStore);

	var _schedule = __webpack_require__(16);

	var _schedule2 = _interopRequireDefault(_schedule);

	var _calendar = __webpack_require__(18);

	var _calendar2 = _interopRequireDefault(_calendar);

	var _dailiesGenerator = __webpack_require__(21);

	var _dailiesGenerator2 = _interopRequireDefault(_dailiesGenerator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var app = _electron.remote.app,
	    dialog = _electron.remote.dialog;

	var Dailies = function (_React$Component) {
	  _inherits(Dailies, _React$Component);

	  function Dailies() {
	    _classCallCheck(this, Dailies);

	    var _this = _possibleConstructorReturn(this, (Dailies.__proto__ || Object.getPrototypeOf(Dailies)).call(this));

	    _this.state = {
	      date: null,
	      snackbarOpen: false,
	      savedFilepath: '',
	      isGenerating: false
	    };
	    return _this;
	  }

	  _createClass(Dailies, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var styles = {
	        fontWeight: 'normal',
	        textAlign: 'center'
	      };
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h1',
	          { style: styles },
	          'Dailies'
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: { textAlign: 'center' } },
	          _react2.default.createElement(_materialUi.DatePicker, {
	            autoOk: true,
	            hintText: 'Choose date...',
	            firstDayOfWeek: 0,
	            value: this.state.date,
	            onChange: function onChange(event, date) {
	              return _this2.setState({ date: date });
	            }
	          })
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: { textAlign: 'center' } },
	          _react2.default.createElement(_materialUi.RaisedButton, {
	            primary: true,
	            disabled: this.state.date === null || this.state.isGenerating,
	            label: this.state.isGenerating ? 'Generating...' : 'Generate',
	            onClick: function onClick() {
	              _this2.setState({ isGenerating: true });
	              var date = _this2.state.date;

	              var options = _SettingsStore2.default.getAll().dailies;
	              var calendarId = options.calendarId;
	              var fetching = [(0, _schedule2.default)(date), (0, _calendar2.default)(date, calendarId)];
	              Promise.all(fetching).then(function (values) {
	                var schedule = values[0].data;
	                var shifts = values[1].data.items;
	                var dailiesGenerator = new _dailiesGenerator2.default(date, schedule, shifts, options);
	                dailiesGenerator.generate();
	                _this2.setState({ isGenerating: false });
	                var saveDialogOptions = {
	                  filters: [{ name: 'Excel', extensions: ['xlsx'] }, { name: 'All Files', extensions: ['*'] }],
	                  title: 'Save Dailies',
	                  defaultPath: app.getPath('desktop') + '/' + options.filename
	                };
	                dialog.showSaveDialog(saveDialogOptions, function (filename) {
	                  _this2.setState({ savedFilepath: filename });
	                  dailiesGenerator.save(filename).then(function () {
	                    _this2.setState({ snackbarOpen: true });
	                  }).catch(function (error) {
	                    _this2.setState({ isGenerating: false });
	                    alert(error.toString(), 'Error');
	                  });
	                });
	              }).catch(function (error) {
	                _this2.setState({ isGenerating: false });
	                alert(error.toString());
	              });
	            }
	          })
	        ),
	        _react2.default.createElement(_materialUi.Snackbar, {
	          open: this.state.snackbarOpen,
	          message: 'Saved to ' + this.state.savedFilepath,
	          action: 'Open',
	          autoHideDuration: 5000,
	          onActionTouchTap: function onActionTouchTap() {
	            return _electron.shell.openItem(_this2.state.savedFilepath);
	          },
	          onRequestClose: function onRequestClose() {
	            return _this2.setState({ snackbarOpen: false });
	          }
	        })
	      );
	    }
	  }]);

	  return Dailies;
	}(_react2.default.Component);

	exports.default = Dailies;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = require("datejs");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = require("electron");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _events = __webpack_require__(10);

	var _firebase = __webpack_require__(11);

	var _firebase2 = _interopRequireDefault(_firebase);

	var _guid = __webpack_require__(12);

	var _guid2 = _interopRequireDefault(_guid);

	var _firebaseConfig = __webpack_require__(13);

	var _firebaseConfig2 = _interopRequireDefault(_firebaseConfig);

	var _dispatcher = __webpack_require__(14);

	var _dispatcher2 = _interopRequireDefault(_dispatcher);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SettingsStore = function (_EventEmitter) {
	  _inherits(SettingsStore, _EventEmitter);

	  function SettingsStore() {
	    _classCallCheck(this, SettingsStore);

	    var _this = _possibleConstructorReturn(this, (SettingsStore.__proto__ || Object.getPrototypeOf(SettingsStore)).call(this));

	    _firebase2.default.initializeApp(_firebaseConfig2.default);
	    _this.settings = {
	      dailies: {
	        calendarId: 'somethingsomething@group.calendar.google.com',
	        filename: 'Dailies.xlsx',
	        locationGroups: []
	      },
	      weeklies: {
	        filename: 'Weeklies.xlsx'
	      }
	    };
	    _this.settingsRef = _firebase2.default.database().ref('settings');
	    _this.settingsRef.on('value', function (snapshot) {
	      if (snapshot.val() !== null) {
	        _this.settings = snapshot.val();
	        _this.emit('change');
	      }
	    });
	    return _this;
	  }

	  _createClass(SettingsStore, [{
	    key: 'getAll',
	    value: function getAll() {
	      return this.settings;
	    }
	  }, {
	    key: 'addLocationGroup',
	    value: function addLocationGroup(locationGroupName) {
	      var id = _guid2.default.create().value;
	      var locationGroupToAdd = {
	        id: id,
	        name: locationGroupName
	      };
	      var locationGroups = (this.settings.dailies.locationGroups || []).concat(locationGroupToAdd);
	      this.settings.dailies.locationGroups = locationGroups;
	    }
	  }, {
	    key: 'setLocationGroupName',
	    value: function setLocationGroupName(locationGroupId, newLocationGroupName) {
	      var locationGroups = this.settings.dailies.locationGroups.map(function (locationGroup) {
	        if (locationGroup.id === locationGroupId) {
	          var newLocationGroup = locationGroup;
	          newLocationGroup.name = newLocationGroupName;
	          return newLocationGroup;
	        }
	        return locationGroup;
	      });
	      this.settings.dailies.locationGroups = locationGroups;
	    }
	  }, {
	    key: 'addLabLocation',
	    value: function addLabLocation(locationGroupId, labLocationToAdd) {
	      var locationGroups = this.settings.dailies.locationGroups.map(function (locationGroup) {
	        if (locationGroup.id === locationGroupId) {
	          var newLocationGroup = locationGroup;
	          var newLabLocations = (locationGroup.labLocations || []).concat(labLocationToAdd);
	          newLocationGroup.labLocations = newLabLocations;
	          return newLocationGroup;
	        }
	        return locationGroup;
	      });
	      this.settings.dailies.locationGroups = locationGroups;
	    }
	  }, {
	    key: 'removeLabLocation',
	    value: function removeLabLocation(locationGroupId, labLocationToRemove) {
	      var locationGroups = this.settings.dailies.locationGroups.map(function (locationGroup) {
	        if (locationGroup.id === locationGroupId) {
	          var labLocations = locationGroup.labLocations.filter(function (labLocation) {
	            return labLocation !== labLocationToRemove;
	          });
	          var newLocationGroup = locationGroup;
	          newLocationGroup.labLocations = labLocations;
	          return newLocationGroup;
	        }
	        return locationGroup;
	      });
	      this.settings.dailies.locationGroups = locationGroups;
	    }
	  }, {
	    key: 'addShiftLocation',
	    value: function addShiftLocation(locationGroupId, shiftLocationToAdd) {
	      var locationGroups = this.settings.dailies.locationGroups.map(function (locationGroup) {
	        if (locationGroup.id === locationGroupId) {
	          var newLocationGroup = locationGroup;
	          var newShiftLocations = (locationGroup.shiftLocations || []).concat(shiftLocationToAdd);
	          newLocationGroup.shiftLocations = newShiftLocations;
	          return newLocationGroup;
	        }
	        return locationGroup;
	      });
	      this.settings.dailies.locationGroups = locationGroups;
	    }
	  }, {
	    key: 'removeShiftLocation',
	    value: function removeShiftLocation(locationGroupId, shiftLocationToRemove) {
	      var locationGroups = this.settings.dailies.locationGroups.map(function (locationGroup) {
	        if (locationGroup.id === locationGroupId) {
	          var shiftLocations = locationGroup.shiftLocations.filter(function (labLocation) {
	            return labLocation !== shiftLocationToRemove;
	          });
	          var newLocationGroup = locationGroup;
	          newLocationGroup.shiftLocations = shiftLocations;
	          return newLocationGroup;
	        }
	        return locationGroup;
	      });
	      this.settings.dailies.locationGroups = locationGroups;
	    }
	  }, {
	    key: 'handleActions',
	    value: function handleActions(action) {
	      switch (action.type) {
	        case 'FETCH_SETTINGS':
	          {
	            // settings is being fetched
	            break;
	          }
	        case 'RECIEVE_SETTINGS':
	          {
	            this.settings = action.settings;
	            break;
	          }
	        case 'UPDATE_DAILIES_CALENDAR_ID':
	          {
	            this.settings.dailies.calendarId = action.calendarId;
	            break;
	          }
	        case 'UPDATE_DAILIES_FILENAME':
	          {
	            this.settings.dailies.filename = action.filename;
	            break;
	          }
	        case 'ADD_DAILIES_LOCATION_GROUP':
	          {
	            this.addLocationGroup(action.locationGroupName);
	            break;
	          }
	        case 'REMOVE_DAILIES_LOCATION_GROUP':
	          {
	            var locationGroups = this.settings.dailies.locationGroups.filter(function (locationGroup) {
	              return locationGroup.id !== action.locationGroupId;
	            });
	            this.settings.dailies.locationGroups = locationGroups;
	            break;
	          }
	        case 'SET_DAILIES_LOCATION_GROUP_NAME':
	          {
	            var locationGroupId = action.locationGroupId,
	                newLocationGroupName = action.newLocationGroupName;

	            this.setLocationGroupName(locationGroupId, newLocationGroupName);
	            break;
	          }
	        case 'ADD_DAILIES_LAB_LOCATION':
	          {
	            var _locationGroupId = action.locationGroupId,
	                labLocationToAdd = action.labLocationToAdd;

	            this.addLabLocation(_locationGroupId, labLocationToAdd);
	            break;
	          }
	        case 'REMOVE_DAILIES_LAB_LOCATION':
	          {
	            var _locationGroupId2 = action.locationGroupId,
	                labLocationToRemove = action.labLocationToRemove;

	            this.removeLabLocation(_locationGroupId2, labLocationToRemove);
	            break;
	          }
	        case 'ADD_DAILIES_SHIFT_LOCATION':
	          {
	            var _locationGroupId3 = action.locationGroupId,
	                shiftLocationToAdd = action.shiftLocationToAdd;

	            this.addShiftLocation(_locationGroupId3, shiftLocationToAdd);
	            break;
	          }
	        case 'REMOVE_DAILIES_SHIFT_LOCATION':
	          {
	            var _locationGroupId4 = action.locationGroupId,
	                shiftLocationToRemove = action.shiftLocationToRemove;

	            this.removeShiftLocation(_locationGroupId4, shiftLocationToRemove);
	            break;
	          }
	        case 'UPDATE_DAILIES_LOCATION_GROUP':
	          {
	            var locationGroupToUpdateId = action.locationGroup.id;
	            var _locationGroups = this.settings.dailies.locationGroups.map(function (locationGroup) {
	              if (locationGroup.id === locationGroupToUpdateId) {
	                return action.locationGroup;
	              }
	              return locationGroup;
	            });
	            this.settings.dailies.locationGroups = _locationGroups;
	            break;
	          }
	        case 'UPDATE_WEEKLIES_FILENAME':
	          {
	            this.settings.weeklies.filename = action.filename;
	            break;
	          }
	        default:
	          {
	            // Unknown action type
	            break;
	          }
	      }
	      this.settingsRef.set(this.settings);
	      this.emit('change');
	    }
	  }]);

	  return SettingsStore;
	}(_events.EventEmitter);

	var settingsStore = new SettingsStore();
	_dispatcher2.default.register(settingsStore.handleActions.bind(settingsStore));
	exports.default = settingsStore;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = require("events");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = require("firebase");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = require("guid");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = {"apiKey":"AIzaSyAUW_1_UTSOSmAaXVA-3Ury-uQlJxkrc30","authDomain":"dailies-weeklies-generat-d7d62.firebaseapp.com","databaseURL":"https://dailies-weeklies-generat-d7d62.firebaseio.com","storageBucket":"dailies-weeklies-generat-d7d62.appspot.com","messagingSenderId":"230404323293"}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _flux = __webpack_require__(15);

	exports.default = new _flux.Dispatcher();

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = require("flux");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = fetchSchedule;

	__webpack_require__(7);

	var _axios = __webpack_require__(17);

	var _axios2 = _interopRequireDefault(_axios);

	var _electron = __webpack_require__(8);

	var BrowserWindow = _electron.remote.BrowserWindow;

	var astra_authenticated = false;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function parseSchedule(jsonObject) {
		var data = JSON.parse(jsonObject);
		var labEvents = data.data;
		
		var lab_times = {};
		var lab_names = ["Phelps 1513", "Phelps 1514", "Phelps 1517", "Phelps 1518", "Phelps 1525", "Phelps 1526", "Phelps 1529", "Phelps 1530", "PSYE 1805", "PSYE 1806", "SSMS 1005", "SSMS 1007", "SSMS 1301", "SSMS 1302", "SSMS 1303", "SSMS 1304", "BSIF 1217"];
		var n;
		for (n = 0; n < lab_names.length; n++) {
			lab_times[lab_names[n]] = [0];
		}

		var lab_classes = {};
		var i = 0;
		for (i = 0; i < labEvents.length; i++) {
			var building = labEvents[i][5]
			switch(building) {
				case "PHELP":
					building = "Phelps";
					break;
				case "PSY-E":
					building = "PSYE";
					break;
			}

			var building_room = building + " " + labEvents[i][6];
			var endMinute = labEvents[i][4];
			
			var event = {
					name: labEvents[i][0],
					instructor: null,
					//startTime: parseInt((new Date(labEvents[i][1]).getTime() / 1000).toFixed(0)) + labEvents[i][3]*60,
					//endTime: 0
					startTime: parseInt((new Date(labEvents[i][1]).getTime() / 1000).toFixed(0)) + labEvents[i][3]*60 + (7*60*60),
					endTime: parseInt((new Date(labEvents[i][2]).getTime() / 1000).toFixed(0)) + labEvents[i][4]*60 + (7*60*60)
			};

			if (endMinute % 30 == 0) {
				//event.endTime = parseInt((new Date(labEvents[i][2]).getTime() / 1000).toFixed(0)) + (labEvents[i][4]*60);
				event.endTime = parseInt((new Date(labEvents[i][2]).getTime() / 1000).toFixed(0)) + (labEvents[i][4]*60) + 7*60*60;
			}
			else if (endMinute % 60 > 30) {
				//event.endTime = parseInt((new Date(labEvents[i][2]).getTime() / 1000).toFixed(0)) + (labEvents[i][4]*60) + (60 - (labEvents[i][4] % 60))*60;
				event.endTime = parseInt((new Date(labEvents[i][2]).getTime() / 1000).toFixed(0)) + (labEvents[i][4]*60) + 7*60*60 + (60 - (labEvents[i][4] % 60))*60;
			}
			else {
				//event.endTime = parseInt((new Date(labEvents[i][2]).getTime() / 1000).toFixed(0)) + (labEvents[i][4]*60) +  (30 - (labEvents[i][4] % 60))*60;
				event.endTime = parseInt((new Date(labEvents[i][2]).getTime() / 1000).toFixed(0)) + (labEvents[i][4]*60) +  7*60*60 + (30 - (labEvents[i][4] % 60))*60;					//console.log("30")
			}

			if (building_room === "SSMS 1301&1302") {
				if (!lab_times["SSMS 1301"].includes(event.startTime)) {
					if (lab_classes["SSMS 1301"] != undefined) lab_classes["SSMS 1301"].push(event);
					else lab_classes["SSMS 1301"] = [event];

					lab_times["SSMS 1301"].push(event.startTime);
				}

				if (!lab_times["SSMS 1302"].includes(event.startTime)) {
					if (lab_classes["SSMS 1302"] != undefined) lab_classes["SSMS 1302"].push(event);
					else lab_classes["SSMS 1302"] = [event];	

					lab_times["SSMS 1302"].push(event.startTime);
				}
					
			}
			else if (building_room === "SSMS 1303&1304") {
				if (!lab_times["SSMS 1303"].includes(event.startTime)) {
					if (lab_classes["SSMS 1303"] != undefined) lab_classes["SSMS 1303"].push(event);
					else lab_classes["SSMS 1303"] = [event];	

					lab_times["SSMS 1303"].push(event.startTime);
				}

				if (!lab_times["SSMS 1304"].includes(event.startTime)) {
					if (lab_classes["SSMS 1304"] != undefined) lab_classes["SSMS 1304"].push(event);
					else lab_classes["SSMS 1304"] = [event];

					lab_times["SSMS 1304"].push(event.startTime);
				}	
			}
			else {
				if (!lab_times[building_room].includes(event.startTime)) {
					if (lab_classes[building_room] != undefined) lab_classes[building_room].push(event);
					else lab_classes[building_room] = [event];

					lab_times[building_room].push(event.startTime);
				}
			}
			
		}
		
		var labs = Object.keys(lab_classes).map(function(lab, index) {
			return {
				id: "lab_" + index,
				name: lab,
				classes: lab_classes[lab]
			}
		});

		var startEpoch = Date.parse("6:00AM").getTime() / 1000;
	 	var endEpoch = Date.parse("10:00PM").getTime() / 1000;
	 	
		var schedule = {
			labs: labs,
			start: startEpoch,
			end: endEpoch
		};

		return schedule;
	}

	function fetchSchedule(date) {
	  var epochTime = new Date(date).getTime() / 1000;
	  //"2019-02-01T00:00:00"
	  var formattedDate = date.toISOString();
	  formattedDate = formattedDate.substring(0, formattedDate.length - 14);

	  var base_url = 'https://www.aaiscloud.com/UCA_SantaBarbara/~api/calendar/calendarList?action=get?view=json&fields=ActivityName,StartDate,EndDate,StartMinute,EndMinute,BuildingCode,RoomNumber&filter=';

	  var labLocations = '("c169abb2-4e33-4a06-a8c8-7bb92dcb35af","3dd67f3c-d656-4661-ad21-749afbbd68ee","d35b75db-028a-4274-a069-2be6baafc4e9","8e1190da-a1a2-4b19-ac0e-ba85528d974d","5a7b7919-3835-4ee3-8a76-3cd86ceeb120","c889c6c7-e37f-4793-8011-07fa6de1cf03","39f1e083-32ea-43b1-95cc-9f158965d62e","7fe39899-543f-4552-b846-b95c7f4192ba","072f7006-7417-4fed-9069-e37c4f6ae6a8","1128e303-8e56-4d30-b225-7ced362dc9fe","b0d90fb9-282a-46cf-b75b-a1dfadaae8e5","fe81c030-a27c-4fc5-928e-3f050922f867","368bc8e5-e304-41b4-806b-24af571298fd","d2ff24c6-0033-4fab-94bb-d76e7c4fa008","9ea261e2-4f56-4d26-89a9-be2c730450c4","78808043-d705-4013-a5f5-450193826920","e47668a2-007e-426f-86dd-5c48968a2df2","99412324-d216-4ec9-9f7a-be6af9069d2c","22b8f3e3-0c31-42d9-9b82-3d5c2ea117fd","f9c21d18-2d35-4437-b52a-2c1e9b6fdd0f")';
	  var fullUrl = base_url + 'StartDate=="' + formattedDate + '"%26%26' + 'Location.RoomId in ' + labLocations;
	 
	  var authWindow = new BrowserWindow({
	    width: 1000, 
	    height: 1000, 
		show: false, 
		'node-integration': false,
		'web-security': false
		});
	  

	  if (!astra_authenticated) {
	  	authWindow.loadURL(fullUrl);
		authWindow.show();

		var data;
		var request = new XMLHttpRequest();
		request.open('GET', fullUrl, true);
		request.onload = function () {
		  	data = this.response;
		}
		astra_authenticated = true;
		//request.send();	
	  }

	  var options = {
	  	transformResponse: parseSchedule
	  }

	  return _axios2.default.get(fullUrl, options);
	}

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	module.exports = require("axios");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = fetchCalendar;

	var _electron = __webpack_require__(8);

	var _axios = __webpack_require__(17);

	var _axios2 = _interopRequireDefault(_axios);

	var _querystring = __webpack_require__(19);

	var _querystring2 = _interopRequireDefault(_querystring);

	var _google_client_secret = __webpack_require__(20);

	var _google_client_secret2 = _interopRequireDefault(_google_client_secret);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var BrowserWindow = _electron.remote.BrowserWindow;

	var authWindow = void 0;

	var options = {
	  response_type: 'code',
	  client_id: _google_client_secret2.default.installed.client_id,
	  client_secret: _google_client_secret2.default.installed.client_secret,
	  scope: 'https://www.googleapis.com/auth/calendar.readonly',
	  redirect_uri: 'https://localhost/'
	};

	function createAuthWindow() {
	  authWindow = new BrowserWindow({
	    width: 800,
	    height: 600,
	    show: false,
	    'node-integration': false
	  });
	  var googleUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
	  var authUrl = googleUrl + '?response_type=' + options.response_type + '&redirect_uri=' + (options.redirect_uri + '&client_id=' + options.client_id + '&scope=' + options.scope);

	  authWindow.loadURL(authUrl);
	}

	function getData(date, token, calendarId) {
	  var url = 'https://www.googleapis.com/calendar/v3/calendars/' + (encodeURIComponent(calendarId) + '/events');

	  var timeMin = new Date(date.toString()).toISOString();
	  var timeMax = new Date(date.toString()).add({ days: 1 }).toISOString();
	  return _axios2.default.get(url, {
	    params: {
	      timeMin: timeMin,
	      timeMax: timeMax
	    },
	    headers: {
	      Authorization: 'Bearer ' + token
	    }
	  });
	}

	function getToken(code) {
	  var googleUrl = 'https://www.googleapis.com/oauth2/v4/token';
	  return _axios2.default.post(googleUrl, _querystring2.default.stringify({
	    code: code,
	    grant_type: 'authorization_code',
	    client_id: options.client_id,
	    client_secret: options.client_secret,
	    redirect_uri: options.redirect_uri
	  }), {
	    headers: {
	      'Content-Type': 'application/x-www-form-urlencoded'
	    }
	  });
	}

	function fetchCalendar(date, calendarId) {
	  createAuthWindow();
	  authWindow.show();

	  return new Promise(function (resolve, reject) {
	    authWindow.webContents.on('will-navigate', function (event, url) {
	      // on login
	      var rawCode = /code=([^&]*)/.exec(url) || null;
	      var code = rawCode && rawCode.length > 1 ? rawCode[1] : null;
	      var error = /\?error=(.+)$/.exec(url);

	      if (code || error) {
	        authWindow.destroy();
	      }
	      if (code) {
	        var token = getToken(code);
	        token.then(function (tokenResponse) {
	          return getData(date, tokenResponse.data.access_token, calendarId);
	        }).then(function (dataResponse) {
	          resolve(dataResponse);
	        }).catch(function (errorResponse) {
	          reject(errorResponse);
	        });
	      } else if (error) {
	        reject(error);
	      }
	    });
	  });
	}

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	module.exports = require("querystring");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	module.exports = {"installed":{"client_id":"230404323293-itde5tab8j006q5hlpqiuknf4kv0v486.apps.googleusercontent.com","project_id":"dailies-weeklies-generat-d7d62","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://accounts.google.com/o/oauth2/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"7LvyE4lP1ejdB0qKI_kCxv5N","redirect_uris":["urn:ietf:wg:oauth:2.0:oob","http://localhost"]}}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _exceljs = __webpack_require__(22);

	var _exceljs2 = _interopRequireDefault(_exceljs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// Helpers
	function getDateFromEpoch(epochTime) {
	  var date = new Date(0);
	  date.setUTCSeconds(epochTime);
	  return date;
	}
	function applyColumnBorders(worksheet, startRow, endRow, column) {
	  var ws = worksheet;
	  ws.getCell(startRow, column).border = {
	    top: { style: 'medium' },
	    left: { style: 'medium' },
	    right: { style: 'medium' }
	  };
	  ws.getCell(endRow, column).border = {
	    left: { style: 'medium' },
	    right: { style: 'medium' },
	    bottom: { style: 'medium' }
	  };
	  for (var i = startRow + 1; i < endRow; i += 1) {
	    ws.getCell(i, column).border = {
	      left: { style: 'medium' },
	      right: { style: 'medium' }
	    };
	  }
	}
	function formatLabEventCells(worksheet, startRow, endRow, column, labEvent) {
	  var ws = worksheet;
	  var eventName = labEvent.name;
	  applyColumnBorders(ws, startRow, endRow, column);
	  for (var i = startRow; i <= endRow; i += 1) {
	    ws.getCell(i, column).alignment = {
	      vertical: 'middle',
	      horizontal: 'center',
	      wrapText: true
	    };
	    if (eventName.trim() === 'OPEN') {
	      var argb = (i - 1) % 4 === 0 || (i - 1) % 4 === 1 ? 'FFFFFFFF' : 'FFE6E6FF';
	      ws.getCell(i, column).fill = {
	        type: 'pattern',
	        pattern: 'solid',
	        fgColor: { argb: argb }
	      };
	    } else if (eventName.trim() !== 'CLOSED') {
	      ws.getCell(i, column).fill = {
	        type: 'pattern',
	        pattern: 'solid',
	        fgColor: { argb: 'FFFFFFFF' }
	      };
	    }
	  }
	}
	function formatShiftEventCells(worksheet, startRow, endRow, column) {
	  var ws = worksheet;
	  applyColumnBorders(ws, startRow, endRow, column);

	  for (var i = startRow; i <= endRow; i += 1) {
	    ws.getCell(i, column).alignment = {
	      vertical: 'middle',
	      horizontal: 'center',
	      wrapText: true
	    };
	    ws.getCell(i, column).fill = {
	      type: 'pattern',
	      pattern: 'solid',
	      fgColor: { argb: 'FFFFFFFF' }
	    };
	  }
	}
	function setPrintFormat(worksheet) {
	  var ws = worksheet;
	  ws.pageSetup.orientation = 'landscape';
	  ws.pageSetup.fitToPage = true;
	  ws.pageSetup.margins = {
	    top: 0.25,
	    left: 0.25,
	    right: 0.25,
	    bottom: 0.25,
	    header: 0.0,
	    footer: 0.0
	  };
	}

	var DailiesGenerator = function () {
	  function DailiesGenerator(date, schedule, shifts, options) {
	    _classCallCheck(this, DailiesGenerator);

	    this.date = date;
	    this.schedule = schedule;
	    this.shifts = shifts;
	    this.options = options;
	    this.workbook = new _exceljs2.default.Workbook();

	    this.MIN_ROW = this.getRowFromEpoch(schedule.start);
	    this.MAX_ROW = this.getRowFromEpoch(schedule.end);
	  }

	  _createClass(DailiesGenerator, [{
	    key: 'generate',
	    value: function generate() {
	      var _this = this;

	      var locationGroups = this.options.locationGroups;

	      locationGroups.forEach(function (locationGroup) {
	        var labLocations = locationGroup.labLocations || [];
	        var shiftLocations = locationGroup.shiftLocations || [];
	        var worksheet = _this.workbook.addWorksheet(locationGroup.name);
	        var currentColumn = 1;
	        _this.createTimeColumn(worksheet, currentColumn);
	        currentColumn += 1;

	        labLocations.sort().filter(function (labLocation) {
	          return _this.schedule.labs.map(function (lab) {
	            return lab.name;
	          }).includes(labLocation);
	        }).forEach(function (labLocation) {
	          _this.createLabColumn(worksheet, labLocation, currentColumn);
	          currentColumn += 1;
	        });
	        shiftLocations.sort().forEach(function (shiftLocation) {
	          _this.createShiftColumn(worksheet, shiftLocation, currentColumn);
	          currentColumn += 1;
	        });
	        _this.createTimeColumn(worksheet, currentColumn);
	        currentColumn += 1;
	        _this.createNotesColumn(worksheet, currentColumn);
	        _this.createTitle(worksheet, locationGroup.name, 1, currentColumn);
	        setPrintFormat(worksheet);
	      });
	    }
	  }, {
	    key: 'save',
	    value: function save(filename) {
	      return this.workbook.xlsx.writeFile(filename);
	    }
	  }, {
	    key: 'getRowFromEpoch',
	    value: function getRowFromEpoch(epochTime) {
	      var date = new Date(0);
	      date.setUTCSeconds(epochTime);

	      var hours = date.getHours();
	      var minutes = date.getMinutes();

	      var scheduleStart = new Date(0);
	      var scheduleEnd = new Date(0);
	      scheduleStart.setUTCSeconds(this.schedule.start);
	      scheduleEnd.setUTCSeconds(this.schedule.end);

	      var startHour = scheduleStart.getHours();
	      var startMinutes = scheduleStart.getMinutes();

	      var startRow = 2 * (startHour + startMinutes / 60);
	      var row = 2 * (hours + minutes / 60) + (2 - startRow) + 1;

	      return row;
	    }
	  }, {
	    key: 'createHeader',
	    value: function createHeader(worksheet, headerName, column) {
	      var ws = worksheet;
	      var styles = {
	        font: {
	          name: 'Calibri',
	          size: 11,
	          bold: true
	        },
	        alignment: {
	          vertical: 'middle',
	          horizontal: 'center',
	          wrapText: true
	        },
	        border: {
	          top: { style: 'medium' },
	          left: { style: 'medium' },
	          bottom: { style: 'medium' },
	          right: { style: 'medium' }
	        }
	      };
	      var headerRow = this.MIN_ROW - 1;
	      ws.getRow(headerRow).height = 30;

	      ws.getCell(headerRow, column).value = headerName;

	      ws.getCell(headerRow, column).font = styles.font;
	      ws.getCell(headerRow, column).alignment = styles.alignment;
	      ws.getCell(headerRow, column).border = styles.border;
	    }
	  }, {
	    key: 'createTitle',
	    value: function createTitle(worksheet, locationGroupName, row, column) {
	      var ws = worksheet;
	      var startRow = 1;
	      var startColumn = 1;
	      var endRow = row;
	      var endColumn = column;
	      var dateString = this.date.toString('MM/dd/yyyy');

	      ws.mergeCells(startRow, startColumn, endRow, endColumn);
	      ws.getCell(startRow, startColumn).value = 'CSSC Schedule ' + locationGroupName + ' ' + dateString;
	      ws.getCell(startRow, startColumn).alignment = {
	        vertical: 'middle',
	        horizontal: 'center',
	        wrapText: true
	      };
	    }
	  }, {
	    key: 'setInitialColumnFormat',
	    value: function setInitialColumnFormat(worksheet, column) {
	      var ws = worksheet;

	      for (var i = this.MIN_ROW; i <= this.MAX_ROW; i += 1) {
	        ws.getCell(i, column).value = '';
	        ws.getCell(i, column).fill = {
	          type: 'pattern',
	          pattern: 'solid',
	          fgColor: { argb: '808080' }
	        };

	        if (i === this.MIN_ROW) {
	          ws.getCell(i, column).border = {
	            top: { style: 'medium' },
	            left: { style: 'medium' },
	            right: { style: 'medium' }
	          };
	        } else if (i === this.MAX_ROW) {
	          ws.getCell(i, column).border = {
	            bottom: { style: 'medium' },
	            left: { style: 'medium' },
	            right: { style: 'medium' }
	          };
	        } else {
	          ws.getCell(i, column).border = {
	            left: { style: 'medium' },
	            right: { style: 'medium' }
	          };
	        }
	      }
	    }
	  }, {
	    key: 'createTimeColumn',
	    value: function createTimeColumn(worksheet, column) {
	      var ws = worksheet;
	      var date = new Date(0);
	      date.setUTCSeconds(this.schedule.start);

	      this.createHeader(ws, 'Time', column);
	      this.setInitialColumnFormat(ws, column);

	      for (var i = this.MIN_ROW; i <= this.MAX_ROW; i += 1) {
	        ws.getRow(i).height = 30;
	        var timeString = date.toString('hh:mm tt');
	        ws.getCell(i, column).value = timeString;
	        ws.getCell(i, column).fill = {
	          type: 'pattern',
	          pattern: 'solid',
	          fgColor: { argb: 'FFFFFFFF' }
	        };
	        ws.getCell(i, column).alignment = {
	          vertical: 'top',
	          horizontal: 'center',
	          wrapText: true
	        };
	        date.add({ minutes: 30 });
	      }
	    }
	  }, {
	    key: 'createLabColumn',
	    value: function createLabColumn(worksheet, labLocation, column) {
	      var _this2 = this;

	      var ws = worksheet;
	      this.createHeader(ws, labLocation, column);
	      this.setInitialColumnFormat(ws, column);
	      ws.getColumn(column).width = 12;

	      var labEvents = this.schedule.labs.find(function (lab) {
	        return lab.name === labLocation;
	      }).classes;

	      labEvents.forEach(function (labEvent) {
	        return _this2.insertLabEvent(ws, labEvent, column);
	      });
	    }
	  }, {
	    key: 'createShiftColumn',
	    value: function createShiftColumn(worksheet, shiftLocation, column) {
	      var _this3 = this;

	      var ws = worksheet;
	      this.createHeader(ws, shiftLocation, column);
	      this.setInitialColumnFormat(ws, column);
	      ws.getColumn(column).width = 12;

	      var shiftEvents = this.shifts.filter(function (shift) {
	        if (shift.location === undefined) {
	          return false;
	        }
	        return shift.location.toLowerCase().trim() === shiftLocation.toLowerCase().trim();
	      });

	      shiftEvents.forEach(function (shiftEvent) {
	        return _this3.insertShiftEvent(ws, shiftEvent, column);
	      });
	    }
	  }, {
	    key: 'createNotesColumn',
	    value: function createNotesColumn(worksheet, column) {
	      var ws = worksheet;
	      ws.getColumn(column).width = 11;
	      this.createHeader(ws, 'Notes', column);
	      applyColumnBorders(ws, this.MIN_ROW, this.MAX_ROW, column);
	      for (var i = this.MIN_ROW; i <= this.MAX_ROW; i += 1) {
	        ws.getCell(i, column).fill = {
	          type: 'pattern',
	          pattern: 'solid',
	          fgColor: { argb: 'FFFFFF' }
	        };
	      }
	    }
	  }, {
	    key: 'insertLabEvent',
	    value: function insertLabEvent(worksheet, labEvent, column) {
	      var ws = worksheet;
	      var name = labEvent.name;
	      var instructor = labEvent.instructor;
	      var startRow = parseInt(this.getRowFromEpoch(labEvent.startTime), 10);
	      // Finding min because if eventName === 'CLOSED' then endTime would be 11:59pm in some cases,
	      // which causes formatting to overwrite rows that are greater than this.MAX_ROW
	      var endRow = parseInt(Math.min(this.getRowFromEpoch(labEvent.endTime) - 1, this.MAX_ROW), 10);
	      var test = {
	          	sheet: worksheet,
	          	class: name,
	          	start: startRow,
	          	col: column,
	          	end: endRow - 2
	          }
	      if (name.trim() !== 'OPEN' && name.trim() !== 'CLOSED') {
	        var startTimeStr = getDateFromEpoch(labEvent.startTime).toString('h:mm');
	        var endTimeStr = getDateFromEpoch(labEvent.endTime).toString('h:mm');
	        ws.getCell(endRow, column).value = startTimeStr + '-' + endTimeStr;
	        ws.getCell(startRow, column).value = name;
	        if (endRow - startRow >= 2) {
	          ws.getCell(endRow - 1, column).value = instructor !== null ? instructor : '';
	          ws.mergeCells(startRow, column, endRow - 2, column);
	        }
	      } else {
	        ws.getCell(endRow, column).value = '';
	        ws.getCell(startRow, column).value = '';
	      }

	      formatLabEventCells(worksheet, startRow, endRow, column, labEvent);
	    }
	  }, {
	    key: 'insertShiftEvent',
	    value: function insertShiftEvent(worksheet, shiftEvent, column) {
	      var ws = worksheet;
	      var employeeName = shiftEvent.summary;
	      var startEpoch = new Date(shiftEvent.start.dateTime).getTime() / 1000;
	      var endEpoch = new Date(shiftEvent.end.dateTime).getTime() / 1000;

	      var startTimeStr = getDateFromEpoch(startEpoch).toString('h:mm');
	      var endTimeStr = getDateFromEpoch(endEpoch).toString('h:mm');

	      var startRow = parseInt(this.getRowFromEpoch(startEpoch), 10);
	      var endRow = parseInt(this.getRowFromEpoch(endEpoch) - 1, 10);

	      ws.getCell(endRow, column).value = startTimeStr + '-' + endTimeStr;
	      ws.getCell(startRow, column).value = employeeName;
	      formatShiftEventCells(ws, startRow, endRow, column);
	    }
	  }]);

	  return DailiesGenerator;
	}();

	exports.default = DailiesGenerator;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	module.exports = require("exceljs");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(7);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _materialUi = __webpack_require__(3);

	var _electron = __webpack_require__(8);

	var _SettingsStore = __webpack_require__(9);

	var _SettingsStore2 = _interopRequireDefault(_SettingsStore);

	var _weekSchedule = __webpack_require__(24);

	var _weekSchedule2 = _interopRequireDefault(_weekSchedule);

	var _weekliesGenerator = __webpack_require__(25);

	var _weekliesGenerator2 = _interopRequireDefault(_weekliesGenerator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var app = _electron.remote.app,
	    dialog = _electron.remote.dialog;

	var Weeklies = function (_React$Component) {
	  _inherits(Weeklies, _React$Component);

	  function Weeklies() {
	    _classCallCheck(this, Weeklies);

	    var _this = _possibleConstructorReturn(this, (Weeklies.__proto__ || Object.getPrototypeOf(Weeklies)).call(this));

	    _this.state = {
	      date: null,
	      snackbarOpen: false,
	      savedFilepath: '',
	      isGenerating: false
	    };
	    return _this;
	  }

	  _createClass(Weeklies, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var styles = {
	        fontWeight: 'normal',
	        textAlign: 'center'
	      };
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h1',
	          { style: styles },
	          'Weeklies'
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: { textAlign: 'center' } },
	          _react2.default.createElement(_materialUi.DatePicker, {
	            autoOk: true,
	            hintText: 'Choose date...',
	            firstDayOfWeek: 0,
	            value: this.state.date,
	            onChange: function onChange(event, date) {
	              return _this2.setState({ date: date });
	            }
	          })
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: { textAlign: 'center' } },
	          _react2.default.createElement(_materialUi.RaisedButton, {
	            disabled: this.state.date === null || this.state.isGenerating,
	            label: this.state.isGenerating ? 'Generating...' : 'Generate',
	            primary: true,
	            onClick: function onClick() {
	              _this2.setState({ isGenerating: true });
	              var firstDayOfWeek = new Date(_this2.state.date.toString());
	              firstDayOfWeek.add({ days: -1 * _this2.state.date.getDay() });
	              var weekSchedule = (0, _weekSchedule2.default)(firstDayOfWeek);
	              weekSchedule.then(function (schedule) {
	                var options = _SettingsStore2.default.getAll().weeklies;
	                var weekliesGenerator = new _weekliesGenerator2.default(firstDayOfWeek, schedule, options);
	                weekliesGenerator.generate();
	                console.log("HELLO2");
	                _this2.setState({ isGenerating: false });
	                var saveDialogOptions = {
	                  filters: [{ name: 'Excel', extensions: ['xlsx'] }, { name: 'All Files', extensions: ['*'] }],
	                  title: 'Save Dailies',
	                  defaultPath: app.getPath('desktop') + '/' + options.filename
	                };
	                dialog.showSaveDialog(saveDialogOptions, function (filepath) {
	                  _this2.setState({ savedFilepath: filepath });
	                  weekliesGenerator.save(filepath).then(function () {
	                    _this2.setState({ snackbarOpen: true });
	                  }).catch(function (error) {
	                    alert(error, 'Error');
	                  });
	                });
	              }).catch(function (error) {
	                _this2.setState({ isGenerating: false });
	      			console.log(error);
	                alert(error + '\nMaybe the collaborate lab schedule site' + ' is not up?', 'Error');
	              });
	            }
	          })
	        ),
	        _react2.default.createElement(_materialUi.Snackbar, {
	          open: this.state.snackbarOpen,
	          message: 'Saved to ' + this.state.savedFilepath,
	          action: 'Open',
	          autoHideDuration: 5000,
	          onActionTouchTap: function onActionTouchTap() {
	            return _electron.shell.openItem(_this2.state.savedFilepath);
	          },
	          onRequestClose: function onRequestClose() {
	            return _this2.setState({ snackbarOpen: false });
	          }
	        })
	      );
	    }
	  }]);

	  return Weeklies;
	}(_react2.default.Component);

	exports.default = Weeklies;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = fetchWeekSchedule;

	var _axios = __webpack_require__(17);

	var _axios2 = _interopRequireDefault(_axios);

	var _schedule = __webpack_require__(16);

	var _schedule2 = _interopRequireDefault(_schedule);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function fetchWeekSchedule(date) {
	  if (date.getDay() !== 0) {
	    // error
	  }
	  var scheduleRequests = [];
	  for (var i = 0; i < 7; i += 1) {
	    var newDate = new Date(date.toString()).add({ days: i });
	    scheduleRequests.push((0, _schedule2.default)(newDate));
	  }

	  var allSchedules = _axios2.default.all(scheduleRequests);
	  var schedule = allSchedules.then(_axios2.default.spread(function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    var schedules = args.map(function (response) {
	      return response.data;
	    });

	    var labs = schedules[0].labs.map(function (currentLab) {
	      var id = currentLab.id;
	      var name = currentLab.name;
	      var classes = schedules.reduce(function (pre, cur) {
	        var currentLabClasses = cur.labs.find(function (lab) {
	          return lab.name === name;
	        }).classes;
	        return pre.concat(currentLabClasses);
	      }, []);
	      return { id: id, name: name, classes: classes };
	    });

	    return { labs: labs };
	  }));

	  return schedule;
	}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _exceljs = __webpack_require__(22);

	var _exceljs2 = _interopRequireDefault(_exceljs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function getDateFromEpoch(epochTime) {
	  var date = new Date(0);
	  date.setUTCSeconds(epochTime);
	  return date;
	}
	function applyColumnBorders(worksheet, startRow, endRow, column) {
	  var ws = worksheet;
	  ws.getCell(startRow, column).border = {
	    top: { style: 'medium' },
	    left: { style: 'medium' },
	    right: { style: 'medium' }
	  };
	  ws.getCell(endRow, column).border = {
	    left: { style: 'medium' },
	    right: { style: 'medium' },
	    bottom: { style: 'medium' }
	  };
	  for (var i = startRow + 1; i < endRow; i += 1) {
	    ws.getCell(i, column).border = {
	      left: { style: 'medium' },
	      right: { style: 'medium' }
	    };
	  }
	}
	function formatClassEventCells(worksheet, startRow, endRow, column, classEvent) {
	  var ws = worksheet;
	  var eventName = classEvent.name;
	  applyColumnBorders(ws, startRow, endRow, column);
	  for (var i = startRow; i <= endRow; i += 1) {
	    ws.getCell(i, column).font = {
	      name: 'Calibri',
	      size: 13
	    };
	    ws.getCell(i, column).alignment = {
	      vertical: 'top',
	      horizontal: 'center',
	      wrapText: true
	    };
	    if (eventName === 'OPEN') {
	      ws.getCell(i, column).fill = {
	        type: 'pattern',
	        pattern: 'solid',
	        fgColor: { argb: 'FFFFFFFF' }
	      };
	    } else if (eventName !== 'OPEN' && eventName !== 'CLOSED') {
	      ws.getCell(i, column).fill = {
	        type: 'pattern',
	        pattern: 'solid',
	        fgColor: { argb: 'FFFAC4' }
	      };
	    }
	  }
	}
	function setPrintFormat(worksheet) {
	  var ws = worksheet;
	  ws.pageSetup.orientation = 'portrait';
	  ws.pageSetup.fitToPage = true;
	  ws.pageSetup.margins = {
	    top: 0.25,
	    left: 0.25,
	    right: 0.25,
	    bottom: 0.25,
	    header: 0.0,
	    footer: 0.0
	  };
	}
	function insertClassEvent(worksheet, classEvent, startRow, endRow, column) {
	  var ws = worksheet;
	  var name = classEvent.name;
	  var instructor = classEvent.instructor;

	  var startTimeStr = getDateFromEpoch(classEvent.startTime).toString('h:mm');
	  var endTimeStr = getDateFromEpoch(classEvent.endTime).toString('h:mm');

	  if (name !== 'CLOSED') {
	    ws.getCell(endRow, column).value = startTimeStr + '-' + endTimeStr;
	  }
	  ws.getCell(startRow, column).value = name;
	  if (endRow - startRow >= 2) {
	    ws.getCell(endRow - 1, column).value = instructor !== null ? instructor : '';
	    ws.mergeCells(startRow, column, endRow - 2, column);
	  }
	  applyColumnBorders(ws, startRow, endRow, column);
	}

	var WeekliesGenerator = function () {
	  function WeekliesGenerator(date, schedule, options) {
	    _classCallCheck(this, WeekliesGenerator);

	    this.date = date;
	    this.schedule = schedule;
	    this.workbook = new _exceljs2.default.Workbook();
	    this.options = options;

	    this.MIN_ROW = 1;
	    this.MAX_ROW = 33;

	    this.MIN_COLUMN = 1;
	    this.MAX_COLUMN = 8;
	  }

	  _createClass(WeekliesGenerator, [{
	    key: 'generate',
	    value: function generate() {
	      var _this = this;

	      console.log("STARTED");
	      console.log(this.schedule.labs)

	      this.schedule.labs.forEach(function (lab) {
	        var worksheet = _this.workbook.addWorksheet(lab.name);
	        var startDateStr = new Date(_this.date.toString()).toString('MM/dd/yyyy');
	        var endDateStr = new Date(_this.date.toString()).add({ days: 6 }).toString('MM/dd/yyyy');
	        _this.createTitle(worksheet, lab.name);
	        _this.createSubTitle(worksheet, startDateStr + ' - ' + endDateStr);
	        _this.createTimeColumn(worksheet);

	        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	        for (var i = 0; i < 7; i += 1) {
	          var column = i + 2;
	          _this.createHeader(worksheet, days[i], column);
	          _this.setInitialColumnFormat(worksheet, column);
	          worksheet.getColumn(column).width = 13;
	        }

	        //console.log(lab)
	        //console.log(lab.classes)

	        lab.classes.forEach(function (classEvent) {
	          var startRow = _this.getRowFromEpoch(classEvent.startTime);
	          var endRow = Math.min(_this.getRowFromEpoch(classEvent.endTime) - 1, _this.MAX_ROW);
	          var column = _this.getColumnFromEpoch(classEvent.endTime);
	          insertClassEvent(worksheet, classEvent, startRow, endRow, column);
	          formatClassEventCells(worksheet, startRow, endRow, column, classEvent);
	        });

	        console.log("FINISHED");
	        var footer = 'Schedules are subject to change. For a current schedule, ' + 'please visit http://labschedule.collaborate.ucsb.edu/';
	        _this.createFooter(worksheet, footer, _this.MAX_ROW + 2);
	        setPrintFormat(worksheet);
	      });
	    }
	  }, {
	    key: 'save',
	    value: function save(filename) {
	      return this.workbook.xlsx.writeFile(filename);
	    }
	  }, {
	    key: 'getRowFromEpoch',
	    value: function getRowFromEpoch(epochTime) {
	      var date = new Date(0);
	      date.setUTCSeconds(epochTime);

	      var hours = date.getHours();
	      var minutes = date.getMinutes();

	      var row = 2 * (hours + minutes / 60) + (2 - this.MIN_ROW) - 1;
	      return row;
	    }
	  }, {
	    key: 'getColumnFromEpoch',
	    value: function getColumnFromEpoch(epochTime) {
	      var date = new Date(0);
	      date.setUTCSeconds(epochTime);

	      var column = date.getDay() + this.MIN_ROW + 1;
	      return column;
	    }
	  }, {
	    key: 'setInitialColumnFormat',
	    value: function setInitialColumnFormat(worksheet, column) {
	      var ws = worksheet;

	      var rowOffset = 3;
	      var startRow = this.MIN_ROW + rowOffset;
	      var endRow = this.MAX_ROW;

	      for (var i = startRow; i <= endRow; i += 1) {
	        ws.getRow(i).height = 20;
	        ws.getCell(i, column).value = '';
	        ws.getCell(i, column).fill = {
	          type: 'pattern',
	          pattern: 'solid',
	          fgColor: { argb: '808080' }
	        };

	        if (i === this.MIN_ROW) {
	          ws.getCell(i, column).border = {
	            top: { style: 'medium' },
	            left: { style: 'medium' },
	            right: { style: 'medium' }
	          };
	        } else if (i === this.MAX_ROW) {
	          ws.getCell(i, column).border = {
	            bottom: { style: 'medium' },
	            left: { style: 'medium' },
	            right: { style: 'medium' }
	          };
	        } else {
	          ws.getCell(i, column).border = {
	            left: { style: 'medium' },
	            right: { style: 'medium' }
	          };
	        }
	      }
	    }
	  }, {
	    key: 'createHeader',
	    value: function createHeader(worksheet, header, column) {
	      var ws = worksheet;
	      var styles = {
	        font: {
	          name: 'Calibri',
	          size: 13,
	          bold: true
	        },
	        alignment: {
	          vertical: 'middle',
	          horizontal: 'center',
	          wrapText: true
	        },
	        border: {
	          top: { style: 'medium' },
	          left: { style: 'medium' },
	          bottom: { style: 'medium' },
	          right: { style: 'medium' }
	        }
	      };
	      var row = this.MIN_ROW + 2;
	      ws.getRow(row).height = 20;

	      ws.getCell(row, column).value = header;

	      ws.getCell(row, column).font = styles.font;
	      ws.getCell(row, column).alignment = styles.alignment;
	      ws.getCell(row, column).border = styles.border;
	    }
	  }, {
	    key: 'createTitle',
	    value: function createTitle(worksheet, title) {
	      var ws = worksheet;
	      var row = this.MIN_ROW;
	      var startColumn = this.MIN_ROW;
	      var endColumn = this.MAX_COLUMN;
	      ws.mergeCells(row, row, startColumn, endColumn);
	      ws.getRow(row).height = 30;
	      ws.getCell(row, startColumn).value = title;
	      ws.getCell(row, startColumn).font = {
	        name: 'Verdanana',
	        size: 24
	      };
	      ws.getCell(1, 1).alignment = {
	        vertical: 'middle',
	        horizontal: 'center'
	      };
	    }
	  }, {
	    key: 'createSubTitle',
	    value: function createSubTitle(worksheet, subTitle) {
	      var ws = worksheet;
	      ws.mergeCells(2, 1, 2, this.MAX_COLUMN);
	      ws.getCell(2, 1).value = subTitle;
	      ws.getCell(2, 1).font = {
	        name: 'Verdanana',
	        size: 11
	      };
	      ws.getCell(2, 1).alignment = {
	        vertical: 'middle',
	        horizontal: 'center'
	      };
	    }
	  }, {
	    key: 'createTimeColumn',
	    value: function createTimeColumn(worksheet) {
	      var ws = worksheet;
	      var column = this.MIN_ROW;
	      this.createHeader(ws, 'Time', column);

	      this.setInitialColumnFormat(ws, column);

	      var rowOffset = 3;
	      var startRow = this.MIN_ROW + rowOffset;
	      var endRow = this.MAX_ROW;

	      var date = Date.parse('8:00am');
	      for (var i = startRow; i <= endRow; i += 1) {
	        ws.getRow(i).height = 30;
	        var timeString = date.toString('hh:mm tt');
	        ws.getCell(i, column).value = timeString;
	        ws.getCell(i, column).fill = {
	          type: 'pattern',
	          pattern: 'solid',
	          fgColor: { argb: 'FFFFFFFF' }
	        };
	        ws.getCell(i, column).alignment = {
	          vertical: 'top',
	          horizontal: 'center',
	          wrapText: true
	        };
	        date.add({ minutes: 30 });
	      }
	    }
	  }, {
	    key: 'createFooter',
	    value: function createFooter(worksheet, footer, row) {
	      var ws = worksheet;
	      ws.mergeCells(row, this.MIN_COLUMN, row, this.MAX_COLUMN);
	      ws.getCell(row, this.MIN_COLUMN).value = footer;
	      ws.getCell(row, this.MIN_COLUMN).alignment = {
	        vertical: 'top',
	        horizontal: 'center',
	        wrapText: true
	      };
	    }
	  }]);

	  return WeekliesGenerator;
	}();

	exports.default = WeekliesGenerator;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _SettingsStore = __webpack_require__(9);

	var _SettingsStore2 = _interopRequireDefault(_SettingsStore);

	var _DailiesSettings = __webpack_require__(27);

	var _DailiesSettings2 = _interopRequireDefault(_DailiesSettings);

	var _WeekliesSettings = __webpack_require__(38);

	var _WeekliesSettings2 = _interopRequireDefault(_WeekliesSettings);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Settings = function (_React$Component) {
	  _inherits(Settings, _React$Component);

	  function Settings() {
	    _classCallCheck(this, Settings);

	    var _this = _possibleConstructorReturn(this, (Settings.__proto__ || Object.getPrototypeOf(Settings)).call(this));

	    _this.state = {
	      settings: _SettingsStore2.default.getAll()
	    };
	    _this.getSettings = _this.getSettings.bind(_this);
	    return _this;
	  }

	  _createClass(Settings, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      _SettingsStore2.default.on('change', this.getSettings);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      _SettingsStore2.default.removeListener('change', this.getSettings);
	    }
	  }, {
	    key: 'getSettings',
	    value: function getSettings() {
	      this.setState({
	        settings: _SettingsStore2.default.getAll()
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { style: { padding: '0 3em' } },
	        _react2.default.createElement(
	          'h1',
	          { style: { fontWeight: 'normal', textAlign: 'center' } },
	          'Settings'
	        ),
	        _react2.default.createElement(_DailiesSettings2.default, { settings: this.state.settings.dailies }),
	        _react2.default.createElement(_WeekliesSettings2.default, { settings: this.state.settings.weeklies })
	      );
	    }
	  }]);

	  return Settings;
	}(_react2.default.Component);

	exports.default = Settings;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _TextSettingsItem = __webpack_require__(28);

	var _TextSettingsItem2 = _interopRequireDefault(_TextSettingsItem);

	var _LocationSettingsItem = __webpack_require__(29);

	var _LocationSettingsItem2 = _interopRequireDefault(_LocationSettingsItem);

	var _NewLocationGroup = __webpack_require__(37);

	var _NewLocationGroup2 = _interopRequireDefault(_NewLocationGroup);

	var _DailiesSettingsActions = __webpack_require__(31);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DailiesSettings = function DailiesSettings(_ref) {
	  var settings = _ref.settings;

	  var locationGroups = settings.locationGroups || [];
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'h2',
	      { style: { fontWeight: 'normal' } },
	      'Dailies'
	    ),
	    _react2.default.createElement(
	      'div',
	      { style: { paddingLeft: '1em' } },
	      _react2.default.createElement(
	        'label',
	        { htmlFor: 'dailies-calendar-id' },
	        'Calendar ID:',
	        _react2.default.createElement(
	          'div',
	          { style: { marginLeft: '1em' } },
	          _react2.default.createElement(_TextSettingsItem2.default, {
	            id: 'dailies-calendar-id',
	            value: settings.calendarId,
	            onValueChange: _DailiesSettingsActions.updateCalendarId
	          })
	        )
	      ),
	      _react2.default.createElement(
	        'label',
	        { htmlFor: 'dailies-filename' },
	        'Default filename:',
	        _react2.default.createElement(
	          'div',
	          { style: { marginLeft: '1em' } },
	          _react2.default.createElement(_TextSettingsItem2.default, {
	            id: 'dailies-filename',
	            value: settings.filename,
	            onValueChange: _DailiesSettingsActions.updateFilename
	          })
	        )
	      ),
	      _react2.default.createElement(
	        'label',
	        { htmlFor: 'dailies-location-groups' },
	        'Location groups:',
	        _react2.default.createElement(
	          'div',
	          { style: { marginLeft: '1em' } },
	          locationGroups.map(function (locationGroup) {
	            return _react2.default.createElement(_LocationSettingsItem2.default, {
	              key: locationGroup.id,
	              label: locationGroup.name,
	              locationGroup: locationGroup
	            });
	          }),
	          _react2.default.createElement(_NewLocationGroup2.default, null)
	        )
	      )
	    )
	  );
	};

	DailiesSettings.propTypes = {
	  settings: _react2.default.PropTypes.shape({
	    calendarId: _react2.default.PropTypes.string,
	    filename: _react2.default.PropTypes.string,
	    filepath: _react2.default.PropTypes.string,
	    locationGroups: _react2.default.PropTypes.array
	  })
	};

	exports.default = DailiesSettings;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _materialUi = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TextSettingsItem = function TextSettingsItem(_ref) {
	  var id = _ref.id,
	      value = _ref.value,
	      onValueChange = _ref.onValueChange;
	  return _react2.default.createElement(
	    'div',
	    { id: id },
	    _react2.default.createElement(_materialUi.TextField, {
	      id: id,
	      value: value,
	      fullWidth: true,
	      onChange: function onChange(e) {
	        return onValueChange(e.target.value);
	      }
	    })
	  );
	};

	TextSettingsItem.propTypes = {
	  id: _react2.default.PropTypes.string,
	  value: _react2.default.PropTypes.string,
	  onValueChange: _react2.default.PropTypes.func
	};

	exports.default = TextSettingsItem;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _materialUi = __webpack_require__(3);

	var _chevronRight = __webpack_require__(30);

	var _chevronRight2 = _interopRequireDefault(_chevronRight);

	var _DailiesSettingsActions = __webpack_require__(31);

	var _RemoveGroupButton = __webpack_require__(32);

	var _RemoveGroupButton2 = _interopRequireDefault(_RemoveGroupButton);

	var _LabLocationsList = __webpack_require__(33);

	var _LabLocationsList2 = _interopRequireDefault(_LabLocationsList);

	var _ShiftLocationsList = __webpack_require__(34);

	var _ShiftLocationsList2 = _interopRequireDefault(_ShiftLocationsList);

	var _labs = __webpack_require__(36);

	var _labs2 = _interopRequireDefault(_labs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LocationSettingsItem = function (_React$Component) {
	  _inherits(LocationSettingsItem, _React$Component);

	  function LocationSettingsItem() {
	    _classCallCheck(this, LocationSettingsItem);

	    var _this = _possibleConstructorReturn(this, (LocationSettingsItem.__proto__ || Object.getPrototypeOf(LocationSettingsItem)).call(this));

	    _this.state = {
	      modalOpen: false,
	      shiftLocationValue: '',
	      allLabLocations: []
	    };
	    return _this;
	  }

	  _createClass(LocationSettingsItem, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      (0, _labs2.default)().then(function (response) {
	        _this2.setState({
	          allLabLocations: response.data
	        });
	      });
	    }
	  }, {
	    key: 'openModal',
	    value: function openModal() {
	      this.setState({ modalOpen: true });
	    }
	  }, {
	    key: 'closeModal',
	    value: function closeModal() {
	      this.setState({ modalOpen: false });
	    }
	  }, {
	    key: 'resetState',
	    value: function resetState() {
	      this.setState({ shiftLocationValue: '' });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      var actions = [_react2.default.createElement(_materialUi.RaisedButton, {
	        label: 'Done',
	        primary: true,
	        onTouchTap: function onTouchTap() {
	          _this3.resetState();
	          _this3.closeModal();
	        }
	      })];
	      var labLocations = this.props.locationGroup.labLocations || [];
	      var shiftLocations = this.props.locationGroup.shiftLocations || [];
	      var locationGroupId = this.props.locationGroup.id;
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_materialUi.MenuItem, {
	          onClick: function onClick() {
	            return _this3.openModal();
	          },
	          primaryText: this.props.label,
	          rightIcon: _react2.default.createElement(_chevronRight2.default, null)
	        }),
	        _react2.default.createElement(
	          _materialUi.Dialog,
	          {
	            open: this.state.modalOpen,
	            title: this.props.locationGroup.name,
	            actions: actions,
	            autoScrollBodyContent: true,
	            modal: true
	          },
	          _react2.default.createElement(
	            'label',
	            { htmlFor: 'location-group-name' },
	            'Edit name:',
	            _react2.default.createElement(_materialUi.TextField, {
	              id: 'location-group-name',
	              defaultValue: this.props.locationGroup.name,
	              onBlur: function onBlur(e) {
	                return (0, _DailiesSettingsActions.setLocationGroupName)(_this3.props.locationGroup.id, e.target.value);
	              }
	            })
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: { display: 'inline-block', float: 'right' } },
	            _react2.default.createElement(_RemoveGroupButton2.default, { locationGroupId: this.props.locationGroup.id })
	          ),
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(_LabLocationsList2.default, {
	              locationGroupId: locationGroupId,
	              labLocations: labLocations,
	              allLabLocations: this.state.allLabLocations
	            }),
	            _react2.default.createElement(_ShiftLocationsList2.default, {
	              locationGroupId: locationGroupId,
	              shiftLocations: shiftLocations
	            })
	          )
	        )
	      );
	    }
	  }]);

	  return LocationSettingsItem;
	}(_react2.default.Component);

	exports.default = LocationSettingsItem;


	LocationSettingsItem.propTypes = {
	  label: _react2.default.PropTypes.string,
	  locationGroup: _react2.default.PropTypes.shape({
	    id: _react2.default.PropTypes.string,
	    name: _react2.default.PropTypes.string,
	    labLocations: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string),
	    shiftLocations: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string)
	  })
	};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	module.exports = require("material-ui/svg-icons/navigation/chevron-right");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.updateCalendarId = updateCalendarId;
	exports.updateFilename = updateFilename;
	exports.addLocationGroup = addLocationGroup;
	exports.setLocationGroupName = setLocationGroupName;
	exports.addLabLocation = addLabLocation;
	exports.removeLabLocation = removeLabLocation;
	exports.addShiftLocation = addShiftLocation;
	exports.removeShiftLocation = removeShiftLocation;
	exports.removeLocationGroup = removeLocationGroup;
	exports.updateLocationGroup = updateLocationGroup;

	var _dispatcher = __webpack_require__(14);

	var _dispatcher2 = _interopRequireDefault(_dispatcher);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function updateCalendarId(calendarId) {
	  _dispatcher2.default.dispatch({
	    calendarId: calendarId,
	    type: 'UPDATE_DAILIES_CALENDAR_ID'
	  });
	}

	function updateFilename(filename) {
	  _dispatcher2.default.dispatch({
	    filename: filename,
	    type: 'UPDATE_DAILIES_FILENAME'
	  });
	}

	function addLocationGroup(locationGroupName) {
	  _dispatcher2.default.dispatch({
	    locationGroupName: locationGroupName,
	    type: 'ADD_DAILIES_LOCATION_GROUP'
	  });
	}

	function setLocationGroupName(locationGroupId, newLocationGroupName) {
	  _dispatcher2.default.dispatch({
	    locationGroupId: locationGroupId,
	    newLocationGroupName: newLocationGroupName,
	    type: 'SET_DAILIES_LOCATION_GROUP_NAME'
	  });
	}

	function addLabLocation(locationGroupId, labLocationToAdd) {
	  _dispatcher2.default.dispatch({
	    locationGroupId: locationGroupId,
	    labLocationToAdd: labLocationToAdd,
	    type: 'ADD_DAILIES_LAB_LOCATION'
	  });
	}

	function removeLabLocation(locationGroupId, labLocationToRemove) {
	  _dispatcher2.default.dispatch({
	    locationGroupId: locationGroupId,
	    labLocationToRemove: labLocationToRemove,
	    type: 'REMOVE_DAILIES_LAB_LOCATION'
	  });
	}

	function addShiftLocation(locationGroupId, shiftLocationToAdd) {
	  _dispatcher2.default.dispatch({
	    locationGroupId: locationGroupId,
	    shiftLocationToAdd: shiftLocationToAdd,
	    type: 'ADD_DAILIES_SHIFT_LOCATION'
	  });
	}

	function removeShiftLocation(locationGroupId, shiftLocationToRemove) {
	  _dispatcher2.default.dispatch({
	    locationGroupId: locationGroupId,
	    shiftLocationToRemove: shiftLocationToRemove,
	    type: 'REMOVE_DAILIES_SHIFT_LOCATION'
	  });
	}

	function removeLocationGroup(locationGroupId) {
	  _dispatcher2.default.dispatch({
	    locationGroupId: locationGroupId,
	    type: 'REMOVE_DAILIES_LOCATION_GROUP'
	  });
	}

	function updateLocationGroup(locationGroup) {
	  _dispatcher2.default.dispatch({
	    locationGroup: locationGroup,
	    type: 'UPDATE_DAILIES_LOCATION_GROUP'
	  });
	}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _materialUi = __webpack_require__(3);

	var _DailiesSettingsActions = __webpack_require__(31);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RemoveGroupButton = function (_React$Component) {
	  _inherits(RemoveGroupButton, _React$Component);

	  function RemoveGroupButton() {
	    _classCallCheck(this, RemoveGroupButton);

	    var _this = _possibleConstructorReturn(this, (RemoveGroupButton.__proto__ || Object.getPrototypeOf(RemoveGroupButton)).call(this));

	    _this.state = {
	      showConfirmation: false
	    };
	    return _this;
	  }

	  _createClass(RemoveGroupButton, [{
	    key: 'showConfirmation',
	    value: function showConfirmation() {
	      this.setState({ showConfirmation: true });
	    }
	  }, {
	    key: 'hideConfirmation',
	    value: function hideConfirmation() {
	      this.setState({ showConfirmation: false });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { style: { display: !this.state.showConfirmation ? 'block' : 'none' } },
	          _react2.default.createElement(_materialUi.RaisedButton, {
	            onClick: function onClick() {
	              return _this2.showConfirmation();
	            },
	            backgroundColor: '#cc0000',
	            labelColor: 'white',
	            label: 'Remove group'
	          })
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: { display: this.state.showConfirmation ? 'block' : 'none' } },
	          'Are you sure?',
	          _react2.default.createElement(_materialUi.RaisedButton, {
	            style: { margin: '0 .5em' },
	            backgroundColor: '#cc0000',
	            labelColor: 'white',
	            label: 'Yes',
	            onClick: function onClick() {
	              return (0, _DailiesSettingsActions.removeLocationGroup)(_this2.props.locationGroupId);
	            }
	          }),
	          _react2.default.createElement(_materialUi.RaisedButton, {
	            style: { margin: '0 .5em' },
	            label: 'No',
	            onClick: function onClick() {
	              return _this2.hideConfirmation();
	            }
	          })
	        )
	      );
	    }
	  }]);

	  return RemoveGroupButton;
	}(_react2.default.Component);

	exports.default = RemoveGroupButton;


	RemoveGroupButton.propTypes = {
	  locationGroupId: _react2.default.PropTypes.string.isRequired
	};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _materialUi = __webpack_require__(3);

	var _DailiesSettingsActions = __webpack_require__(31);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var LabLocationsList = function LabLocationsList(_ref) {
	  var locationGroupId = _ref.locationGroupId,
	      labLocations = _ref.labLocations,
	      allLabLocations = _ref.allLabLocations;

	  var styles = {
	    display: 'inline-block',
	    width: '50%',
	    verticalAlign: 'top'
	  };
	  return _react2.default.createElement(
	    'div',
	    { style: styles },
	    _react2.default.createElement(
	      'h3',
	      { style: { textAlign: 'center', fontWeight: 'normal' } },
	      'Lab Locations'
	    ),
	    _react2.default.createElement(
	      'div',
	      null,
	      allLabLocations.map(function (labLocation) {
	        return _react2.default.createElement(_materialUi.Checkbox, {
	          key: labLocation,
	          label: labLocation,
	          checked: labLocations.includes(labLocation),
	          onCheck: function onCheck(e, isChecked) {
	            if (isChecked) {
	              (0, _DailiesSettingsActions.addLabLocation)(locationGroupId, labLocation);
	            } else {
	              (0, _DailiesSettingsActions.removeLabLocation)(locationGroupId, labLocation);
	            }
	          }
	        });
	      })
	    )
	  );
	};

	LabLocationsList.propTypes = {
	  locationGroupId: _react2.default.PropTypes.string,
	  labLocations: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string),
	  allLabLocations: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string)
	};

	exports.default = LabLocationsList;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _materialUi = __webpack_require__(3);

	var _close = __webpack_require__(35);

	var _close2 = _interopRequireDefault(_close);

	var _DailiesSettingsActions = __webpack_require__(31);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ShiftLocationList = function (_React$Component) {
	  _inherits(ShiftLocationList, _React$Component);

	  function ShiftLocationList() {
	    _classCallCheck(this, ShiftLocationList);

	    var _this = _possibleConstructorReturn(this, (ShiftLocationList.__proto__ || Object.getPrototypeOf(ShiftLocationList)).call(this));

	    _this.state = {
	      shiftLocationValue: ''
	    };
	    return _this;
	  }

	  _createClass(ShiftLocationList, [{
	    key: 'resetState',
	    value: function resetState() {
	      this.setState({ shiftLocationValue: '' });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var styles = {
	        display: 'inline-block',
	        width: '50%',
	        verticalAlign: 'top'
	      };
	      var locationGroupId = this.props.locationGroupId;

	      return _react2.default.createElement(
	        'div',
	        { style: styles },
	        _react2.default.createElement(
	          'h3',
	          { style: { textAlign: 'center', fontWeight: 'normal' } },
	          'Shift Locations'
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          this.props.shiftLocations.map(function (shiftLocation) {
	            return _react2.default.createElement(_materialUi.ListItem, {
	              key: shiftLocation,
	              disabled: true,
	              rightIconButton: _react2.default.createElement(
	                _materialUi.IconButton,
	                {
	                  onClick: function onClick() {
	                    return (0, _DailiesSettingsActions.removeShiftLocation)(locationGroupId, shiftLocation);
	                  }
	                },
	                _react2.default.createElement(_close2.default, null)
	              ),
	              primaryText: shiftLocation
	            });
	          })
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(_materialUi.TextField, {
	            value: this.state.shiftLocationValue,
	            hintText: 'New shift location',
	            onChange: function onChange(e) {
	              return _this2.setState({ shiftLocationValue: e.target.value });
	            },
	            onKeyDown: function onKeyDown(e) {
	              if (e.keyCode === 13) {
	                (0, _DailiesSettingsActions.addShiftLocation)(locationGroupId, _this2.state.shiftLocationValue);
	                _this2.resetState();
	              }
	            }
	          }),
	          _react2.default.createElement(_materialUi.RaisedButton, {
	            label: 'Add',
	            disabled: this.state.shiftLocationValue.length === 0,
	            onClick: function onClick() {
	              (0, _DailiesSettingsActions.addShiftLocation)(locationGroupId, _this2.state.shiftLocationValue);
	              _this2.resetState();
	            }
	          })
	        )
	      );
	    }
	  }]);

	  return ShiftLocationList;
	}(_react2.default.Component);

	exports.default = ShiftLocationList;


	ShiftLocationList.propTypes = {
	  locationGroupId: _react2.default.PropTypes.string,
	  shiftLocations: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string)
	};

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	module.exports = require("material-ui/svg-icons/navigation/close");

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = fetchLabs;

	var _axios = __webpack_require__(17);

	var _axios2 = _interopRequireDefault(_axios);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getJSON(data) {
	  var jsonBegin = 'UCAL.init(';
	  var jsonEnd = ');});<';

	  var beginIndex = data.indexOf(jsonBegin) + jsonBegin.length;
	  var endIndex = data.indexOf(jsonEnd);

	  var jsonString = '[' + data.slice(beginIndex, endIndex) + ']';

	  var base_url = 'https://www.aaiscloud.com/UCA_SantaBarbara/~api/calendar/calendarList?action=get?view=json&fields=ActivityName,StartDate,EndDate,StartMinute,EndMinute,BuildingCode,RoomNumber&filter=';

	  var labLocations = '("c169abb2-4e33-4a06-a8c8-7bb92dcb35af","3dd67f3c-d656-4661-ad21-749afbbd68ee","d35b75db-028a-4274-a069-2be6baafc4e9","8e1190da-a1a2-4b19-ac0e-ba85528d974d","5a7b7919-3835-4ee3-8a76-3cd86ceeb120","c889c6c7-e37f-4793-8011-07fa6de1cf03","39f1e083-32ea-43b1-95cc-9f158965d62e","7fe39899-543f-4552-b846-b95c7f4192ba","072f7006-7417-4fed-9069-e37c4f6ae6a8","1128e303-8e56-4d30-b225-7ced362dc9fe","b0d90fb9-282a-46cf-b75b-a1dfadaae8e5","fe81c030-a27c-4fc5-928e-3f050922f867","368bc8e5-e304-41b4-806b-24af571298fd","d2ff24c6-0033-4fab-94bb-d76e7c4fa008","9ea261e2-4f56-4d26-89a9-be2c730450c4","78808043-d705-4013-a5f5-450193826920","e47668a2-007e-426f-86dd-5c48968a2df2","99412324-d216-4ec9-9f7a-be6af9069d2c","22b8f3e3-0c31-42d9-9b82-3d5c2ea117fd","f9c21d18-2d35-4437-b52a-2c1e9b6fdd0f")';
	  var fullUrl = base_url + 'StartDate=="' + formattedDate + '"%26%26' + 'Location.RoomId in ' + labLocations;

	  //return JSON.parse(jsonString);
	  return JSON.parse(fullUrl);
	}

	// Parses labNames from html data containg class events and lab data
	function getLabs(data) {
	  var jsonObject = getJSON(data);

	  console.log(jsonObject);

	  var dateStart = jsonObject[0].date_start;
	  var labEvents = jsonObject[1];

	  var labs = Object.keys(labEvents).filter(function (key) {
	    return dateStart === labEvents[key].start;
	  }).map(function (key) {
	    return labEvents[key].name;
	  }).sort();

	  return labs;
	}

	function fetchLabs() {
		console.log("fetchinglabs");
	  var url = 'http://labschedule.collaborate.ucsb.edu/';

	  var options = {
	    transformResponse: getLabs
	  };

	  return _axios2.default.get(url, options);
	}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _materialUi = __webpack_require__(3);

	var _DailiesSettingsActions = __webpack_require__(31);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NewLocationGroup = function (_React$Component) {
	  _inherits(NewLocationGroup, _React$Component);

	  function NewLocationGroup() {
	    _classCallCheck(this, NewLocationGroup);

	    var _this = _possibleConstructorReturn(this, (NewLocationGroup.__proto__ || Object.getPrototypeOf(NewLocationGroup)).call(this));

	    _this.state = {
	      modalOpen: false,
	      locationGroupName: ''
	    };
	    return _this;
	  }

	  _createClass(NewLocationGroup, [{
	    key: 'openModal',
	    value: function openModal() {
	      this.setState({ modalOpen: true });
	    }
	  }, {
	    key: 'closeModal',
	    value: function closeModal() {
	      this.setState({ modalOpen: false });
	    }
	  }, {
	    key: 'resetState',
	    value: function resetState() {
	      this.setState({ locationGroupName: '' });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var actions = [_react2.default.createElement(_materialUi.RaisedButton, {
	        style: { margin: '0 .5em' },
	        label: 'Cancel',
	        onTouchTap: function onTouchTap() {
	          _this2.resetState();
	          _this2.closeModal();
	        }
	      }), _react2.default.createElement(_materialUi.RaisedButton, {
	        style: { margin: '0 .5em' },
	        disabled: this.state.locationGroupName === '',
	        label: 'Add',
	        primary: true,
	        onTouchTap: function onTouchTap() {
	          (0, _DailiesSettingsActions.addLocationGroup)(_this2.state.locationGroupName);
	          _this2.resetState();
	          _this2.closeModal();
	        }
	      })];
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_materialUi.RaisedButton, {
	          label: 'Add new location group',
	          onClick: function onClick() {
	            return _this2.openModal();
	          },
	          primary: true,
	          fullWidth: true
	        }),
	        _react2.default.createElement(
	          _materialUi.Dialog,
	          {
	            open: this.state.modalOpen,
	            title: 'Add new location group',
	            actions: actions,
	            modal: true
	          },
	          _react2.default.createElement(_materialUi.TextField, {
	            id: 'add-location-group',
	            hintText: 'Location group name',
	            value: this.state.locationGroupName,
	            onChange: function onChange(e) {
	              return _this2.setState({ locationGroupName: e.target.value });
	            }
	          })
	        )
	      );
	    }
	  }]);

	  return NewLocationGroup;
	}(_react2.default.Component);

	exports.default = NewLocationGroup;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _TextSettingsItem = __webpack_require__(28);

	var _TextSettingsItem2 = _interopRequireDefault(_TextSettingsItem);

	var _WeekliesSettingsActions = __webpack_require__(39);

	var _WeekliesSettingsActions2 = _interopRequireDefault(_WeekliesSettingsActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var WeekliesSettings = function WeekliesSettings(_ref) {
	  var settings = _ref.settings;
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'h2',
	      { style: { fontWeight: 'normal' } },
	      'Weeklies'
	    ),
	    _react2.default.createElement(
	      'div',
	      { style: { paddingLeft: '1em' } },
	      _react2.default.createElement(
	        'label',
	        { htmlFor: 'weeklies-filename' },
	        'Default filename:',
	        _react2.default.createElement(
	          'div',
	          { style: { marginLeft: '1em' } },
	          _react2.default.createElement(_TextSettingsItem2.default, {
	            id: 'weeklies-filename',
	            value: settings.filename,
	            onValueChange: _WeekliesSettingsActions2.default
	          })
	        )
	      )
	    )
	  );
	};

	WeekliesSettings.propTypes = {
	  settings: _react2.default.PropTypes.shape({
	    filename: _react2.default.PropTypes.string,
	    filepath: _react2.default.PropTypes.string
	  })
	};

	exports.default = WeekliesSettings;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = updateFilename;

	var _dispatcher = __webpack_require__(14);

	var _dispatcher2 = _interopRequireDefault(_dispatcher);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function updateFilename(filename) {
	  _dispatcher2.default.dispatch({
	    filename: filename,
	    type: 'UPDATE_WEEKLIES_FILENAME'
	  });
	}

/***/ })
/******/ ]);