from django.contrib import admin
from django.urls import path, include
from . import views
from meetings.views import home


urlpatterns = [
    path('', views.api_root, name='api-root'),
    path('create-meeting/', views.create_meeting, name='create-meeting'),  # Add this line
    path('', home),  # Home route
    path('admin/', admin.site.urls),
    path('api/', include('meetings.urls')),  # Include meetings app URLs
]