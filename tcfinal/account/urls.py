from django.urls import path

from .import views
from .views import PostUpdateView, PasswordsChangeView

urlpatterns = [
    path('login', views.login, name='login'),
    path('register', views.register, name="register"),
    path('logout', views.logout, name="logout"),
    path('userlogged', views.userlogged, name="userlogged"),
    path('teamdetails', views.teamdetails, name="teamdetails"),
    path('new', views.new, name='new'),
    path('newtc', views.newtc, name='newtc'),
    path('template', views.template, name='template'),
    path('draft', views.draft, name='draft'),
    path('templated/<slug:slug_text>/', views.templated, name='templated'),
    path('delete_template/<slug:slug_text>/', views.delete_template, name='delete_template'),
    path('temp2/<slug:slug_text>/', views.temp2, name='temp2'),
    path('profile', views.profile, name='profile'),
    path('faq', views.faq, name='faq'),
    path('templated/<slug:slug>/update/', PostUpdateView.as_view(), name='update'),
    path('password/', PasswordsChangeView.as_view(template_name='password_reset/change-password.html')),
    path('password_change_done', views.password_change_done, name='password_change_done'),

]