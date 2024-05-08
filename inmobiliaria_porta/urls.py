from django.urls import path
from inmobiliaria_porta.views import *

app_name = 'inmobiliaria_porta'
urlpatterns = [
    path('login/', LoginView.as_view(), name='login'),
    path('reset/', ResetView.as_view(), name='reset'),
    path('register/', RegisterView.as_view(), name='register'),
    path('home/', HomeView.as_view(), name='home'),
    path('propriety/', viviendas, name='propriety'),
    path('proprietyCreate/', agregarViviendas, name= 'proprietyCreate'),
    path('contruction/', ContructionView.as_view(), name= 'contruction'),
    path('propriety/<int:id>/', propiedadInfo, name='proprietyInfo'),
    path("editar/<int:id>", editar, name="edit"),
    path('eliminarVivienda/<int:id>', eliminarVivienda, name='eliminarVivienda'),
   
    
]