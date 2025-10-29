const data = `
  <div class="tiptap-test-content">
    <h1>Testing Tiptap Editor Elements</h1>

    <p>This is a <strong>basic paragraph</strong> with some <em>italic text</em> and <u>underlined text</u>. It also contains <s>strikethrough text</s> and <mark>highlighted text</mark> to test various formatting options.</p>

    <h2>Heading Level 2</h2>
    <p>Here's a paragraph following a heading.</p>

    <h3>Heading Level 3</h3>
    <h4>Heading Level 4</h4>
    <h5>Heading Level 5</h5>
    <h6>Heading Level 6</h6>

    <blockquote>
      <p>This is a blockquote element. It's useful for displaying quoted text or highlighting important information. Tiptap should handle this element properly with appropriate styling.</p>
    </blockquote>

    <ul>
      <li>This is an unordered list item</li>
      <li>This is another list item
        <ul>
          <li>With a nested list item</li>
          <li>And another nested item</li>
        </ul>
      </li>
      <li>Back to the main list</li>
    </ul>

    <ol>
      <li>This is an ordered list item</li>
      <li>This is the second item
        <ol>
          <li>With a nested ordered list</li>
          <li>Second nested item</li>
        </ol>
      </li>
      <li>Third item in the main list</li>
    </ol>
    </ul>

    <pre><code>function testCodeBlock() {
    console.log("This is a code block");
    return "Tiptap should handle this properly";
  }</code></pre>

    <p>Here's some <code>inline code</code> within a paragraph.</p>

    <p>This paragraph contains a <a href="https://tiptap.dev">link to Tiptap's documentation</a> to test link functionality.</p>

    <table>
      <thead>
        <tr>
          <th>Header 1</th>
          <th>Header 2</th>
          <th>Header 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Row 1, Cell 1</td>
          <td>Row 1, Cell 2</td>
          <td>Row 1, Cell 3</td>
        </tr>
        <tr>
          <td>Row 2, Cell 1</td>
          <td>Row 2, Cell 2</td>
          <td>Row 2, Cell 3</td>
        </tr>
      </tbody>
    </table>

    <hr>

    <p>Here's an image element to test if Tiptap handles images properly:</p>
    <img src="https://picsum.photos/seed/tiptap-test/600/400.jpg" alt="Test image for Tiptap editor">

    <p>And here's a paragraph with <span style="color: #e63946;">colored text</span> and <span style="background-color: #a8dadc;">text with background color</span> to test style elements.</p>

    <p>Text with <sup>superscript</sup> and <sub>subscript</sub> elements.</p>

    <p>Here's a paragraph with a <kbd>keyboard input</kbd> element and <var>variable</var> element.</p>

    <details>
      <summary>Click to expand details</summary>
      <p>This is the hidden content that should be revealed when the summary is clicked. Tiptap might need special handling for this HTML5 element.</p>
    </details>

    <p>Finally, here's a paragraph with text that has <small>smaller text</small> and <big>bigger text</big> elements.</p>
  </div>
  `;

export default data;
