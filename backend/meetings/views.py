from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Meeting
import json

def home(request):
    return HttpResponse("Welcome to the API. Visit /admin/ or /api/")
def api_root(request):
    return JsonResponse({"message": "Welcome to the Meetings API!"})

@csrf_exempt  # Disable CSRF for simplicity (not recommended for production)
def create_meeting(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            meeting = Meeting.objects.create(
                name=data.get('name'),
                description=data.get('description')
            )
            return JsonResponse({'message': 'Meeting created successfully!', 'id': str(meeting.id)}, status=201)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
    return JsonResponse({'error': 'Invalid request method'}, status=405)