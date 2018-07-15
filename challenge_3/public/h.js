'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginControl = function (_React$Component) {
  _inherits(LoginControl, _React$Component);

  function LoginControl(props) {
    _classCallCheck(this, LoginControl);

    var _this = _possibleConstructorReturn(this, (LoginControl.__proto__ || Object.getPrototypeOf(LoginControl)).call(this, props));

    _this.handleLoginClick = _this.handleLoginClick.bind(_this);
    _this.handleLogoutClick = _this.handleLogoutClick.bind(_this);
    _this.state = { isLoggedIn: false };
    return _this;
  }

  _createClass(LoginControl, [{
    key: 'handleLoginClick',
    value: function handleLoginClick() {
      this.setState({ isLoggedIn: true });
    }
  }, {
    key: 'handleLogoutClick',
    value: function handleLogoutClick() {
      this.setState({ isLoggedIn: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var isLoggedIn = this.state.isLoggedIn;
      var button = void 0;

      if (isLoggedIn) {
        button = React.createElement(LogoutButton, { onClick: this.handleLogoutClick });
      } else {
        button = React.createElement(LoginButton, { onClick: this.handleLoginClick });
      }

      return React.createElement(
        'div',
        null,
        React.createElement(Greeting, { isLoggedIn: isLoggedIn }),
        button
      );
    }
  }]);

  return LoginControl;
}(React.Component);

function UserGreeting(props) {
  return React.createElement(
    'h1',
    null,
    'Welcome back!'
  );
}

function GuestGreeting(props) {
  return React.createElement(
    'h1',
    null,
    'Please sign up.'
  );
}

function Greeting(props) {
  var isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return React.createElement(UserGreeting, null);
  }
  return React.createElement(GuestGreeting, null);
}

function LoginButton(props) {
  return React.createElement(
    'button',
    { onClick: props.onClick },
    'Login'
  );
}

function LogoutButton(props) {
  return React.createElement(
    'button',
    { onClick: props.onClick },
    'Logout'
  );
}

ReactDOM.render(React.createElement(LoginControl, null), document.getElementById('root'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9oLmpzIl0sIm5hbWVzIjpbIkxvZ2luQ29udHJvbCIsInByb3BzIiwiaGFuZGxlTG9naW5DbGljayIsImJpbmQiLCJoYW5kbGVMb2dvdXRDbGljayIsInN0YXRlIiwiaXNMb2dnZWRJbiIsInNldFN0YXRlIiwiYnV0dG9uIiwiUmVhY3QiLCJDb21wb25lbnQiLCJVc2VyR3JlZXRpbmciLCJHdWVzdEdyZWV0aW5nIiwiR3JlZXRpbmciLCJMb2dpbkJ1dHRvbiIsIm9uQ2xpY2siLCJMb2dvdXRCdXR0b24iLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsWTs7O0FBQ0osd0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw0SEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JDLElBQXRCLE9BQXhCO0FBQ0EsVUFBS0MsaUJBQUwsR0FBeUIsTUFBS0EsaUJBQUwsQ0FBdUJELElBQXZCLE9BQXpCO0FBQ0EsVUFBS0UsS0FBTCxHQUFhLEVBQUNDLFlBQVksS0FBYixFQUFiO0FBSmlCO0FBS2xCOzs7O3VDQUVrQjtBQUNqQixXQUFLQyxRQUFMLENBQWMsRUFBQ0QsWUFBWSxJQUFiLEVBQWQ7QUFDRDs7O3dDQUVtQjtBQUNsQixXQUFLQyxRQUFMLENBQWMsRUFBQ0QsWUFBWSxLQUFiLEVBQWQ7QUFDRDs7OzZCQUVRO0FBQ1AsVUFBTUEsYUFBYSxLQUFLRCxLQUFMLENBQVdDLFVBQTlCO0FBQ0EsVUFBSUUsZUFBSjs7QUFFQSxVQUFJRixVQUFKLEVBQWdCO0FBQ2RFLGlCQUFTLG9CQUFDLFlBQUQsSUFBYyxTQUFTLEtBQUtKLGlCQUE1QixHQUFUO0FBQ0QsT0FGRCxNQUVPO0FBQ0xJLGlCQUFTLG9CQUFDLFdBQUQsSUFBYSxTQUFTLEtBQUtOLGdCQUEzQixHQUFUO0FBQ0Q7O0FBRUQsYUFDRTtBQUFBO0FBQUE7QUFDRSw0QkFBQyxRQUFELElBQVUsWUFBWUksVUFBdEIsR0FERjtBQUVHRTtBQUZILE9BREY7QUFNRDs7OztFQWhDd0JDLE1BQU1DLFM7O0FBbUNqQyxTQUFTQyxZQUFULENBQXNCVixLQUF0QixFQUE2QjtBQUMzQixTQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBUDtBQUNEOztBQUVELFNBQVNXLGFBQVQsQ0FBdUJYLEtBQXZCLEVBQThCO0FBQzVCLFNBQU87QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFQO0FBQ0Q7O0FBRUQsU0FBU1ksUUFBVCxDQUFrQlosS0FBbEIsRUFBeUI7QUFDdkIsTUFBTUssYUFBYUwsTUFBTUssVUFBekI7QUFDQSxNQUFJQSxVQUFKLEVBQWdCO0FBQ2QsV0FBTyxvQkFBQyxZQUFELE9BQVA7QUFDRDtBQUNELFNBQU8sb0JBQUMsYUFBRCxPQUFQO0FBQ0Q7O0FBRUQsU0FBU1EsV0FBVCxDQUFxQmIsS0FBckIsRUFBNEI7QUFDMUIsU0FDRTtBQUFBO0FBQUEsTUFBUSxTQUFTQSxNQUFNYyxPQUF2QjtBQUFBO0FBQUEsR0FERjtBQUtEOztBQUVELFNBQVNDLFlBQVQsQ0FBc0JmLEtBQXRCLEVBQTZCO0FBQzNCLFNBQ0U7QUFBQTtBQUFBLE1BQVEsU0FBU0EsTUFBTWMsT0FBdkI7QUFBQTtBQUFBLEdBREY7QUFLRDs7QUFFREUsU0FBU0MsTUFBVCxDQUNFLG9CQUFDLFlBQUQsT0FERixFQUVFQyxTQUFTQyxjQUFULENBQXdCLE1BQXhCLENBRkYiLCJmaWxlIjoiaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIExvZ2luQ29udHJvbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuaGFuZGxlTG9naW5DbGljayA9IHRoaXMuaGFuZGxlTG9naW5DbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlTG9nb3V0Q2xpY2sgPSB0aGlzLmhhbmRsZUxvZ291dENsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtpc0xvZ2dlZEluOiBmYWxzZX07XG4gIH1cblxuICBoYW5kbGVMb2dpbkNsaWNrKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2lzTG9nZ2VkSW46IHRydWV9KTtcbiAgfVxuXG4gIGhhbmRsZUxvZ291dENsaWNrKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2lzTG9nZ2VkSW46IGZhbHNlfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaXNMb2dnZWRJbiA9IHRoaXMuc3RhdGUuaXNMb2dnZWRJbjtcbiAgICBsZXQgYnV0dG9uO1xuXG4gICAgaWYgKGlzTG9nZ2VkSW4pIHtcbiAgICAgIGJ1dHRvbiA9IDxMb2dvdXRCdXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVMb2dvdXRDbGlja30gLz47XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1dHRvbiA9IDxMb2dpbkJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUxvZ2luQ2xpY2t9IC8+O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8R3JlZXRpbmcgaXNMb2dnZWRJbj17aXNMb2dnZWRJbn0gLz5cbiAgICAgICAge2J1dHRvbn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gVXNlckdyZWV0aW5nKHByb3BzKSB7XG4gIHJldHVybiA8aDE+V2VsY29tZSBiYWNrITwvaDE+O1xufVxuXG5mdW5jdGlvbiBHdWVzdEdyZWV0aW5nKHByb3BzKSB7XG4gIHJldHVybiA8aDE+UGxlYXNlIHNpZ24gdXAuPC9oMT47XG59XG5cbmZ1bmN0aW9uIEdyZWV0aW5nKHByb3BzKSB7XG4gIGNvbnN0IGlzTG9nZ2VkSW4gPSBwcm9wcy5pc0xvZ2dlZEluO1xuICBpZiAoaXNMb2dnZWRJbikge1xuICAgIHJldHVybiA8VXNlckdyZWV0aW5nIC8+O1xuICB9XG4gIHJldHVybiA8R3Vlc3RHcmVldGluZyAvPjtcbn1cblxuZnVuY3Rpb24gTG9naW5CdXR0b24ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxuICAgICAgTG9naW5cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gTG9nb3V0QnV0dG9uKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cbiAgICAgIExvZ291dFxuICAgIDwvYnV0dG9uPlxuICApO1xufVxuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxMb2dpbkNvbnRyb2wgLz4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jylcbik7XG4iXX0=