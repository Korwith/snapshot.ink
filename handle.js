const image_data = {
    '06/09/24': [1175, 1186, 1188, 1193, 1198, 1199, 1203, 1209],
    '06/05/23': [3895, 3900, 3902, 3906, 3913, 3915, 3950],
    '06/02/23': [3690, 3678, 3675],
    '04/09/23': ['0410', '0415', '0591', '0595', '0602'],
    '04/08/23': ['0323', '0353', '0389', '0539', '0378'],
    '04/02/23': ['0022', '0034', '0068', '0071'],
    '03/25/23': [9485, 9540, 9626, 9629],
    '02/03/23': [6991, 7031, 7034, 7143, 7138, 7131, 7078, 7052, 7049],
    '01/24/23': [6647, 6642, 6625, 6623, 6599],
    '01/06/23': [5425, 5426, 5439, 5462, 5465, 5515],
    '12/12/22': [4498, 4514, 4519, 4535, 4536, 4540],
    '12/04/22': [4277, 4322, 4330, 4331, 4348],
    '09/18/22': [1818, 1839, 1842, 1866, 1899, 1905, 1907],
    '08/23/22': ['0680', '0701', '0706', '0726', '0748'],
    '08/16/22': ['0494', '0501', '0506', '0509', '0522', '0526', '0534', '0539'],
    '08/06/22': [8610, 8613, 8614, 8632, 8661, 8673],
    '07/21/22': [8086, 8090, 8093, 8120, 8153],
    '11/28/21': [1043, 1074, 1213, 1307, 1311, 1314],
}
const date_title = {
    '06/09/24': 'Railroad Tracks & Monocacy River',
    '06/05/23': 'Downtown Frederick',
    '06/02/23': 'North Crossing "Suge" Island',
    '04/09/23': 'Amber Meadows & Downtown',
    '04/08/23': 'Amber Meadows & Downtown',
    '04/02/23': 'North Crossing "Suge" Island',
    '03/25/23': 'Downtown Frederick',
    '02/03/23': 'Downtown Frederick',
    '01/24/23': 'Amber Meadows',
    '01/06/23': 'North Crossing',
    '12/12/22': 'Downtown Frederick',
    '12/04/22': 'Downtown Frederick',
    '09/18/22': 'Frederick Fair',
    '08/23/22': 'Downtown Frederick',
    '08/16/22': 'Downtown Frederick',
    '08/06/22': 'Downtown Frederick',
    '07/21/22': 'Hershey Park',
    '11/28/21': 'Downtown Frederick',
}
const included_people = {
    '11/28/21': 'Paris',
    '09/18/22': 'Edin, Max, Riley',
    '08/23/22': 'Evan & Riley',
    '07/21/22': 'Riley',
    '08/06/22': 'Riley',
    '12/12/22': 'Riley',
    '01/24/23': 'Riley',
    '02/03/23': 'Riley',
    '03/25/23': 'Riley & Liam',
    '04/02/23': 'Riley & Edin',
    '06/02/23': 'Riley, Liam, Paris',
    '06/05/23': 'Paris',
    '06/09/24': 'Paris',
}

const content_holder = document.querySelector('.content_holder');
const placeholder = document.querySelector('#placeholder');

function makeAlbum(date) {
    let this_data = image_data[date];
    let this_title = date_title[date];
    let this_people = included_people[date];

    let clone = placeholder.cloneNode(true);
    let clone_media = clone.querySelector('.entry_media');
    let clone_photo_select = clone.querySelector('.photo_select');
    let clone_title = clone.querySelector('.entry_header .title');
    let clone_date = clone.querySelector('.info.date');
    let clone_featured_holder = clone.querySelector('.featured_holder');
    let clone_featured = clone.querySelector('.info.person');
    let clone_back = clone.querySelector('.shift_left');
    let clone_next = clone.querySelector('.shift_right');

    let preview = `url(media/preview/IMG_${this_data[0]}.jpg)`;
    let full = `url(media/ful/IMG_${this_data[0]}.jpg)`;
    
    clone_title.innerHTML = this_title;
    clone_date.innerHTML = date;
    if (this_people) {
        clone_featured.innerHTML = 'w/ ' + this_people;
    } else {
        clone_featured_holder.classList.add('hide');
    }

    if (this_data.length > 1) {
        for (var i = 0; i < this_data.length; i++) {
            let dot_div = document.createElement('div');
            dot_div.setAttribute('button_index', i);
            clone_photo_select.appendChild(dot_div);
            if (i >= 1) { continue };
            dot_div.classList.add('active');
        }
        clone_photo_select.classList.remove('hide');
    }

    clone.removeAttribute('id');
    clone.setAttribute('index', 0);
    clone.setAttribute('max', this_data.length);
    clone.setAttribute('date', date);
    clone_photo_select.setAttribute('date', date);
    clone_media.style.setProperty('--preview_url', preview);
    content_holder.appendChild(clone);
    clone_photo_select.onclick = photoSelect;
    
    (function(clone, clone_back, clone_next, clone_photo_select) {
        clone_back.onclick = function() {
            backPhoto(clone);
        }

        clone_next.onclick = function() {
            nextPhoto(clone);
        }

        function handleTouchMove(event) {
            let touch = event.touches[0];
            let circle_count = clone_photo_select.querySelectorAll('div').length - 1;
            let photo_select_rect = clone_photo_select.getBoundingClientRect();
            let photo_select_left = photo_select_rect.left;
            let photo_select_right = photo_select_rect.right;
            let photo_select_width = photo_select_rect.width;
            let adjusted_x = touch.clientX;
            if (touch.x < photo_select_left) {
                adjusted_x = photo_select_left;
            } else if (touch.x > photo_select_right) {
                adjusted_x = photo_select_right;
            }

            let new_x = adjusted_x - photo_select_left;
            let offset = new_x / photo_select_width;
            let found_index = Math.round(circle_count * offset);
            shiftPhoto(clone, found_index);
            event.preventDefault();
        }

        clone_photo_select.addEventListener('touchstart', function(event) {
            document.addEventListener('touchmove', handleTouchMove, {passive: false});
            handleTouchMove(event);
        });

        clone_photo_select.addEventListener('touchend', function(event) {
            document.removeEventListener('touchmove', handleTouchMove);
        });
    })(clone, clone_back, clone_next, clone_photo_select, clone_photo_select);
}

function photoSelect(event) {
    let selected_dot = event.target;
    let selected_index = parseInt(selected_dot.getAttribute('button_index'));    
    if (!(selected_index > -1)) { return false };

    let selected_frame = event.target.parentElement;
    let selected_date = selected_frame.getAttribute('date');
    let selected_album = document.querySelector(`.entry[date="${selected_date}"]`)

    shiftPhoto(selected_album, selected_index);
}

function backPhoto(clone) {
    let photo_index = parseInt(clone.getAttribute('index'));
    if (photo_index <= 0) { return false };
    shiftPhoto(clone, photo_index - 1);
}

function nextPhoto(clone) {
    let photo_index = parseInt(clone.getAttribute('index'));
    let photo_max = parseInt(clone.getAttribute('max')) - 1;
    if (photo_index >= photo_max) { return false };
    shiftPhoto(clone, photo_index + 1);
}

function shiftPhoto(clone, index) {
    let photo_date = clone.getAttribute('date');
    let photo_data = image_data[photo_date];
    let index_id = photo_data[index];
    if (!index_id) { return false };

    let entry_media = clone.querySelector('.entry_media');
    let photo_select = clone.querySelector('.photo_select');
    let active_select = photo_select.querySelector('.active');
    let new_select = photo_select.querySelectorAll('div')[index];
    active_select.classList.remove('active');
    new_select.classList.add('active');
    
    let preview = `url(media/preview/IMG_${index_id}.jpg)`;
    let full = `url(media/ful/IMG_${index_id}.jpg)`;

    clone.setAttribute('index', index);
    entry_media.style.setProperty('--preview_url', preview);
}

for (var i in image_data) {
    makeAlbum(i);
}