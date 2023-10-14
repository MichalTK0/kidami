from django.shortcuts import render
from .models import MyModel


def index(request):
    my_model_data = MyModel.objects.all()
    return render(request, 'my_model_template.html', {'my_model_data': my_model_data})
