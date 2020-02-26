ember-float-label
==============================================================================

Animated float labels for your Ember app.


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.8 or above
* Ember CLI v2.13 or above
* Node.js v8 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-float-label
```

Usage
------------------------------------------------------------------------------

In your template:

```hbs
<FloatLabel>
  <Input @value={{this.name}} @placeholder="Name" />
</FloatLabel>

<FloatLabel>
  <Textarea @value={{this.notes}} @placeholder="Notes" />
</FloatLabel>
```

If you want the float label to be something different than the placeholder/prompt, you can specify it as follows:

```hbs
<FloatLabel @label="Something Else" />
  <Input @value={{this.name}} @placeholder="Name" />
</FloatLabel>
```

Styling is left completely up to you.
=======


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
