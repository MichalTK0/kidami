from django.urls import path
from . import views

from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("experiences", views.experiences, name="experiences"),
    path("projects", views.projects, name="projects")
]
