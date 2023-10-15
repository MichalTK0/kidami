from djongo import models
import uuid


class BaseModel(models.Model):
    """
    There seems to be an issue with djongo's _id field. Will overwrite with this to fix any issues.
    This isn't perfect as you're essentially losing the ability to quickly navigate to specific models on admin site,
    because who can remember an uuid4 hash, but this is just a small personal project, so I'll let it slide.
    """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    class Meta:
        abstract = True

    @property
    def app_label(self):
        return self._meta.app_label  # annoying to set every time in every model.
