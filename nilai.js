let dataSiswa = {

    1 : [
        "Ahmad",
        "Budi",
        "Citra"
    ],

    2 : [
        "Dewi",
        "Eka",
        "Farhan"
    ],

    3 : [
        "Gilang",
        "Hani"
    ],

    4 : [
        "Indra",
        "Joko"
    ],

    5 : [
        "Kiki",
        "Lina"
    ],

    6 : [
        "Maman",
        "Nisa"
    ]

};

let semuaNilai = [];

function loadSiswa(){

    let kelas = document.getElementById("kelas").value;

    let siswa = document.getElementById("siswa");

    siswa.innerHTML = "";

    dataSiswa[kelas].forEach((nama)=>{

        siswa.innerHTML += `

            <option>
                ${nama}
            </option>

        `;

    });

}

function simpanNilai(){

    let kelas = document.getElementById("kelas").value;

    let siswa = document.getElementById("siswa").value;

    let mapel = document.getElementById("mapel").value;

    let nilai = document.getElementById("nilai").value;

    if(kelas == ""){

        alert("Pilih kelas");

        return;

    }

    if(nilai < 0 || nilai > 100){

        alert("Nilai harus 0 - 100");

        return;

    }

    semuaNilai.push({

        kelas,
        siswa,
        mapel,
        nilai

    });

    renderTabel();

    document.getElementById("nilai").value = "";

}

function renderTabel(){

    let tbody = document.getElementById("tbody");

    tbody.innerHTML = "";

    semuaNilai.forEach((item,index)=>{

        tbody.innerHTML += `

        <tr>

            <td>${index+1}</td>

            <td>
                Kelas ${item.kelas}
            </td>

            <td>
                ${item.siswa}
            </td>

            <td>
                ${item.mapel}
            </td>

            <td>
                ${item.nilai}
            </td>

        </tr>

        `;

    });

}
