from django.shortcuts import render
from django.views.generic import TemplateView
# Create your views here.

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
    template_name = "conotruction.html"

class ProprietyInfoView(TemplateView):
    template_name = "PropietyInfoView.html"
    

def edit(request, id):
    vivienda = vivienda.objects.get(pk=id)
    return render(request, "edit.html", {"vivienda": vivienda})

def viviendas(request):
    viviendas = vivienda.objects.all()
    return render(request, 'propriety.html', {'viviendas': viviendas})