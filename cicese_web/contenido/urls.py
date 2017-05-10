from django.conf.urls import url
from contenido import views

# Template tagging
app_name = 'contenido'

urlpatterns = [
    url(r'^datos/$', views.datos, name='datos'),
    url(r'^acceso/$', views.acceso, name='acceso'),
    url(r'^ayuda/$', views.ayuda, name='ayuda'),
    url(r'^contacto/$', views.contacto, name='contacto')
    ]
