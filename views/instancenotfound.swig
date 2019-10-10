{% extends 'layout.html' %}

{% block title %}
Not Found | Flujos ilícitos
{% endblock %}

{% block head %}
  {% parent %}
 
{% endblock %}

{% block content %}

    <div class="main">
        <div ng-view="" id="cargoContainer" class="ng-scope"><div class="module ng-scope">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="description">
                            Oops..
                        </div>
                        <div class="content">
                            {# <h1>This instance was not found. :-( <br />
                            How about to create it? We can help you! <br/>
                            Write us at:<strong>
                            equipo@cargografias.org</strong></h1> #}

                            <h1>Page not Found</h1>
                            <p>Apologies, but the page you requested could not be found.</p>
                            <br>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

{% endblock %}
 




