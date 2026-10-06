 class Student {
    #photo;
    #name;
    #age;
    #faculty;
    #year;
    constructor(photo, name, age, faculty, year) {
        this.#photo = photo;
        this.#name = name;
        this.#age = age;
        this.#faculty = faculty;
        this.#year = year;
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }

    get age() {
        return this.#age;
    }

    set age(age) {
        if (age < 15 || age > 60) {
            alert("Значение для age не может быть таким");
        } else {
            this.#age = age;
        }
    }

    get faculty() {
        return this.#faculty;
    }
    set faculty(faculty) {
        this.#faculty = faculty;
    }
    get year() {
        return this.#year;
    }
    set year(year) {
        if (year <= 0) {
            alert("Значение для year не может быть таким");
        } else {
            this.#year = year;
        }
    }
    get photo() {
        return this.#photo;
    }
    set photo(photo) {
        this.#photo = photo;
    }

    Introduce(photo, name, age, faculty, year) {
        this.#photo = photo;
        this.#name = name;
        this.#age = age;
        this.#faculty = faculty;
        this.#year = year;

        this.show = function (element) {
            element.innerHTML = "";
            let imgEl = document.querySelector(".img");
            if (imgEl) {
                imgEl.src = this.#photo;
            }
            element.insertAdjacentHTML("beforeend", `Имя: ${this.#name}<br />`);
            if (this.#year > 4) {
                element.insertAdjacentHTML("beforeend", `Ученик уже закончил обучение<br/>`);
            } else {
                element.insertAdjacentHTML("beforeend", `Возраст: ${this.#age}<br />`);
                element.insertAdjacentHTML("beforeend", `Факультет: ${this.#faculty}<br/>`);
                element.insertAdjacentHTML("beforeend", `Год обучения: ${this.#year}<br/>`);
            }
        };
    }

    UpdateYear(year) {
        this.year = year + 1;
    }

   grad(year) {
        if (year > 4) {
            alert("Ученик уже закончил обучение");
            return true;
        } else {
            this.#year = year;
            return false;
        }
    }
}

let stud1 = new Student(
    "https://img.freepik.com/premium-photo/portrait-of-a-businessman-with-mustache-and-glasses-3d-rendering_1142-59574.jpg",
    "Bob",25,"IT",4
);
let info1 = document.querySelector(".info");

stud1.Introduce(
    "https://img.freepik.com/premium-photo/portrait-of-a-businessman-with-mustache-and-glasses-3d-rendering_1142-59574.jpg",
    "Bob",25,"IT",4
);
stud1.show(info1);
let stud2 = new Student(
    "https://img.freepik.com/premium-photo/portrait-of-a-businessman-with-mustache-and-glasses-3d-rendering_1142-59574.jpg",
    "Max",24,"Art",2
);
let info2 = document.querySelector(".info");

stud2.Introduce(
    "https://img.freepik.com/premium-photo/portrait-of-a-businessman-with-mustache-and-glasses-3d-rendering_1142-59574.jpg",
    "Max",24,"Art",2
);
stud2.show(info2);