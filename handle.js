const content_holder = document.querySelector('.content_holder');
const placeholder_seperator = document.querySelector('#placeholder');
const header_button = document.querySelectorAll('header .button_select');
const image_data = {
    '06/09/24': [1175, 1186, 1188, 1193, 1198, 1199, 1203, 1209],
    '07/21/22': [8086, 8090, 8093, 8120, 8153],
    '08/06/22': [8610, 8613, 8614, 8632, 8661, 8673],
    '11/28/21': [1043, 1074, 1213, 1307, 1311, 1314],
}
const date_title = {
    '11/28/21': 'Downtown Frederick w/ Paris',
    '07/21/22': 'Hershey Park w/ Riley',
    '08/06/22': 'Downtown Frederick w/ Riley',
    '06/09/24': 'Railroad Tracks & Monocacy River',
}

let active_button;

function assignHeaderFunction() {
    function buttonClicked(event) {
        if (active_button == event.target) { return false };
        if (active_button) {
            active_button.classList.remove('active');
        }
        event.target.classList.add('active');
        active_button = event.target;
    }

    for (var i = 0; i < header_button.length; i++) {
        let this_button = header_button[i];
        this_button.onclick = buttonClicked;
    }
}

function addSeperator(date) {
    let clone = placeholder_seperator.cloneNode(true);
    let clone_text = clone.querySelector('.seperator_text');
    clone.removeAttribute('id');
    clone_text.innerHTML = `${date}: ${date_title[date]}`
    content_holder.appendChild(clone);
}

function loadAlbum(date) {
    if (!date) { return false };
    let this_data = image_data[date];
    addSeperator(date);

    for (var i = 0; i < this_data.length; i++) {
        let image_id = this_data[i];
        let preview_url = `url(media/preview/IMG_${image_id}.jpg)`;
        let full_url = `url(media/full/IMG_${image_id}.jpg)`;

        let content_frame = document.createElement('div');
        content_frame.classList.add('content_frame');
        content_holder.appendChild(content_frame);

        content_frame.style.setProperty('--preview_url', preview_url);
        content_frame.addEventListener('mouseenter', imageHovered);
        content_frame.addEventListener('mouseleave', imageUnhovered);
        content_frame.addEventListener('mousedown', imageClick);
    }
}

function imageHovered() {
    content_holder.classList.add('image_hovered')
}

function imageUnhovered() {
    content_holder.classList.remove('image_hovered');
}

function imageClick() {

}

const image_keys = Object.keys(image_data);
let current_key = 0;
function handleLoading() {
    if (current_key >= image_keys.length) { return false };
    let next_key = current_key + 2;

    for (var i = current_key; i < next_key; i++) {
        loadAlbum(image_keys[i]);
        current_key++;
    }

    console.log(current_key)
}

assignHeaderFunction();
handleLoading();

document.addEventListener('scroll', () => {
    const scrolledTo = window.scrollY + window.innerHeight;
    const isReachBottom = document.body.scrollHeight === scrolledTo;
    if (isReachBottom) { 
        handleLoading();
    }
});