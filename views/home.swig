{% extends 'layout.html' %}

{% block title %}
Flujos ilícitos
{% endblock %}

{% block head %}
  {% parent %}


  <link rel="stylesheet" href="css/normalize.css" type="text/css">
  <link rel="stylesheet" href="css/flexboxgrid.min.css" type="text/css">
  <link rel="stylesheet" href="css/newlanding.css" type="text/css">



{% endblock %}

{% block content %}

<nav class="navbar">
    <span class="navbar-toggle" id="js-navbar-toggle">
        <i class="fa fa-bars"></i>
    </span>
    <a href="#" class="logo">FLUJOS ILÍCITOS</a>
    <ul class="main-nav" id="js-menu">
        <li>
            <a href="#" class="nav-links">Los Casos</a>
        </li>
        <li>
            <a href="#" class="nav-links">Antecedentes</a>
        </li>
        <li>
            <a href="#" class="nav-links">Nota Metodológica</a>
        </li>
    </ul>
</nav>
<div id="home-container" class="">
  <div id="home-1" class="middle-md">
    <div class="row">
      <div class="col-xs-12
            col-sm-12
            col-md-12
            col-lg-12
            logotype">
          <h2>LA PISTA DEL DINERO: FLUJOS FINANCIEROS Y VIOLENCIA EN MÉXICO</h2>
          <p>Este proyecto forma parte de un esfuerzo por analizar las dimensiones financieras y económicas de la violencia en México. Inició como una colaboración con organizaciones de derechos humanos en México que acompañan a víctimas de graves crímenes, particularmente a familias de víctimas de desaparición forzada en Coahuila y Veracruz.</p>
          <p class="choise-place">Haz click en las siguientes imágenes para entrar a la sección dedicada a cada estado. </p>
      </div>
    </div>
    <div class="row ">
      <div class="col-xs-12
              col-sm-12
              col-md-12
              col-lg-12
              choise-places">
          <ul>
              <li>
                  <a href=""><img src="/img/coahuila.png" alt="">
                      <br>Coahuila</a>
              </li>
              <li>
                  <a href=""><img src="/img/veracruz.png" alt="">
                      <br>Veracruz</a>
              </li>
          </ul>
      </div>
    </div>
  </div>

<!-- <div ng-view></div> -->


<div class="row footer center-md center-xs">
  <div class="col-xs-12
        col-sm-12
        col-md-12
        col-lg-12
        column-1">
      <p>Con el apoyo de</p>
      <ul>
          <li>
              <a href="#"><img src="/img/logos/osf.png" alt="Open Society Fundations"></a>
          </li>
          <li>
              <a href="#"><img src="/img/logos/empower.png" alt="Empower"></a>
          </li>
      </ul>
  </div>
</div>
</div>

<script>
  new WOW().init();
  </script>
{% endblock %}
