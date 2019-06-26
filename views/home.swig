{% extends 'layout.html' %}

{% block title %}
Flujos ilícitos
{% endblock %}

{% block head %}
  {% parent %}

{% endblock %}

{% block content %}

<section id="home-container">
  <div class="container text-center">
    <div id="home-1">
      <div class="row">
        <div class="col-xs-12
              col-sm-12
              col-md-12
              col-lg-12">
            <h1>LA PISTA DEL DINERO: <br>FLUJOS FINANCIEROS Y VIOLENCIA EN MÉXICO</h1>
            <p class="main-text">Este proyecto forma parte de un esfuerzo por analizar las dimensiones financieras y económicas de la violencia en México. Inició como una colaboración con organizaciones de derechos humanos en México que acompañan a víctimas de graves crímenes, particularmente a familias de víctimas de desaparición forzada en Coahuila y Veracruz.</p>
            <p class="choise-place">Haz click en las siguientes imágenes para entrar a la sección dedicada a cada estado. </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center">
          <a href="/coahuila">
            <div class="hovereffect">
              <img class="img-responsive" src="/img/coahuila.png" alt="">
              <div class="overlay">
                <h2>COAHUILA</h2>
              </div>
            </div>
          </a>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center">
          <a href="/coahuila">
            <div class="hovereffect">
              <img class="img-responsive" src="/img/veracruz.png" alt="">
              <div class="overlay">
                <h2>VERACRUZ</h2>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
<section>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h3>ANTECEDENTES</h3>
        <p>Administraciones estatales pasadas tanto en Coahuila como en Veracruz han sido fuertemente señaladas no sólo por los multimillonarios desvíos de recursos públicos, sino también por indicios de colusión con organizaciones criminales y el aumento de graves violaciones a derechos humanos a manos de las fuerzas de seguridad del estado, muchas de estas por parte de fuerzas especiales en coordinación con fuerzas de seguridad federales.</p>
        <p>Aquí argumentamos que la lucha por el control de territorios (criminales), y la extracción de rentas de recursos naturales, va de la mano con la privatización del uso de la violencia para fines económicos, políticos y sociales. En estos territorios en disputa, la sociedad se enfrenta a procesos de despojo y exterminio, de hostigamiento y persecución, de precarización, de contaminación del medio ambiente, y, en general, a crecientes barreras al ejercicio pleno del derecho a la participación política y a la libre determinación.</p>
        <p>Es decir, la violencia en un marco de inseguridad es privatizada por diversos actores (funcionarios públicos, crimen organizado, empresas, élites locales) e instrumentalizada para el control territorial y social. Mientras tanto, la debilidad institucional, o la impunidad institucionalizada, garantiza la continuidad de un sistema quebrado para muchos, pero altamente funcional para quienes se benefician de él.</p>
        <h3>NOTA METODOLÓGICA</h3>
        <p>La visualización de las conexiones entre actores se basa principalmente en datos obtenidos del Registro de servidores públicos (Declaranet), el Sistema Integral de Gestión Registral (SIGER 2.0) y del Sistema Integral del Registro Público del Estado de Coahuila (SIRP). Relaciones familiares fueron obtenidas de fuentes públicas, y no pueden ser plenamente confirmas sin tener acceso al registro público civil.</p>
      </div>
    </div>
  </div>
</section>

<script>
  new WOW().init();
  </script>
{% endblock %}
