var InvertedPeninsula = function() {
  this.inhabitants = [
    {
      name: "Sir Charles",
      race: "Human"
    },
    {
      name: "Ealei",
      race: "Elf"
    }
  ];

  // Adds an extra `humans` method property to the inhabitants `array` to return all `Humans`
  this.inhabitants.humans = function() {/* returns all Human inhabitants*/ };
};

var invertedPeninsula = new InvertedPeninsula;
invertedPeninsula.inhabitants.test("something");
console.log(invertedPeninsula);
console.log(invertedPeninsula.inhabitants);
