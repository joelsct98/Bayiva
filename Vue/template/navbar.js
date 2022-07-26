new Vue({
    el: "#app",
    data: {
        navbarBLog: `
<nav id="header" class="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div class="container-fluid ">
          <a class="navbar-brand" href="../index.html">
            <img src="../img/logo.png" alt="logo-bayiba">
            <strong style="font-size: 35px;">Bayiva</strong>.com
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="../index.html">Inicio <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="blog.html">Blog</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link text-service dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Servicios
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="../index.html#Proyectos">Crear Paginas Web</a>
                  <a class="dropdown-item" href="../index.html#Proyectos">Servicio Técnico Personalizado </a>
                
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link text-tienda" href="tienda.html">Tienda<span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="../index.html#contacto">Contacto <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="sobremi.html">Sobre Mi <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-platzi" href="#suscribete" data-toggle="modal" data-target="#modelSus">Suscríbete <span class="sr-only">(current)</span></a>              </li>
            </ul>
          </div>
      </div>
    </nav>`,
        navbarP_blog: `
    <nav id="header" class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid ">
          <a class="navbar-brand" href="..\\..\\index.html">
            <img src="../../img/logo.png" alt="logo-bayiba">
            <strong>Bayiva</strong>.com
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="..\\..\\index.html">Inicio <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="..\\blog.html">Blog</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link text-service dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Servicios
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="..\\..\\index.html#Proyectos">Crear Paginas Web</a>
                  <a class="dropdown-item" href="..\\..\\index.html#Proyectos">Servicio Técnico Personalizado </a>
                  
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link text-tienda" href="..\\tienda.html">Tienda<span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="..\\..\\index.html#contacto">Contacto <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="..\\sobremi.html">Sobre Mi <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-platzi" href="#suscribete" data-toggle="modal" data-target="#modelSus">Suscríbete <span class="sr-only">(current)</span></a>
              </li>
            </ul>
          </div>
      </div>
    </nav>
`,
        navbarIndex: `
      <nav id="header" class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid ">
            <a class="navbar-brand" href="index.html">
              <img src="img/logo.png" alt="logo-bayiba">
              <strong>Bayiva</strong>.com
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="index.html">Inicio <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="paginas/blog.html">Blog</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link text-service dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Servicios
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#Proyectos">Crear Paginas Web</a>
                    <a class="dropdown-item" href="#Proyectos">Servicio Técnico Personalizado </a>
                   
                  </div>
                </li>
              <li class="nav-item">
                <a class="nav-link text-tienda" href="paginas/tienda.html">Tienda<span class="sr-only">(current)</span></a>
              </li>
                <li class="nav-item">
                  <a class="nav-link" href="#contacto">Contacto <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="paginas/sobremi.html">Sobre Mi <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-platzi" href="#suscribete" data-toggle="modal" data-target="#modelSus">Suscríbete <span class="sr-only">(current)</span></a>
                </li>
              </ul>
            </div>
        </div>
      </nav>
`,

    },
    methods: {}
})