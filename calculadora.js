function datos(){
	var dir1 = parseInt(document.getElementById("dir1").value);
	var dir2 = parseInt(document.getElementById("dir2").value);
	var dir3 = parseInt(document.getElementById("dir3").value);
	var dir4 = parseInt(document.getElementById("dir4").value);
	var subr = parseInt(document.getElementById("subr").value);
	var clase = '';
	var mas1;
	var mas2;
	var mas3;
	var mas4;
	var bits;
	var dt;

	if ((dir1 >= 1) && (dir1 <= 127)) {
		clase = 'A';
		
		if (subr > 4) {
			bits = 3;
			mas2 = Math.pow(2,bits) - 1;

			mas1 = 255;
			mas2 = mas2 << (8-bits);
			mas3 = 0;
			mas4 = 0;
		}

		else if (subr > 2 && subr <= 4) {
			bits = 2;
			mas2 = Math.pow(2,bits) - 1;

			mas1 = 255;
			mas2 = mas2 << (8-bits);
			mas3 = 0;
			mas4 = 0;
		} 

		else if (subr == 2) {
			bits = 1;
			mas2 = Math.pow(2,bits) - 1;

			mas1 = 255;
			mas2 = mas2 << (8-bits);
			mas3 = 0;
			mas4 = 0;
		}

		else if (subr == 1) {
			mas1 = 255;
			mas2 = 0;
			mas3 = 0;
			mas4 = 0;
		}

		dt = Math.pow(2,24) - 2;
	}

	if (dir1 >= 128 && dir1 <= 191) {
		clase = "B";

		if (subr > 4) {
			bits = 3;
			mas3 = Math.pow(2,bits) - 1;

			mas1 = 255;
			mas2 = 255;
			mas3 = mas3 << (8-bits);
			mas4 = 0;
		}

		else if (subr > 2 && subr <= 4) {
			bits = 2;
			mas3 = Math.pow(2,bits) - 1;

			mas1 = 255;
			mas2 = 255;
			mas3 = mas3 << (8-bits);
			mas4 = 0;
		} 

		else if (subr == 2) {
			bits = 1;
			mas3 = Math.pow(2,bits) - 1;

			mas1 = 255;
			mas2 = 255;
			mas3 = mas3 << (8-bits);
			mas4 = 0;
		}

		else if (subr == 1) {
			mas1 = 255;
			mas2 = 255;
			mas3 = 0;
			mas4 = 0;
		}

		dt = Math.pow(2,16) - 2;
	}

	if (dir1 >= 192 && dir1 <= 223) {
		clase = "C";

		if (subr > 4) {
			bits = 3;
			mas4 = Math.pow(2,bits) - 1;

			mas1 = 255;
			mas2 = 255;
			mas3 = 255;
			mas4 = mas4 << (8-bits);
		}

		else if (subr > 2 && subr <= 4) {
			bits = 2;
			mas4 = Math.pow(2,bits) - 1;

			mas1 = 255;
			mas2 = 255;
			mas3 = 255;
			mas4 = mas4 << (8-bits);
		} 

		else if (subr == 2) {
			bits = 1;
			mas4 = Math.pow(2,bits) - 1;

			mas1 = 255;
			mas2 = 255;
			mas3 = 255;
			mas4 = mas4 << (8-bits);
		}

		else if (subr == 1) {
			mas1 = 255;
			mas2 = 255;
			mas3 = 255;
			mas4 = 0;
		}

		dt = Math.pow(2,8) - 2;
	}

	alert(
		"Direccion IP: " + dir1 + "." + dir2 + "." + dir3 + "." + dir4 + "   " +
		"Mascara de SubRed: " + mas1 + "." + mas2 + "." + mas3 + "." + mas4 + "	  " +
		"Direcciones disponibles: " + dt + "   " + 
		"Clase de la Direccion: " + clase
	);
}
