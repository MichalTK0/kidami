from django import template
import re

register = template.Library()


@register.filter
def word_count(value):
    words = re.findall(r'\w+', value)
    return len(words)
