from django.shortcuts import render
from rest_framework import generics
from site_app.models import Skill
from .serializers import SkillSerializer


class SkillList(generics.ListAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer
