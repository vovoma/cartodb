var LayerDefinitionModel = require('../../../../../../javascripts/cartodb3/data/layer-definition-model');
var BaseTiledLayerView = require('../../../../../../javascripts/cartodb3/editor/layers/layer-views/base-tiled-layer-view');

describe('editor/layers/layer-views/base-tiled-layer-view', function () {
  beforeEach(function () {
    this.model = new LayerDefinitionModel({
      name: 'thename',
      urlTemplate: 'http://{s}.example.com/basemap/{z}/{x}/{y}.png',
      subdomains: 'abcd'
    }, {
      configModel: {}
    });

    this.view = new BaseTiledLayerView({
      model: this.model,
      stackLayoutModel: {}
    });

    this.view.render();
  });

  it('should have no leaks', function () {
    expect(this.view).toHaveNoLeaks();
  });

  it('should render title and description of layer', function () {
    expect(this.view.$el.text()).toContain('thename');
    expect(this.view.$el.text()).toContain('editor.layers.basemap.title-label');
  });

  it('should render thumbnail image', function () {
    expect(this.view.$('img').attr('src')).toEqual('http://a.example.com/basemap/6/30/24.png');
  });
});
