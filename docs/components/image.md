---
description: >-
  <mark6-image> offers a wide range of possibilities to display images cleaner
  than with the native <img> tag. For example, the aspect defines the size of an
  image before the src is loaded.
---

# Image

{% code title="API reference" %}
```typescript
import {Mark6ImageModule} from "@devmonkeys/mark6/image";
```
{% endcode %}

### Demo

[https://mark6-demo.web.app/image](https://mark6-demo.web.app/image) - Checkout Demo Code [here](https://github.com/DevMonkeysDE/mark6/blob/master/src/app/sites/site-image/site-image.component.html).

![Fading animation after loading the src or srcset.](../.gitbook/assets/mark6-image-example.gif)

{% tabs %}
{% tab title="HTML" %}
```markup
<section class="site-image">
    <div class="site-image-inner">

        <h1>mark6-image</h1>

        <section class="demo">
            <aside>
                <mark6-image [aspectRatio]="1 / 1"
                             [src]="demo.avatar"
                             [alt]="demo.alt"></mark6-image>

                <mark6-image [aspectRatio]="1 / 2"
                             [src]="demo.demo"
                             [alt]="demo.alt"></mark6-image>
            </aside>

            <main>
                <mark6-image [aspectRatio]="16 / 9"
                             [src]="demo.cover"
                             [alt]="demo.alt"></mark6-image>
            </main>
        </section>

    </div>
</section>
```
{% endtab %}

{% tab title="TypeScript" %}
```typescript
public demo = {
    avatar: 'assets/demo/avatar-female-asian.jpg',
    cover: 'assets/demo/cover-nature.jpg',
    demo: 'assets/demo/demo.jpg',
    alt: 'Alt Text',
};
```
{% endtab %}
{% endtabs %}

**Properties**

<table>
  <thead>
    <tr>
      <th style="text-align:left">Element</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">
        <p>@Input()</p>
        <p>src: string</p>
      </td>
      <td style="text-align:left">Specifies the URL of the image.</td>
    </tr>
    <tr>
      <td style="text-align:left">
        <p>@Input()</p>
        <p>alt: string</p>
      </td>
      <td style="text-align:left">Specifies an alternate text for an image.</td>
    </tr>
    <tr>
      <td style="text-align:left">
        <p>@Input()</p>
        <p>srcSet: string</p>
      </td>
      <td style="text-align:left">Specifies the URL of the image to use in different situations.</td>
    </tr>
    <tr>
      <td style="text-align:left">
        <p>@Input()</p>
        <p>aspectRatio: string | number</p>
      </td>
      <td style="text-align:left">Set a fixed aspect for the image.</td>
    </tr>
    <tr>
      <td style="text-align:left">
        <p>@Input()</p>
        <p>preview: string</p>
      </td>
      <td style="text-align:left">Sets a preview image that is shown before the src or srcset is loaded.</td>
    </tr>
    <tr>
      <td style="text-align:left">
        <p>@Input()</p>
        <p>default: string</p>
      </td>
      <td style="text-align:left">Defines a default image that will be shown if the src or srcset cannot
        be loaded.</td>
    </tr>
    <tr>
      <td style="text-align:left">
        <p>@Input()</p>
        <p>failedSrc: string</p>
      </td>
      <td style="text-align:left">Sets a default image if loading the src or srcset fails.</td>
    </tr>
    <tr>
      <td style="text-align:left">
        <p>@Input()</p>
        <p>backgroundImage: string</p>
      </td>
      <td style="text-align:left">Sets a background image. For example a .gif with an animated spinner.</td>
    </tr>
    <tr>
      <td style="text-align:left">
        <p>@Input()</p>
        <p>addClass: string</p>
      </td>
      <td style="text-align:left">Deprecated. Use regular class instead of addClass!</td>
    </tr>
    <tr>
      <td style="text-align:left">@Output()
        <br />failed</td>
      <td style="text-align:left"></td>
    </tr>
    <tr>
      <td style="text-align:left">@Output()
        <br />loaded</td>
      <td style="text-align:left"></td>
    </tr>
  </tbody>
</table>

