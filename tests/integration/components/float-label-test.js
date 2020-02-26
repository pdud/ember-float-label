import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, fillIn } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import FloatLabelInitializer from 'dummy/initializers/float-label';

module('Integration | Component | float label', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    FloatLabelInitializer.initialize();
  });

  test('ember input', async function(assert) {
    assert.expect(4);

    await render(hbs`
      <FloatLabel>
        {{input value=name placeholder="Name"}}
      </FloatLabel>
    `);

    assert.equal(find('.float-label-text').textContent.trim(), 'Name', 'the placeholder is added in a span');
    assert.ok(!find('label').classList.contains('has-value'), 'the float-label has no class has-value');

    await fillIn('input', 'Harry Kane');
    assert.ok(find('label').classList.contains('has-value'), 'the float-label has the class has-value');

    await fillIn('input', '');
    assert.ok(!find('label').classList.contains('has-value'), 'the float-label has no class has-value when the input is emptied');
  });

  test('ember textarea', async function(assert) {
    assert.expect(3);

    await render(hbs`
      <FloatLabel>
        {{textarea value=notes placeholder="Notes"}}
      </FloatLabel>
    `);

    assert.equal(find('.float-label-text').textContent.trim(), 'Notes', 'the placeholder is added in a span');
    assert.ok(!find('label').classList.contains('has-value'), 'the float-label has no class has-value');

    await fillIn('textarea', 'Harry Kane');
    assert.ok(find('label').classList.contains('has-value'), 'the float-label has the class has-value');
  });

  test('render with value', async function(assert) {
    assert.expect(1);

    await render(hbs`
      <FloatLabel>
        {{input value="Harry Kane" placeholder="Name"}}
      </FloatLabel>
    `);

    assert.ok(find('label').classList.contains('has-value'), 'the float-label has the class has-value');
  });

  test('overwrite default label', async function(assert) {
    assert.expect(1);

    await render(hbs`
      <FloatLabel @label="Full Name">
        {{input value=name placeholder="Harry Kane"}}
      </FloatLabel>
    `);

    assert.equal(find('.float-label-text').textContent.trim(), 'Full Name', 'the label attribute is added in a span');
  });
});
