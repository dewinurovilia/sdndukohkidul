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

function tanggal(){

    return new Date()
    .toLocaleDateString();

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

            let data = {

                no : absensi.length + 1,

                tanggal : tanggal(),

                kelas :
                localStorage.getItem("kelas"),

                guru :
                localStorage.getItem("guru"),

                nama : nama,

                jam : jam(),

                status : "Hadir"

            };

            absensi.push(data);

            kirimGoogleSheet(data);

            alert(

                nama +
                " berhasil absen"

            );

        }

    );

}

function kirimGoogleSheet(data){

    fetch(scriptURL,{

        method:"POST",

        body:JSON.stringify(data)

    })

    .then(res=>res.text())

    .then(res=>{

        console.log("Berhasil");

    })

    .catch(err=>{

        console.log(err);

    });

}
