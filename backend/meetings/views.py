from django.http import HttpResponse, JsonResponse

def home(request):
    return HttpResponse("Welcome to the API. Visit /admin/ or /api/")
def api_root(request):
    return JsonResponse({"message": "Welcome to the Meetings API!"})
