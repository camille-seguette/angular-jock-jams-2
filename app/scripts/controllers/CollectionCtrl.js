(function() {
  function CollectionCtrl(Fixtures) {
      this.albums = Fixtures.getCollection(10);
    }

    angular
      .module('blocJams')
      .controller('CollectionCtrl', CollectionCtrl);
 })();
