from django.urls import path
from . import views
from .views import (
    #PostListView, 
    PostDetailView, 
    PostCreateView,
    PostUpdateView,
    PostDeleteView,
    UserPostListView,   
)
urlpatterns = [
    #path('blog/', PostListView.as_view(), name='blog-home'),
    path('user/<str:username>', UserPostListView.as_view(), name='user-posts'),
    path('ui/<int:pk>/delete', PostDeleteView.as_view(), name='post-delete'),
    path('ui/<int:pk>/update', PostUpdateView.as_view(), name='post-update'),
    path('ui/new/', PostCreateView.as_view(), name='post-create'),
    path('ui/<int:pk>', PostDetailView.as_view(), name='post-detail'),
    
]