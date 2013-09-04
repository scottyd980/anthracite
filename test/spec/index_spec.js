module("Index", {
  setup: function () {
    Anthracite.reset();
  }
});

test("First H1 contains Anthracite", function () {
  visit('/').then(function () {
    equal($('#ember h1').html(), 'Anthracite', 'Title is Anthracite');
  });
});

