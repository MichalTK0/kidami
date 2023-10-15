from django.contrib import admin
from .models import *


@admin.register(MyModel)
class MyModelAdmin(admin.ModelAdmin):
    list_display = ('name', 'description')


admin.site.register(MainSection)
admin.site.register(Experience)
admin.site.register(ExperiencePoint)
