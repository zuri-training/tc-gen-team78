"""tcgen URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.contrib.auth import views as auth_views
from django.urls import path, include
from users import views as user_views
from gsquest import views as ui_views
from users.forms import userlogin
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('home.urls')),
    
    path('qu/', include('gsquest.urls')),
    path('login/', auth_views.LoginView.as_view(template_name='login.html', authentication_form =userlogin), name='login'),
    #path('profile/', user_views.profile, name='profile'),
    path('logout/',
         auth_views.LogoutView.as_view(template_name='logout.html'),
         name='logout'),
    path('register/', user_views.register, name='register'),
    #path('login/', user_views.ulogin, name='login'),
    path('ui/', ui_views.uform, name='ui'),
    path('dpdf/', ui_views.downloadpdf.as_view(), name='pdf'),
    
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += staticfiles_urlpatterns()
