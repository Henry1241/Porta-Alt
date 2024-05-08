from django.shortcuts import render, redirect
from django.views.generic import TemplateView
# Create your views here.
from .forms import *

from inmobiliaria_porta.models import *


class LoginView(TemplateView):
    template_name = "login.html"

class ResetView(TemplateView):
    template_name = "reset.html"

class RegisterView(TemplateView):
    template_name = "register.html"

class HomeView(TemplateView):
    template_name = "home.html"

class ProprietyView(TemplateView):
    template_name = "propriety.html"

class ProprietyCreateView(TemplateView):
    template_name = "proprietyCreate.html"

class ContructionView(TemplateView):
    template_name = "contruction.html"

class ProprietyInfoView(TemplateView):
    template_name = "PropietyInfoView.html"
    

def editar(request, id):
    viviendas = vivienda.objects.get(pk=id)
    form = ViviendaForm(instance=viviendas)

    if request.method == 'POST':
        form = ViviendaForm(request.POST, instance=viviendas)
        if form.is_valid():
            form.save()
            return redirect('/propriety/')

    return render(request, 'proprietyCreate.html', {'form': form})



def propiedadInfo(request, id):
    viviendas = vivienda.objects.get(pk=id)
    return render(request, "ProprietyInfoView.html", {"vivienda": viviendas})



def agregarViviendas(request):
    if request.method == 'POST':
        form = ViviendaForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/propriety/')
        else:
            print(form.errors)
    else:
        form = ViviendaForm()
    return render(request, 'proprietyCreate.html', {'form': form})



def viviendas(request):
    viviendas = vivienda.objects.all()
    return render(request, 'propriety.html', {'viviendas': viviendas})

def eliminarVivienda(request, id):
    viviendas = vivienda.objects.get(pk=id)
    
    if request.method == 'POST':
        viviendas.delete()
        return redirect('/propriety/')

    return render(request, 'eliminarPropriety.html', {'vivienda': viviendas})