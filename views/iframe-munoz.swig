{% extends 'layout.html' %}

{% block title %}
Flujos ilícitos
{% endblock %}

{% block head %}
  {% parent %}

{% endblock %}

{% block content %}
<nav class="navbar">
    <span class="navbar-toggle" id="js-navbar-toggle">
        <i class="fa fa-bars"></i>
    </span>
    <a href="/" class="logo">FLUJOS ILÍCITOS</a>
    <ul class="main-nav" id="js-menu">
        <li>
            <a href="/" class="nav-links">Inicio</a>
        </li>
        <li>
            <a href="/coahuila" class="nav-links">Coahuila</a>
        </li>
        <li>
            <a href="/veracruz" class="nav-links">Veracruz</a>
        </li>
        <li>
            <a href="/cargografias" class="nav-links">Cargografías</a>
        </li>
        <li>
            <a href="/en/iframe-munoz" class="nav-links">English</a>
        </li>
    </ul>
</nav>
<section id="home-container">
  <div class="container">
    <div id="home-1">
      <div class="row">
        <div class="col-xs-12
              col-sm-12
              col-md-12
              col-lg-12">
            <p><a href="/coahuila">< Regresar</a></p>
            <div class="resp-container">
                <iframe class="resp-iframe" src="https://embed.kumu.io/3f12aa02b924b2bd8814447bf01663cb" frameborder="0"></iframe>
            </div>
        </div>
      </div>
    </div>
  </div>
</section>


{# <script>
  new WOW().init();
  </script> #}
{% endblock %}
