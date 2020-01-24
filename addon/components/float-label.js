import Component from '@ember/component';
import { oneWay, bool } from '@ember/object/computed';

export default Component.extend({
  tagName: 'label',
  classNames: ['float-label'],
  classNameBindings: ['hasValue'],
  field: null,
  label: oneWay('field.floatLabel'),
  value: oneWay('field.value'),
  hasValue: bool('value'),

  actions: {
    register: function(field) {
      this.set('field', field);
    }
  }
});
