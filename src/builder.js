export class CinnabarMarkupBuilder {
  constructor() {
    this.markup = [];
    this.currentParagraph = null;
  }

  add(type, value = null) {
    const element = { type: type, value: [] };
    if (value) {
      element.value.push({ text: value });
    }
    this.markup.push(element);
    if (type === "p") {
      this.currentParagraph = element;
    } else {
      this.currentParagraph = null;
    }
    return this;
  }

  build() {
    return this.markup;
  }

  h1(text) {
    return this.add("h1", text);
  }

  h2(text) {
    return this.add("h2", text);
  }

  h3(text) {
    return this.add("h3", text);
  }

  h4(text) {
    return this.add("h4", text);
  }

  h5(text) {
    return this.add("h5", text);
  }

  h6(text) {
    return this.add("h6", text);
  }

  highlight(type, text) {
    if (!this.currentParagraph) {
      this.add("p", text);
    }
    this.currentParagraph.value.push({ highlight: type, text: text });
    return this;
  }

  p(text) {
    return this.add("p", text);
  }

  tag(type, text = null) {
    return this.add(type, text);
  }

  text(text) {
    if (!this.currentParagraph) {
      this.add("p", text);
    }
    this.currentParagraph.value.push({ text: text });
    return this;
  }
}
