
      //1
      const Tcpip = {
        template: `
          <div class="inicio contenedor">
            <div class="hola animate__animated animate__swing">
              <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="https://dc722jrlp2zu8.cloudfront.net/media/cache/c7/dc/c7dc02477e6dcf1497a5f49a619e23e1.webp" class="d-block w-100" alt="...">
                  </div>
                </div
              </div>
              <div class="text-center margintext">
                <h1 class="titprin">TCP/IP</h1>
                <p align="justify">
                  Es importante que los equipos tengan un modo común de comunicarse entre ellos. Para la mayoría de los equipos actuales, este modo es TCP/IP. Este suele venir integrado en los equipos y está automatizado en buena medida, puede ser útil comprender el modelo TCP/IP, en especial para configurar un equipo para conectarlo a otro sistema.
                </p>
                <img src="https://www.net-usb.com/images/upload/UNG/articles/over/1.1.jpg" class="imagencuerpo1">
                <h2>¿Que significa Tcp/Ip?</h2>
                <p align="justify">
                  son las siglas de Transmission Control Protocol/Internet Protocol (Protocolo de control de transmisión/Protocolo de Internet). TCP/IP es un conjunto de reglas estandarizadas que permiten a los equipos comunicarse en una red como Internet. Por sí mismo, un equipo puede realizar determinadas tareas. Pero su potencia se multiplica cuando es capaz de comunicarse con otros. Muchas de las cosas para las que utilizamos los equipos (enviar mensajes de correo electrónico, ver Netflix u obtener indicaciones para llegar a un sitio) dependen de la comunicación entre ellos. Pueden ser equipos de distintas marcas o incluso encontrarse en zonas del mundo diferentes. Y las personas y programas que los utilizan pueden hablar distintos lenguajes humanos e informáticos. Una interacción determinada puede darse entre dos sistemas informáticos o involucrar cientos de sistemas. Sin embargo, como sucede al pasar una carta o un paquete de mano en mano, cada transacción se produce entre solo dos equipos cada vez. Para que esto suceda, los dos equipos deben saber, por adelantado, cómo se espera que se comuniquen.
                  Los equipos lo resuelven mediante protocolos. Un protocolo es un conjunto de reglas convenido. En términos humanos, utilizamos protocolos sociales para saber cómo comportarnos y comunicarnos con otras personas. Las tecnologías tienen su propia forma de establecer reglas de comunicación, como el telégrafo cuando empleaba el código Morse o una radio CB en la que se utilizan códigos como “10-4”.
                </p>
                <img src="https://academy.avast.com/hs-fs/hubfs/New_Avast_Academy/%20What%20Is%20TCP_IP/What_is_TCP-IP.png?width=660&name=What_is_TCP-IP.png" class="imagencuerpo11">
                <h2>Diferencias entre Tcp e Ip</h2>
                <p align="justify">
                  TCP e IP son dos protocolos distintos para redes informáticas.
                  IP es la parte que obtiene la dirección a la que se envían los datos. TCP se encarga de la entrega de los datos una vez hallada dicha dirección IP.
                  Es posible separarlos, pero lo cierto es que no tiene mucho sentido diferenciar entre TCP e IP. Como se usan juntos tan habitualmente, “TCP/IP” y “modelo TCP/IP” son ya terminología reconocida.
                  Mírelo de esta forma: La dirección IP es como el número de teléfono que se asigna a su smartphone. TCP es toda la tecnología que hace que el teléfono emita un timbre al recibir una llamada y que le permite hablar con alguien al otro lado de la línea. Son cosas diferentes, pero tampoco tienen sentido la una sin la otra.
                </p>
                <h2 class="titsec">Funciones del Tcp/Ip</h2>
                <p align="justify">
                  TCP/IP fue desarrollado por el Departamento de Defensa de EE. UU. para especificar el modo en que los equipos transfieren datos de un dispositivo a otro. TCP/IP incide mucho en la precisión y dispone de varios pasos para garantizar la correcta transmisión de los datos entre ambos equipos.
                  Este es uno de los mecanismos que emplea para ello. Si el sistema enviara un mensaje entero en una pieza y se encontrara cualquier problema, sería necesario enviar de nuevo el mensaje completo. Lo que hace TCP/IP es descomponer cada mensaje en paquetes que se vuelven a ensamblar en el otro extremo. De hecho, cada paquete podría tomar una ruta distinta hasta el equipo de destino si la ruta deja de estar disponible o está muy congestionada.
                  Además, TCP/IP divide las distintas tareas de comunicación en capas. Cada capa tiene una función distinta. Los datos pasan por cuatro capas independientes antes de recibirse en el otro extremo (como se explica en la sección siguiente). A continuación, TCP/IP recorre estas capas en orden inverso para reensamblar los datos y presentárselos al destinatario.
                </p>
                <img src="http://www.textoscientificos.com/imagenes/redes/encapsulacion-tcp-ip.gif" class="imagencuerpo111">  
              </div>
            </div>
          </div>
        `
      };
      const Capas = {
        template: `
          <div class="portafolio contenedor">
            <div class="hola animate__animated animate__backInDown">
              <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="https://www.hebergementwebs.com/image/bd/bd5e6d5a7466551ae00284e55fa2e052.jpg/entrega-continua-definicion-ventajas-y-herramientas.jpg" class="d-block w-100" alt="...">
                  </div>
                </div
              </div>
              <div class="text-center margintext">
                <h1 class="titprin">Capas del Tcp/Ip</h1>
                <p align="justify">
                  Los protocolos son conjuntos de normas para formatos de mensaje y procedimientos que permiten a las máquinas y los programas de aplicación intercambiar información. Cada máquina implicada en la comunicación debe seguir estas normas para que el sistema principal de recepción pueda interpretar el mensaje. El conjunto de protocolos TCP/IP puede interpretarse en términos de capas
                </p>
                <img src="https://www.profesionalreview.com/wp-content/uploads/2020/02/protocolo-TCP-IP.png" class="imagencuerpo2">
                <h2>Capa de enlace de datos</h2>
                <p align="justify">
                  La capa de enlace de datos (también denominada capa de enlace, capa de interfaz de red o capa física) es la que maneja las partes físicas del envío y recepción de datos mediante el cable Ethernet, la red inalámbrica, la tarjeta de interfaz de red, el controlador del dispositivo en el equipo, etcétera.
                </p>  
                <h2 class="titsec">Capa de Internet</h2>
                <p align="justify">
                  La capa de Internet (también denominada capa de red) controla el movimiento de los paquetes alrededor de la red.
                </p>
                <h2 class="titsec">Capa de transporte</h2>
                <p align="justify">
                  La capa de transporte es la que proporciona una conexión de datos fiable entre dos dispositivos. Divide los datos en paquetes, hace acuse de recibo de los paquetes que recibe del otro dispositivo y se asegura de que el otro dispositivo haga acuse de recibo de los paquetes que recibe a su vez.
                </p>
                <h2 class="titsec">Capa de aplicaciones</h2>
                <p align="justify">
                  La capa de aplicaciones es el grupo de aplicaciones que requiere comunicación de red. Es con lo que el usuario suele interactuar, como el correo electrónico y la mensajería. Como la capa inferior gestiona los detalles de la comunicación, las aplicaciones no tienen que preocuparse por ello.
                </p>
                <img src="https://i.imgur.com/h9wF7Z5.png" class="imagencuerpo22">
              </div>      
            </div>
          </div>
        `
      };
      const Versiones = {
        template: `
          <div class="contacto contenedor">
            <div class="hola animate__animated animate__bounceInDown"> 
              <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="https://previews.123rf.com/images/teguhjatipras/teguhjatipras1702/teguhjatipras170200072/71497305-establecimiento-de-una-red-tcp-ip-protocolo-de-control-de-transmisi%C3%B3n-protocolo-de-internet-es-un-conju.jpg" class="d-block w-100" alt="...">
                  </div>
                </div
              </div>
              <div class="text-center margintext">
                <h1 class="titprin">Versiones de protocolo IP</h1>
                <p align="justify">
                  El protocolo IP establece el sistema de identificación que emplea Internet para enviar información ente dispositivos. Actualmente, existen dos versiones.
                </p>
                <img src="data:image/jpeg;base64,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" class="imagencuerpo3">
                <h2>IPv4</h2>
                <p align="justify">
                  IPv4 es la cuarta versión del protocolo IP. Se utiliza desde 1981, por lo que está implantada en la mayoría de dispositivos con acceso a Interna IPv4 usa direcciones de 32 bits, lo que significa que puede conectar hasta 232 dispositivos, limite que ya ha sido superado y que seguirá aumentando con el auge del Internet do las cosas. las direcciones están formadas por cuatro números —comprendidos entre el O y el 255— separados por puntos. Un ejemplo do dirección IPv4 seria 84.123.149.12.
                </p>
                <img src="https://media.fs.com/images/community/upload/wangEditor/201912/24/_1577182449_2uLs0pQcuT.jpg" class="imagencuerpo33">
                <h2>IPv6</h2>
                <p align="justify">
                  IPv6 es lo sexta versión del protocolo IP, sucesora de IPv4. Fundamentalmente, cumplo la misma función que IPv4, con la diferencia de que utiliza 128 bits para las direcciones, os decir, IPv6 puede conectar hasta 2128 dispositivos. lo que supone una ampliación del número de direcciones disponibles a una cantidad prácticamente ilimitada. Un ejemplo do dirección IPv6 seria 2a0c:0000:1450-.4be7:0000:8c136-e2 00:10f9, donde los grupos de cuatro dígitos formados por ceros se pueden comprimir del siguiente modo: <br> 2a0c::14504be7::8d061.200:1012. La migración a IPv6 se está produciendo de forma gradual, desde las grandes redes hasta las redes locales, lo que permitió el continuo crecimiento de Internet, así como el desarrollo de nuevos servicios.
                </p>
                <img src="https://media.fs.com/images/community/upload/wangEditor/201912/24/_1577183482_A3PIbtfqvU.jpg" class="imagencuerpo333">
              </div>  
            </div>
          </div>
        `
      };

      const Calculadora = {
        template = `
        <div class="portafolio contenedor">
            <div class="hola animate__animated animate__backInDown">
              <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="https://www.hebergementwebs.com/image/bd/bd5e6d5a7466551ae00284e55fa2e052.jpg/entrega-continua-definicion-ventajas-y-herramientas.jpg" class="d-block w-100" alt="...">
                  </div>
                </div
              </div>
              <h2>CALCULO DE IPv4</h2>
              <h5>DIRECCION IP</h5>
              <form onsubmit="return datos()" method="GET">
                <input type="number" placeholder="192" id="dir1">
                <input type="number" placeholder="198" id="dir2">
                <input type="number" placeholder="1" id="dir3">
                <input type="number" placeholder="1" id="dir4">
                <input type="number" placeholder="subredes" id="subr">
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        `
      }

      //2 
      const routes = [
        {path: '/', component: Tcpip},
        {path: '/capas', component: Capas},
        {path: '/versiones', component: Versiones}
        {path: '/calculadora', component: Calculadora}
      ];

      //3
      const router = new VueRouter({routes});

      //4
      new Vue({
        router
      }).$mount('#app');
