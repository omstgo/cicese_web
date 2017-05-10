from django.shortcuts import render


# Create your views here.

def index(request):
    return render(request,'contenido/index.html')

def datos(request):
    return render(request, 'contenido/datos.html')

def acceso(request):
    return render(request,'contenido/acceso.html')

def ayuda(request):
    return render(request, 'contenido/ayuda.html')

def contacto(request):
    return render(request, 'contenido/contacto.html')
