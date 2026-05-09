let siswa = {

    "1001":"Ahmad",
    "1002":"Budi",
    "1003":"Citra",
    "1004":"Dewi"

};

let absensi = [];
let nilai = [];

function jam(){

    return new Date().toLocaleTimeString();

}

function renderAbsensi(){

    let tbody = document.getElementById("tbody");

    tbody.innerHTML = "";

    absensi.forEach((item,index)=>{

        tbody.innerHTML += `

        <tr>

            <td>${index+1}</td>
            <td>${item.nama}</td>
            <td>${item.kelas}</td>
            <td>${item.jam}</td>

            <td>

                <span class="badge bg-success">
                    Hadir
                </span>

            </td>

        </tr>

        `;

    });

}

function mulaiScan(){

    const html5QrCode = new Html5Qrcode("reader");

    html5QrCode.start(

        { facingMode:"environment" },

        {
            fps:10,
            qrbox:250
        },

        (decodedText)=>{

            let nama = siswa[decodedText];

            if(!nama){

                alert("Siswa tidak ditemukan");

                return;

            }

            let sudah = absensi.find(
                x => x.kode == decodedText
            );

            if(sudah){

                alert("Sudah absen");

                return;

            }

            absensi.push({

                kode:decodedText,
                nama:nama,
                kelas:document.getElementById("kelas").value,
                jam:jam()

            });

            renderAbsensi();

            bunyi();

        }

    );

}

function bunyi(){

    let audio = new Audio(

        "https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg"

    );

    audio.play();

}

function resetAbsensi(){

    absensi = [];

    renderAbsensi();

}

function simpanNilai(){

    let nama = document.getElementById("nama").value;

    let tugas = Number(
        document.getElementById("tugas").value
    );

    let ulangan = Number(
        document.getElementById("ulangan").value
    );

    let praktik = Number(
        document.getElementById("praktik").value
    );

    let rata = (tugas + ulangan + praktik) / 3;

    nilai.push({

        nama,
        tugas,
        ulangan,
        praktik,
        rata

    });

    renderNilai();

    document.getElementById("nama").value = "";

    document.getElementById("tugas").value = "";

    document.getElementById("ulangan").value = "";

    document.getElementById("praktik").value = "";

}

function renderNilai(){

    let body = document.getElementById("nilaiBody");

    body.innerHTML = "";

    nilai.forEach((n,index)=>{

        body.innerHTML += `

        <tr>

            <td>${index+1}</td>
            <td>${n.nama}</td>
            <td>${n.tugas}</td>
            <td>${n.ulangan}</td>
            <td>${n.praktik}</td>
            <td>${n.rata.toFixed(1)}</td>

        </tr>

        `;

    });

}
