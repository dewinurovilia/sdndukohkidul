function mulaiAbsen(){

    let kelas = document.getElementById("kelas").value;

    let guru = document.getElementById("guru").value;

    if(kelas == ""){

        alert("Pilih kelas terlebih dahulu");

        return;

    }

    if(guru == ""){

        alert("Masukkan nama guru");

        return;

    }

    localStorage.setItem("kelas",kelas);

    localStorage.setItem("guru",guru);

    window.location.href = "absensi.html";

}

function bukaNilai(){

    window.location.href = "nilai.html";

}
