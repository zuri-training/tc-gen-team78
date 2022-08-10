from django.urls import path

from .import views

urlpatterns = [
    path('login', views.login, name='login'),
    path('register', views.register, name="register"),
    path('logout', views.logout, name="logout"),
    path('userlogged', views.userlogged, name="userlogged"),
    path('new', views.new, name='new'),
    path('tcgenerated', views.tcgenerated, name='tcgenerated'),
    path('template', views.template, name='template'),
    path('temp/<slug:slug_text>/', views.temp, name='temp'),
    path('templated/<slug:slug_text>/', views.templated, name='templated'),
    path('profile', views.profile, name='profile'),
    path('team', views.team, name='team'),
   
    # path('read', views.PostDetailView.as_view(), name="post_detail")
]