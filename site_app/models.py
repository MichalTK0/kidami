from utils.model import BaseModel
from djongo import models


class MainSection(BaseModel):
    title = models.CharField(max_length=100)
    description = models.TextField()
    href = models.TextField(blank=True, null=True, default=None)
    order = models.PositiveIntegerField(blank=True, default=0)

    def __str__(self):
        return self.title


class Experience(BaseModel):
    title = models.CharField(max_length=100)
    company = models.CharField(blank=True, max_length=100)
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True, default=None)
    description = models.TextField()
    order = models.PositiveIntegerField(blank=True, default=0)

    def __str__(self):
        return f"{self.title} at {self.company}"


class Project(BaseModel):
    title = models.CharField(max_length=100)
    description = models.TextField()
    order = models.PositiveIntegerField(blank=True, default=0)
    href = models.TextField(blank=True, null=True, default=None)

    def __str__(self):
        return self.title
