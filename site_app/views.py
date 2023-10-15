from django.shortcuts import render
from .models import *


def index(request):
    main_data = MainSection.objects.all().order_by('order')
    return render(request, 'index.html', {'main_data': main_data})


def experiences(request):
    experience_data = Experience.objects.all().order_by('order')
    experience_points_data = ExperiencePoint.objects.all().order_by('order')
    return render(request, 'experiences.html', {'experiences': experience_data,
                                                'experience_points': experience_points_data})
