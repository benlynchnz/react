var InheritsDomAttributes = {
  componentDidMount: function() {
    var rootNode = document.getElementById('header');
    var hasNextProps = false;
    var nextProps = {};
    var parentNode = rootNode.parentNode;

    Object.keys(rootNode.attributes).forEach(function(key) {
      var namedNode;

      if (key !== "length") {
        hasNextProps = true;
        namedNode = rootNode.attributes[key];
        nextProps[namedNode.name] = namedNode.value;
      }
    });

    if (hasNextProps) this.props(nextProps);
  }
};


var Logo = React.createClass({displayName: "Logo",
	render: function() {
		return (
			React.createElement("div", null, "EROAD")
		);
	}
});

var SearchBar = React.createClass({displayName: "SearchBar",
    render: function() {
        return (
            React.createElement("form", null, 
                React.createElement("input", {type: "text", placeholder: "Search..."})
            )
        );
    }
});

var View = React.createClass({displayName: "View",

	propTypes: {
		'org-search': React.PropTypes.bool
	},

	getDefaultProps: function() {
		return {
			'org-search': false
		};
	},

	componentDidMount: function() {
		console.log('mounted:: ', this);
		var rootNode = this.getDOMNode();
    	var hasNextProps = false;
    	var nextProps = {};
    	var parentNode = rootNode.parentNode;

		Object.keys(parentNode.attributes).forEach(function(key) {
			var namedNode;

			console.log(parentNode.attributes[key].name);

			if (key !== "length" && parentNode.attributes[key].name.substr(0, 1) === 'e-') {
				hasNextProps = true;
				namedNode = parentNode.attributes[key];
				nextProps[namedNode.name] = namedNode.value;
				debugger;
			}
		});
		if (hasNextProps) this.setProps(nextProps);
	},

	onClick: function() {
		debugger;
	},

    render: function() {
        return (
            React.createElement("nav", null, 
            	React.createElement("ul", null, 
                	React.createElement("li", {onClick: this.onClick}, React.createElement(Logo, null)), 
                	React.createElement("li", null, React.createElement(SearchBar, null))
                )
            )
        );
    }
});

React.render(React.createElement(View, null), document.getElementById('header'));