from django.urls import path
from . import views
from .views import (
    #PostListView, 
    PostDetailView, 
    PostCreateView,
    PostUpdateView,
    PostDeleteView,
    UserPostListView, 
    PrivacyDetailView, 
    PrivacyCreateView,
    PrivacyUpdateView,
    PrivacyDeleteView,
    PrivacyPostListView,   
)
urlpatterns = [
    #path('blog/', PostListView.as_view(), name='blog-home'),
    path('user/<str:username>', UserPostListView.as_view(), name='user-posts'),
    path('ui/<int:pk>/delete', PostDeleteView.as_view(), name='post-delete'),
    path('ui/<int:pk>/update', PostUpdateView.as_view(), name='post-update'),
    path('ui/new/', PostCreateView.as_view(), name='ui-create'),
    path('ui/<int:pk>', PostDetailView.as_view(), name='post-detail'),
    
    path('userp/<str:username>', PrivacyPostListView.as_view(), name='user-posts'),
    path('pv/<int:pk>/delete', PrivacyDeleteView.as_view(), name='post-delete'),
    path('pv/<int:pk>/update', PrivacyUpdateView.as_view(), name='post-update'),
    path('pv/new/', PrivacyCreateView.as_view(), name='ui-create'),
    path('pv/<int:pk>', PrivacyDetailView.as_view(), name='post-detail'),
    
]