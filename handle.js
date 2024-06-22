const data = {
    'Thaddeus': {
        card: {
            bio: 'Web Developer',
            icon: 'icon/kircic.png',
        },

        social: {
            'cashapp': 'https://cash.app/$thadreal',
            'discord': 'https://discord.com/invite/p8ZZXZqnag',
            'github': 'https://github.com/Korwith',
            'instagram': 'https://www.instagram.com/thadcoolfr/',
            'youtube': 'https://www.youtube.com/channel/UCLcCNfyLG_jQev4MdkHtCZw',
        },

        images: {
            '06/09/24': {
                name: 'Railroad Tracks',
                people: ['Paris'],
                id: [1175, 1186, 1188, 1193, 1198, 1199, 1203, 1209],
            },
            '07/21/23': {
                name: 'Amber Meadows',
                people: ['Paris'],
                id: [7991, 7993, 8015],
            },
            '07/20/23': {
                name: 'Rosehill Manor',
                people: ['Cody', 'Paris'],
                id: [7933, 7936, 7927, 7918],
            },
            '07/05/23': {
                name: 'Downtown Frederick',
                people: ['Riley', 'Cody'],
                id: [6593, 6588, 6582, 6603, 6649],
            },
            '07/04/23': {
                name: 'Downtown Frederick',
                people: ['Paris', 'Edin', 'Jeremy', 'Riley'],
                id: [6505, 6549, 6535, 6504, 6541],
            },
            '06/26/23': {
                name: 'Downtown Frederick',
                people: ['Paris'],
                id: [5935, 5947, 5949, 5976],
            },
            '06/19/23': {
                name: 'Downtown Frederick',
                people: ['Paris'],
                id: [5336, 5385, 5350, 5331, 5321, 5314, 5411],
            },
            '06/18/23': {
                name: 'Monocacy River',
                people: ['Paris'],
                id: [5046, 5091, 5107, 5152, 5156, 5168],
            },
            '06/16/23': {
                name: 'Downtown Frederick',
                people: ['Riley', 'Liam'],
                id: [4876, 4877, 4870, 4883, 4897, 4907]
            },
            '06/05/23': {
                name: 'Downtown Frederick',
                people: ['Paris'],
                id: [3895, 3900, 3902, 3906, 3913, 3915, 3950],
            },
            '06/02/23': {
                name: 'North Crossing "Suge" Island',
                people: ['Riley', 'Liam', 'Paris'],
                id: [3690, 3678, 3675]
            },
            '04/09/23': {
                name: 'Amber Meadows & Downtown',
                caption: 'Easter 2023, I walked 20 miles on this day.',
                id: ['0410', '0415', '0591', '0595', '0602']
            },
            '04/08/23': {
                name: 'Amber Meadows & Downtown',
                id: ['0323', '0353', '0389', '0539', '0378']
            },
            '04/02/23': {
                name: 'North Crossing "Suge" Island',
                people: ['Riley', 'Edin'],
                id: ['0022', '0034', '0068', '0071']
            },
            '03/25/23': {
                name: 'Downtown Frederick',
                people: ['Riley', 'Liam'],
                id: [9485, 9540, 9626, 9629]
            },
            '02/03/23': {
                name: 'Downtown Frederick',
                people: ['Riley'],
                id: [6991, 7031, 7034, 7143, 7138, 7131, 7078, 7052, 7049]
            },
            '01/24/23': {
                name: 'Amber Meadows',
                people: ['Riley'],
                id: [6647, 6642, 6625, 6623, 6599],
            },
            '01/06/23': {
                name: 'North Crossing',
                id: [5425, 5426, 5439, 5462, 5465, 5515],
            },
            '12/12/22': {
                name: 'Downtown Frederick',
                people: ['Riley'],
                id: [4498, 4514, 4519, 4535, 4536, 4540],
            },
            '12/04/22': {
                name: 'Downtown Frederick',
                id: [4277, 4322, 4330, 4331, 4348]
            },
            '09/18/22': {
                name: 'Frederick Fair',
                people: ['Edin', 'Max', 'Riley'],
                id: [1818, 1839, 1842, 1866, 1899, 1905, 1907]
            },
            '08/23/22': {
                name: 'Downtown Frederick',
                people: ['Evan', 'Riley'],
                id: ['0680', '0701', '0706', '0726', '0748'],
            },
            '08/16/22': {
                name: 'Downtown Frederick',
                id: ['0494', '0501', '0506', '0509', '0522', '0526', '0534', '0539']
            },
            '08/06/22': {
                name: 'Downtown Frederick',
                people: ['Riley'],
                id: [8610, 8613, 8614, 8632, 8661, 8673]
            },
            '07/21/22': {
                name: 'Hershey Park',
                people: ['Riley'],
                id: [8086, 8090, 8093, 8120, 8153]
            },
            '11/28/21': {
                name: 'Downtown Frederick',
                people: ['Paris'],
                id: [1043, 1074, 1213, 1307, 1311, 1314]
            },
        }
    }
}

const n_to_month = {
    '01': 'January',
    '02': 'February',
    '03': 'March',
    '04': 'April',
    '05': 'May',
    '06': 'June',
    '07': 'July',
    '08': 'August',
    '09': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December'
};

const user_select = document.querySelector('.user_select');
const user_select_icon = user_select.querySelector('.icon');
const user_select_name = user_select.querySelector('.username');
const card = document.querySelector('.card');
const profile = card.querySelector('.profile');
const profile_icon = profile.querySelector('.icon');
const profile_about = profile.querySelector('.about');
const profile_username = profile_about.querySelector('.username');
const profile_bio = profile_about.querySelector('.bio');
const social_holder = document.querySelector('.social');

const content = document.querySelector('.content');
const sidebar = document.querySelector('nav.sidebar');
const sidebar_button = document.querySelector('.sidebar_icon');
const nav_select = sidebar.querySelector('.nav_select');
const entry_placeholder = document.querySelector('#placeholder.entry');
const nav_placeholder = document.querySelector('#placeholder.nav_button');
const entry_grid = document.querySelector('.grid_holder');
const profile_button = document.querySelector('.nav_button.profile_button');
const profile_button_text = profile_button.querySelector('.section');

const photo_holder = document.querySelector('.photo_holder');
const photo = photo_holder.querySelector('.photo');
const photo_holder_date = photo_holder.querySelector('span.date');
const photo_holder_people = photo_holder.querySelector('span.people');
const photo_holder_location = photo_holder.querySelector('span.location');
const photo_holder_caption = photo_holder.querySelector('span.caption');
const photo_holder_link = photo_holder.querySelector('a.link');
const exit = photo_holder.querySelector('.main.exit');
const mobile_exit = photo_holder.querySelector('.mobile.exit');
const related_placeholder = document.querySelector('#placeholder.related_holder');
const bottom_info = document.querySelector('.photo_side .bottom_info');
const back_photo = photo_holder.querySelector('.photo_back');
const next_photo = photo_holder.querySelector('.photo_next');

let selected_user;
let selected_location;

function handleSidebar() {
    let hidden = sidebar.classList.contains('hide');
    if (!hidden) {
        sidebar.classList.add('hide');
        content.classList.add('expand');
    } else {
        sidebar.classList.remove('hide');
        content.classList.remove('expand');
    }

    let photo_menu_hidden = photo_holder.classList.contains('hide');
    if (!photo_menu_hidden) {
        photo_holder.classList.add('hide');
        selected_location = null;
    }
}
sidebar_button.addEventListener('mouseup', handleSidebar);

function handleResize() {
    if (window.innerWidth < 767) {
        sidebar.classList.add('hide');
        content.classList.add('expand');
    }
    content.focus();
}
window.onresize = handleResize;
handleResize();

function timeSelect(event) {
    let month = event.target.getAttribute('month');
    let year = event.target.getAttribute('year');
    let first_entry = entry_grid.querySelector(`.entry[month="${month}"][year="${year}"]`);
    if (!first_entry) { return false };
    first_entry.scrollIntoView({ behavior: 'smooth', block: 'center' });
    first_entry.classList.add('highlight');
    setTimeout(function () {
        first_entry.classList.remove('highlight');
    }, 250)

    if (window.innerWidth < 767) {
        sidebar.classList.add('hide');
        content.classList.add('expand');
    }

    content.focus();
}

function profileTop() {
    card.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (window.innerWidth < 767) {
        sidebar.classList.add('hide');
        content.classList.add('expand');
    }

    content.focus();
}

function findSameLocation(this_location, date) {
    let this_data = data[selected_user].images;
    let matching = {};

    for (var i in this_data) {
        if (i == date) { continue };
        let this_photo_data = this_data[i];
        if (this_photo_data.name != this_location) { continue };
        matching[i] = this_photo_data;
    }

    return matching;
}


function findSamePeople(people_list, date) {
    if (!people_list) { return {} };
    let this_data = data[selected_user].images;
    let matching = {};

    for (var i in this_data) {
        if (i == date) { continue };
        let this_photo_data = this_data[i];
        for (var j = 0; j < people_list.length; j++) {
            let this_person = people_list[j];
            if (!this_photo_data.people) { continue };
            if (!this_photo_data.people.includes(this_person)) { continue };
            if (!matching[this_person]) {
                matching[this_person] = {};
            }
            matching[this_person][i] = this_photo_data;
        }
    }

    return matching;
}

function generateRelatedAlbums(date) {
    let this_data = data[selected_user].images;
    let included_people = this_data[date].people;
    let this_location = this_data[date].name;

    let matching_location = findSameLocation(this_location, date);
    let matching_people = findSamePeople(included_people, date);

    if (Object.keys(matching_location).length > 0) {
        let this_related_holder = related_placeholder.cloneNode(true);
        let this_title = this_related_holder.querySelector('.related_title');
        let this_flex = this_related_holder.querySelector('.related_flex');
        this_title.classList.add('hide');
        this_related_holder.removeAttribute('id');
        bottom_info.appendChild(this_related_holder);

        for (var i in matching_location) {
            makeAlbum(selected_user, i, this_flex);
        }
    }

    for (var i in matching_people) {
        let this_array = matching_people[i];
        if (this_array.length < 1) { continue };
        let this_related_holder = related_placeholder.cloneNode(true);
        let this_title = this_related_holder.querySelector('.related_title');
        let this_flex = this_related_holder.querySelector('.related_flex');
        this_title.innerHTML = 'With ' + i;
        this_related_holder.classList.add('has_title');
        this_related_holder.removeAttribute('id');
        bottom_info.appendChild(this_related_holder);

        for (var j in this_array) {
            let this_entry_data = this_array[j];
            makeAlbum(selected_user, j, this_flex);
        }
    }
}

function photoNext() {
    let photo_date = photo.getAttribute('date');
    let photo_index = parseInt(photo.getAttribute('index'));
    let photo_info = data[selected_user].images[photo_date];
    if (photo_index + 1 >= photo_info.id.length) { return false };
    shiftPhoto(photo_index + 1);
}
next_photo.addEventListener('mouseup', photoNext);

function photoBack() {
    let photo_date = photo.getAttribute('date');
    let photo_index = parseInt(photo.getAttribute('index'));
    if (photo_index - 1 <= -1) { return false };
    shiftPhoto(photo_index - 1);
}
back_photo.addEventListener('mouseup', photoBack);

function shiftPhoto(photo_index) {
    let photo_date = photo.getAttribute('date');
    let photo_info = data[selected_user].images[photo_date];
    let new_url = `media/preview/IMG_${photo_info.id[photo_index]}.jpg`;
    photo.setAttribute('index', photo_index);
    photo_holder_link.setAttribute('href', `media/full/IMG_${photo_info.id[photo_index]}.jpg`);
    photo.style.backgroundImage = `url(${new_url})`;
}

function photoSelect(event) {
    if (!event.target.classList.contains('entry')) { return false };
    let this_date = event.target.getAttribute('date');
    let this_data = data[selected_user].images[this_date];
    let photo_id = this_data.id;
    let first_id = photo_id[0];

    photo.style.backgroundImage = `url(media/preview/IMG_${first_id}.jpg)`;
    photo.setAttribute('date', this_date);
    photo.setAttribute('index', 0);
    photo_holder_link.setAttribute('href', `media/full/IMG_${first_id}.jpg`);
    photo_holder_date.innerHTML = this_date;
    photo_holder_location.innerHTML = this_data.name;

    if (this_data.people) {
        photo_holder_people.innerHTML = this_data.people.join(', ');
    } else {
        photo_holder_people.parentElement.classList.add('hide');
    }

    if (this_data.caption) {
        photo_holder_caption.innerHTML = this_data.caption;
    } else {
        photo_holder_caption.parentElement.classList.add('hide');
    }

    if (!event.target.parentElement.classList.contains('related_flex')) {
        let previous_related = bottom_info.querySelectorAll('.related_holder');
        for (var i = 0; i < previous_related.length; i++) {
            previous_related[i].remove();
        }

        photo_holder.classList.remove('hide');
        generateRelatedAlbums(this_date);
    }
    selected_location = this_data.name;
}

function hidePhotoSelect() {
    photo_holder.classList.add('hide');
    selected_location = null;
}
exit.addEventListener('mouseup', hidePhotoSelect);
mobile_exit.addEventListener('mouseup', hidePhotoSelect);

function getMonthCount(date, name) {
    let date_split = date.split('/');
    let month = date_split[0];
    let year = date_split[2];
    
    let this_data = data[name].images;
    let count = 0;

    for (var i in this_data) {
        let this_split = i.split('/');
        let this_month = this_split[0];
        let this_year = this_split[2];

        if (month != this_month) { continue };
        if (year != this_year) { continue };
        count++;
    }

    return count;
}

function makeAlbum(name, date, parent) {
    let this_data = data[name].images[date];
    let first_preview = this_data.id[0];
    let clone = entry_placeholder.cloneNode(true);
    let clone_date = clone.querySelector('.text.date');
    let clone_title = clone.querySelector('.text.title');

    clone.style.backgroundImage = `url(media/preview/IMG_${first_preview}.jpg)`;
    clone_date.innerHTML = date;
    clone_title.innerHTML = this_data.name;
    clone.setAttribute('date', date);
    clone.removeAttribute('id');
    clone.onclick = photoSelect;

    if (!parent) {
        entry_grid.appendChild(clone);
    } else {
        parent.appendChild(clone);
    }

    let date_split = date.split('/');
    let month = n_to_month[date_split[0]];
    let year = date_split[2];
    let month_select = nav_select.querySelector(`.nav_button[month="${month}"][year="${year}"]`);
    let year_seperator = nav_select.querySelector(`hr[year="${'20' + year}"]`);
    clone.setAttribute('month', month);
    clone.setAttribute('year', year);

    if (!year_seperator) {
        let hr = document.createElement('hr');
        hr.setAttribute('year', '20' + year);
        nav_select.appendChild(hr);
    }

    if (month_select) { return false };
    let button_clone = nav_placeholder.cloneNode(true);
    let button_text = button_clone.querySelector('.section');
    button_text.innerHTML = `${month} (${getMonthCount(date, name)})`;
    button_clone.setAttribute('month', month);
    button_clone.setAttribute('year', year);
    button_clone.removeAttribute('id');
    button_clone.onclick = timeSelect;
    nav_select.appendChild(button_clone);
}

function loadCard(name) {
    let this_data = data[name];
    user_select_icon.style.backgroundImage = `url(${this_data.card.icon})`;
    user_select_name.innerHTML = name;
    profile_username.innerHTML = name;
    profile_bio.innerHTML = this_data.card.bio;
    profile_icon.style.backgroundImage = `url(${this_data.card.icon})`;

    for (var i in this_data.social) {
        let link = document.createElement('a');
        let button = document.createElement('div');
        button.classList.add(i);
        link.setAttribute('target', '_blank');
        link.setAttribute('href', this_data.social[i]);
        link.appendChild(button);
        social_holder.appendChild(link);
    }
}

function loadPerson(name) {
    let this_data = data[name];
    let images = this_data.images;

    loadCard(name);
    for (var i in images) {
        makeAlbum(name, i);
    }

    profile_button_text.innerHTML = `Profile (${Object.keys(images).length})`;
    selected_user = name;
}

loadPerson('Thaddeus');