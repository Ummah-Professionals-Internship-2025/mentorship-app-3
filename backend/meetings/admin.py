from django.contrib import admin
from .models import Meeting, TimeOption, AvailabilityResponse, AvailabilityEntry

admin.site.register(Meeting)
admin.site.register(TimeOption)
admin.site.register(AvailabilityResponse)
admin.site.register(AvailabilityEntry)

