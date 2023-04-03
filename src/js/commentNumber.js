import universalCount from './numbering';

const count = universalCount();

const commentCount = () => {
  const commentsContainer = document.getElementById('comments');
  const numberContainer = document.getElementById('number');

  document.addEventListener('click', async (e) => {
    const clickedElementId = e.target.id;

    if (clickedElementId !== undefined) {
      const idNumber = parseInt(clickedElementId, 10);
      if (idNumber >= 0 && idNumber < count) {
        setTimeout(() => {
          const commentsCount = commentsContainer.children.length;
          const commentsText = commentsCount === 1 ? 'Comment' : 'Comments';
          const numberText = `${commentsText} (${commentsCount})`;
          numberContainer.innerHTML = numberText;
        }, 2000);
      }
    }
  });
};

commentCount();
