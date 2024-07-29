const tableData = document.querySelector('.swiper-wrapper-js');

export async function newData(urlData) {
  const response = await fetch(urlData);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

export async function onMarckupHtmlReview() {
  let mainData = [];
  try {
    mainData = await newData('https://portfolio-js.b.goit.study/api/reviews');
  } catch (err) {
    console.error(err);
  }

  mainData.forEach(item => {
    const itemHTML = `
        <li class="swiper-slide review-card">
          <img src="${item.avatar_url}" class="review-img" alt="1" width="48" height="48" />
          <p class="review-name">${item.author}</p>
          <p class="review-text">${item.review}</p>
        </li>`;
    tableData.insertAdjacentHTML('beforeend', itemHTML);
  });
}
