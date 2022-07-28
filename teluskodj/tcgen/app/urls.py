from django.urls import path
from django.shortcuts import render
from . import views

urlpatterns = [
    path('details',views.details, name='details'),
    path('add',views.add, name='add'),
    
 
]