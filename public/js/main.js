document.getElementById('survey-btn').addEventListener('click', () => {
    document
        .getElementById('survey-embed')
        .classList.remove('survey-embed--hidden');

    document
        .getElementById('survey-embed-cover')
        .classList.remove('survey-embed-cover--hidden');
});

document.getElementById('survey-embed-close').addEventListener('click', () => {
    document
        .getElementById('survey-embed')
        .classList.add('survey-embed--hidden');

    document
        .getElementById('survey-embed-cover')
        .classList.add('survey-embed-cover--hidden');
});

const headerDownloadBtns = document.getElementsByClassName(
    'header__download-btn'
);

for (let i = 0; i < headerDownloadBtns.length; i++) {
    headerDownloadBtns[i].addEventListener('click', () => {
        document
            .getElementById('notify-popup')
            .classList.remove('notify-popup--hidden');
        document
            .getElementById('survey-embed-cover')
            .classList.remove('survey-embed-cover--hidden');
    });
}

document.getElementById('notify-popup-close').addEventListener('click', () => {
    document
        .getElementById('notify-popup')
        .classList.add('notify-popup--hidden');

    document
        .getElementById('survey-embed-cover')
        .classList.add('survey-embed-cover--hidden');
});

document.onreadystatechange = function first() {
    if (document.readyState !== 'complete') {
        // document.querySelector('body').style.visibility = 'hidden';
        document.querySelector('#loader').style.visibility = 'visible';
    } else {
        setTimeout(() => {
            document.querySelector('#loader').style.display = 'none';
        }, 1000);
        // document.querySelector('body').style.visibility = 'visible';
    }
};
