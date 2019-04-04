/*
 * A Page contains a title and body text.
 * To be used for one-offs, such as About or Submission Info
 */
let keystone = require('keystone');
let Page = new keystone.List('Page');
let Types = keystone.Field.Types;

Page.add({
  title: {type: String},
  url: {type: String},
  body: {type: Types.Html, wysiwyg: true},
});

Page.defaultColumns = 'title, url';
Page.register();