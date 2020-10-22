function cekData(){
  var nama = document.getElementById('nama').value;
  var email = document.getElementById('email').value;
  var negara = document.getElementById('negara').value;
  var lahir = 2020-document.getElementById('lahir').value;
  var gend = new Array();
  var gend = document.getElementsByName('gender');
  var jk = "";
  if (gend[0].checked === true){
    jk = gend[0].value;
  } else if (gend[1].checked === true){
    jk = gend[1].value;
  } else if (gend[2].checked === true){
    jk = gend[2].value;
  }

  var hasil = document.getElementById("container");
    var cetak = "";
    if(nama==""||email==""||negara==""||lahir==""||jk==""){
        if (nama == '') cetak+="<B>Kamu belum mengisi nama!";
        if (email == '') cetak+="<B>Kamu belum mengisi email!";
        if (negara == '') cetak+="<B>Kamu belum memilih asal negara!";
        if (lahir == '') cetak+="<B>Kamu belum memilih tahun lahir!";
        if (jk == '') cetak="<B>Kamu belum memilih jenis kelamin!";
    }
    else{
        cetak+= `<h2>Selamat Datang Di hiGirls!</h2>
        <table>
		      <tr>
		        <td>Nama Lengkap </td>
		        <td>:</td>
		        <td>${nama}</td>
		      </tr>
		      <tr>
		        <td>Email </td>
		        <td>:</td>
		        <td>${email}</td>
		      </tr>
		      <tr>
		        <td>Jenis Kelamin </td>
		        <td>:</td>
		        <td>${jk}</td>
		      </tr>
		      <tr>
		        <td>Negara </td>
		        <td>:</td>
		        <td>${negara}</td>
		      </tr>
		      <tr>
		        <td>Umur Anda </td>
		        <td>:</td>
		        <td>${lahir} Tahun</td>
		      </tr>
		</table>`;   
    } 
    hasil.innerHTML = cetak;
}