from django.shortcuts import render
from django.views.generic import TemplateView
# Create your views here.


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