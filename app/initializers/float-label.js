import TextArea from '@ember/component/text-area';
import TextField from '@ember/component/text-field';
import { alias } from '@ember/object/computed';
import Registrable from 'ember-float-label/mixins/registrable';

export default {
  name: 'float-label',

  initialize: function() {
    TextField.reopen(Registrable, {
      floatLabel: alias('placeholder')
    });

    TextArea.reopen(Registrable, {
      floatLabel: alias('placeholder')
    });
  }
};
