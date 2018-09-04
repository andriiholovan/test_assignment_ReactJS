'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// left aside section start

// ads rerenderind in interval
// react lifecycle methods use 

var AdsBlockLeft = function (_React$Component) {
  _inherits(AdsBlockLeft, _React$Component);

  function AdsBlockLeft(props) {
    _classCallCheck(this, AdsBlockLeft);

    var _this2 = _possibleConstructorReturn(this, (AdsBlockLeft.__proto__ || Object.getPrototypeOf(AdsBlockLeft)).call(this, props));

    _this2.state = {
      images: props.images,
      index: 0,
      src: null
    };
    return _this2;
  }

  _createClass(AdsBlockLeft, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      // console.log(this.state.src)
      this.state.src = 'img/' + this.state.images[0].src;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this = this;
      this.timerId = setInterval(function () {
        // console.log(_this);
        return _this.changeImg();
      }, 2000);
      console.log('timerId: ' + this.timerId);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.timerId);
    }
  }, {
    key: 'changeImg',
    value: function changeImg() {
      this.state.index += 1;
      // console.log('first ad block index: ' + this.state.index);
      if (this.state.index > 1) {
        this.state.index = 0;
      }
      this.setState({
        src: 'img/' + this.state.images[this.state.index].src
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'a',
        { href: '#', key: this.state.images[this.state.index].id },
        React.createElement('img', {
          id: 'adsss__image_left',
          className: 'adsss__image',
          src: this.state.src,
          alt: 'Advertisement'
        })
      );
    }
  }]);

  return AdsBlockLeft;
}(React.Component);

var imagesLeftCOPY = [{ id: 1, src: '-----1.jpg' }, { id: 2, src: 'layer-42.jpg' }];

ReactDOM.render(React.createElement(AdsBlockLeft, { images: imagesLeftCOPY }), document.getElementById('advLeft'));

function CompanyPicture(props) {
  return React.createElement(
    'div',
    { className: 'card-featured__photo' },
    React.createElement(
      'a',
      { href: '#' },
      React.createElement('img', { src: 'img/' + props.src, alt: props.altText })
    )
  );
}

function CompanyInfo(props) {
  return React.createElement(
    'div',
    { className: 'card-featured__info' },
    React.createElement(
      'a',
      { href: '#', className: 'card-featured__info_company-name' },
      props.name
    ),
    React.createElement(
      'p',
      { className: 'card-featured__info_company-mfc' },
      props.specialization
    ),
    React.createElement(
      'p',
      { className: 'card-featured__info_company-location' },
      props.location
    ),
    React.createElement(
      'a',
      { href: '#', className: 'btn btn-follow' },
      'Follow Now'
    )
  );
}

var Companies = function (_React$Component2) {
  _inherits(Companies, _React$Component2);

  function Companies() {
    _classCallCheck(this, Companies);

    return _possibleConstructorReturn(this, (Companies.__proto__ || Object.getPrototypeOf(Companies)).apply(this, arguments));
  }

  _createClass(Companies, [{
    key: 'render',
    value: function render() {
      return this.props.companies.map(function (element) {
        return React.createElement(
          'div',
          { className: 'featured__card card-featured', key: element.id },
          React.createElement(CompanyPicture, { src: element.src, altText: element.altText }),
          React.createElement(CompanyInfo, {
            name: element.name,
            location: element.location,
            specialization: element.specialization
          })
        );
      });
    }
  }]);

  return Companies;
}(React.Component);

var featuredCompaniesData = [{
  id: 1,
  altText: 'office of manufacturer',
  name: 'Company Name',
  location: 'Belgrade, Serbia',
  specialization: 'Manufacturer',
  src: 'layer-39.jpg'
}, {
  id: 2,
  altText: 'building of service provider',
  name: 'Company Name',
  location: 'New York, USA',
  specialization: 'Service Provider',
  src: 'layer-40.jpg'
}, {
  id: 3,
  altText: 'building of supplier',
  name: 'Company Name',
  location: 'London, England',
  specialization: 'Supplier',
  src: 'layer-41.jpg'
}];

ReactDOM.render(React.createElement(Companies, { companies: featuredCompaniesData }), document.getElementById('companies'));

// left aside section end
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// main section start

function ServiceBlock(props) {
  return React.createElement(
    "a",
    { href: "#", className: "main__service service-main" },
    React.createElement(
      "div",
      { className: "service-main__icon" },
      React.createElement("img", { src: 'img/' + props.src, alt: props.title })
    ),
    React.createElement(
      "h4",
      { className: "service-main__caption" },
      props.title
    )
  );
}

var Services = function (_React$Component) {
  _inherits(Services, _React$Component);

  function Services() {
    _classCallCheck(this, Services);

    return _possibleConstructorReturn(this, (Services.__proto__ || Object.getPrototypeOf(Services)).apply(this, arguments));
  }

  _createClass(Services, [{
    key: "render",
    value: function render() {
      return this.props.blocks.map(function (block) {
        return React.createElement(ServiceBlock, { key: block.id, title: block.title, src: block.src });
      });
    }
  }]);

  return Services;
}(React.Component);

var servicesData = [{
  id: 1,
  title: 'Accountancy',
  src: 'shape-51.svg'
}, {
  id: 2,
  title: 'Associations',
  src: 'shape-52.svg'
}, {
  id: 3,
  title: 'Buy/Sell Dental Practice',
  src: 'shape-54.svg'
}, {
  id: 4,
  title: 'Clinical Waste Collection',
  src: 'shape-56.svg'
}, {
  id: 5,
  title: 'Computer Service',
  src: 'shape-57.svg'
}, {
  id: 6,
  title: 'CPR/Basic Life Support Training',
  src: 'shape-58.svg'
}, {
  id: 7,
  title: 'Dental Recruitment',
  src: 'shape-61.svg'
}, {
  id: 8,
  title: 'Dental Software',
  src: 'shape-62.svg'
}, {
  id: 9,
  title: 'Electrical Safety And Testing',
  src: 'shape-63.svg'
}, {
  id: 10,
  title: 'Marketing',
  src: 'shape-65.svg'
}, {
  id: 11,
  title: 'Others',
  src: 'shape-71.svg'
}, {
  id: 12,
  title: 'Repairs',
  src: 'shape-66.svg'
}, {
  id: 13,
  title: 'Solicitors',
  src: 'shape-68.svg'
}, {
  id: 14,
  title: 'Surgery Design',
  src: 'shape-75.svg'
}, {
  id: 15,
  title: 'Training & Courses',
  src: 'shape-69.svg'
}, {
  id: 16,
  title: 'Web Designers',
  src: 'shape-72.svg'
}, {
  id: 17,
  title: 'Cleaning Agencies',
  src: 'shape-55.svg'
}, {
  id: 18,
  title: 'Dental Chair Recovery',
  src: 'shape-60.svg'
}, {
  id: 19,
  title: 'Equipment Engineering',
  src: 'shape-64.svg'
}, {
  id: 20,
  title: 'Selling Gold',
  src: 'shape-67.svg'
}, {
  id: 21,
  title: 'Uniform & Workwear',
  src: 'shape-70.svg'
}];

ReactDOM.render(React.createElement(Services, { blocks: servicesData }), document.getElementById('services'));

// main section end
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// right aside section start

function PersonName(props) {
  return React.createElement(
    "a",
    { href: "#", className: "card-featured__title" },
    props.title
  );
}

function PersonPhoto(props) {
  return React.createElement(
    "div",
    { className: "card-featured__photo" },
    React.createElement(
      "a",
      { href: "#" },
      React.createElement("img", { src: 'img/' + props.src, alt: props.title })
    )
  );
}

function PersonInfo(props) {
  return React.createElement(
    "div",
    { className: "card-featured__info" },
    React.createElement(
      "p",
      { className: "card-featured__info_position" },
      props.position
    ),
    React.createElement(
      "p",
      { className: "card-featured__info_location" },
      props.location
    ),
    React.createElement(
      "a",
      { href: "#", className: "btn btn-addfriend" },
      "Add friend"
    )
  );
}

var People = function (_React$Component) {
  _inherits(People, _React$Component);

  function People() {
    _classCallCheck(this, People);

    return _possibleConstructorReturn(this, (People.__proto__ || Object.getPrototypeOf(People)).apply(this, arguments));
  }

  _createClass(People, [{
    key: "render",
    value: function render() {
      return this.props.humans.map(function (human) {
        return React.createElement(
          "div",
          { className: "featured__card card-featured_people", key: human.id },
          React.createElement(PersonName, { title: human.title }),
          React.createElement(
            "div",
            { className: "card-featured__wrap" },
            React.createElement(PersonPhoto, { src: human.src, title: human.title }),
            React.createElement(PersonInfo, { location: human.location, position: human.position })
          )
        );
      });
    }
  }]);

  return People;
}(React.Component);

var featuredPeopleData = [{
  id: 1,
  altText: 'Dennis Adams',
  title: 'Dennis Adams',
  location: 'London, England',
  position: 'Dentist (Practice Owner)',
  src: 'layer-36.jpg'
}, {
  id: 2,
  altText: 'Mary Carpenter',
  title: 'Mary Carpenter',
  location: 'Belgrade, Serbia',
  position: 'Dentist (Practice Owner)',
  src: 'layer-37.jpg'
}, {
  id: 3,
  altText: 'Danielle Salazar',
  title: 'Danielle Salazar',
  location: 'Paris, France',
  position: 'Dentist (Practice Owner)',
  src: 'layer-38.jpg'
}];

ReactDOM.render(React.createElement(People, { humans: featuredPeopleData }), document.getElementById('people'));

function ProductTitle(props) {
  return React.createElement(
    "a",
    { href: "#", className: "card-featured__title" },
    props.title
  );
}

function ProductPhoto(props) {
  return React.createElement(
    "div",
    { className: "card-featured__photo" },
    React.createElement(
      "a",
      { href: "#" },
      React.createElement("img", { src: 'img/' + props.src, alt: props.altText })
    )
  );
}

function ProductInfo(props) {
  return React.createElement(
    "div",
    { className: "card-featured__info-desc" },
    React.createElement(
      "div",
      null,
      props.shortDesc
    ),
    React.createElement(
      "div",
      null,
      props.desc
    )
  );
}

var Products = function (_React$Component2) {
  _inherits(Products, _React$Component2);

  function Products() {
    _classCallCheck(this, Products);

    return _possibleConstructorReturn(this, (Products.__proto__ || Object.getPrototypeOf(Products)).apply(this, arguments));
  }

  _createClass(Products, [{
    key: "render",
    value: function render() {
      return this.props.products.map(function (product) {
        return React.createElement(
          "div",
          { className: "featured__card card-featured_product", key: product.id },
          React.createElement(ProductTitle, { title: product.title }),
          React.createElement(
            "div",
            { className: "card-featured__wrap" },
            React.createElement(ProductPhoto, { src: product.src, altText: product.altText }),
            React.createElement(ProductInfo, { desc: product.desc, shortDesc: product.shortDesc })
          )
        );
      });
    }
  }]);

  return Products;
}(React.Component);

var featuredProductsData = [{
  id: 1,
  altText: 'child during treatment',
  title: 'Product Name',
  shortDesc: 'Product Short Description.',
  desc: 'The quick brown fox jumps over the lazy dog.',
  src: 'layer-34.jpg'
}, {
  id: 2,
  altText: 'doctor smiles',
  title: 'Product Name',
  shortDesc: 'Product Short Description.',
  desc: 'The quick brown fox jumps over the lazy dog.',
  src: 'layer-35.jpg'
}];
ReactDOM.render(React.createElement(Products, { products: featuredProductsData }), document.getElementById('products'));

var AdsBlockRight = function (_React$Component3) {
  _inherits(AdsBlockRight, _React$Component3);

  function AdsBlockRight(props) {
    _classCallCheck(this, AdsBlockRight);

    var _this3 = _possibleConstructorReturn(this, (AdsBlockRight.__proto__ || Object.getPrototypeOf(AdsBlockRight)).call(this, props));

    _this3.state = {
      images: props.images,
      index: 0,
      src: null
    };
    return _this3;
  }

  _createClass(AdsBlockRight, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.state.src = 'img/' + this.state.images[0].src;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this4 = this;

      this.timerId = setInterval(function () {
        _this4.changeImg();
      }, 2500);
      console.log('timerId: ' + this.timerId);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.timerId);
    }
  }, {
    key: "changeImg",
    value: function changeImg() {
      this.state.index += 1;
      // console.log('second ad block index: ' + this.state.index);
      if (this.state.index > 2) {
        this.state.index = 0;
      }
      this.setState({
        src: 'img/' + this.state.images[this.state.index].src
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "a",
        { href: "#", key: this.state.images[this.state.index].src },
        React.createElement("img", {
          id: "adsss__image_right",
          className: "adsss__image",
          src: this.state.src,
          alt: "Advertisement"
        })
      );
    }
  }]);

  return AdsBlockRight;
}(React.Component);

var imagesRightCOPY = [{ id: 1, src: '-----2.jpg' }, { id: 2, src: 'layer-32.jpg' }, { id: 3, src: 'layer-33.jpg' }];

ReactDOM.render(React.createElement(AdsBlockRight, { images: imagesRightCOPY }), document.getElementById('advRight'));

// right aside section end