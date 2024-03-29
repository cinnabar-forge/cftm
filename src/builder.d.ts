export class CinnabarMarkupBuilder {
  markup: any[];
  currentParagraph: {
    type: any;
    value: any[];
  };
  add(type: any, value?: any): this;
  build(): any[];
  h1(text: any): this;
  h2(text: any): this;
  h3(text: any): this;
  h4(text: any): this;
  h5(text: any): this;
  h6(text: any): this;
  highlight(type: any, text: any): this;
  p(text: any): this;
  tag(type: any, text?: any): this;
  text(text: any): this;
}
