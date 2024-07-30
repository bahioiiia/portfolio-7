export const projectData = [
  {
    codeItemOne: '#react',
    codeItemTwo: '#js',
    codeItemThree: '#node js',
    codeItemFour: '#git',
    text: 'Programming Across Borders: Ideas, Technologies, Innovations',
    btnHref: './index.html',
    btnText: 'See project',
  },
];

export function onGetHtmlMarckup() {
  return projectData
    .map(
      ({
        codeItemOne,
        codeItemTwo,
        codeItemThree,
        codeItemFour,
        text,
        btnHref,
        btnText,
      }) => {
        return `<div class="top-part">
            <ul class="code-list">
              <li class="code-item">
                <p class="code-text">${codeItemOne}</p>
              </li>
              <li class="code-item">
                <p class="code-text">${codeItemTwo}</p>
              </li>
              <li class="code-item">
                <p class="code-text">${codeItemThree}</p>
              </li>
              <li class="code-item">
                <p class="code-text">${codeItemFour}</p>
              </li>
            </ul>
            <p class="main-text">
              ${text}
            </p>
            <a href="${btnHref}" class="main-button-a" target="_blank rel="noopener noreferrer"
              >${btnText}</a
            >
          </div>`;
      }
    )
    .join('');
}
