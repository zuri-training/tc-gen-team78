from django.urls import path
from django.shortcuts import render
from . import views

urlpatterns = [
    path('register',views.register, name='register'),
    path('login',views.login, name='login'),
    path('logout',views.logout, name='logout'),
 
]