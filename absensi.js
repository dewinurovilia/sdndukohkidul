document.getElementById("tampilKelas")
.innerHTML =
localStorage.getItem("kelas");

document.getElementById("tampilGuru")
.innerHTML =
localStorage.getItem("guru");

let siswa = {

    "1001":"Ahmad",
    "1002":"Budi",
    "1003":"Citra",
    "1004":"Dewi"

};

let absensi = [];

function jam(){

    return new Date()
    .toLocaleTimeString();

}

function renderAbsensi(){

    let tbody =
    document.getElementById("tbody");

    tbody.innerHTML = "";

    absensi.forEach((item,index)=>{

        tbody.innerHTML += `

        <tr>

            <td>${index+1}</td>

            <td>${item.nama}</td>

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

    const html5QrCode =
    new Html5Qrcode("reader");

    html5QrCode.start(

        { facingMode:"environment" },

        {
            fps:10,
            qrbox:250
        },

        (decodedText)=>{

            let nama =
            siswa[decodedText];

            if(!nama){

                alert("Siswa tidak ditemukan");

                return;

            }

            let sudah =
            absensi.find(
                x=>x.kode == decodedText
            );

            if(sudah){

                alert("Sudah absen");

                return;

            }

            absensi.push({

                kode:decodedText,
                nama:nama,
                jam:jam()

            });

            renderAbsensi();

        }

    );

}
