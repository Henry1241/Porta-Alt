from django.urls import path
from inmobiliaria_porta.views import LoginView, ResetView, RegisterView, HomeView, ProprietyView, ProprietyCreateView, ContructionView, ProprietyInfoView

app_name = 'inmobiliaria_porta'
urlpatterns = [
    path('login/', LoginView.as_view(), name='login'),
    path('reset/', ResetView.as_view(), name='reset'),
    path('register/', RegisterView.as_view(), name='register'),
    path('home/', HomeView.as_view(), name='home'),
    path('propriety/', ProprietyView.as_view(), name='propriety'),
    path('propriety/create', ProprietyCreateView.as_view(), name= 'proprietyCreate'),
    path('contruction/', ContructionView.as_view(), name= 'contruction'),
    path('propriety/:id/', ProprietyInfoView.as_view(), name='proprietyInfo')
    
]