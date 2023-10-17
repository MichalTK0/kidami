import os


def common_context(request):
    email = os.environ.get("EMAIL", "NOT_EXPORTED")
    return {"email": email}
