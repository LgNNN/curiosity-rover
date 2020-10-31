document.getElementById('getpics').addEventListener('click', onSubmit);
document.getElementById('load').addEventListener('click', loadMore);
document.getElementById('date').addEventListener('change', dateChange);
document.getElementById('cam').addEventListener('change', camChange);
let counter = 1;
let lastDate;
let nextPage;
let lastCam;

function onSubmit(e) {
    e.preventDefault();
    document.querySelector('iframe').classList.add('hide');
    if (counter === 1) {
        UI.clearUI();
    }
    if (lastDate === document.getElementById('date').value && lastCam === document.getElementById('cam').value) {
        return;
    }
    UI.loading();
    const page = counter;
    nextPage = counter + 1;
    const date = document.getElementById('date').value;
    lastDate = date;
    const camera = document.getElementById('cam').value;
    lastCam = camera;

    fetch('/photos' + '?camera=' + camera + '&date=' + date + '&page=' + page)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error;
            }
        })
        .then(data => {
            UI.clearLoading();
            UI.renderUI(data, camera);

        })
        .catch(err => {
            UI.clearLoading();
            UI.renderUI(0);
        });
    counter++;
}

function loadMore(e) {
    if (counter === 1) {
        return;
    }
    lastDate = '';
    lastCam = '';
    onSubmit(e);
}

function dateChange() {
    if (document.getElementById('date').value === lastDate) {
        counter = nextPage;
    } else {
        counter = 1;
    }
}

function camChange() {
    if (document.getElementById('cam').value === lastCam) {
        counter = nextPage;
    } else {
        counter = 1;
    }
}

lightbox.option({
    'wrapAround': true,
    'fadeDuration': 400,
    'imageFadeDuration': 400,
    'resizeDuration': 400,
    'disableScrolling': true
});