/* eslint-disable ember/no-new-mixins */
import Mixin from '@ember/object/mixin';
import { on } from '@ember/object/evented';
import { scheduleOnce } from '@ember/runloop';
import FloatLabel from 'ember-float-label/components/float-label';

export default Mixin.create({
  _registerWithFloatLabel: on('init', function() {
    var parent = this.get('parentView');
    if (parent instanceof FloatLabel) {
      scheduleOnce('afterRender', this, this._registerRegistrableWithFloatLabel);
    }
  }),

  _registerRegistrableWithFloatLabel() {
    this.get('parentView').send('register', this);
  }
});
