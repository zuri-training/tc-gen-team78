from django.apps import AppConfig


class GsquestConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'gsquest'
    
    def ready(self):
      import gsquest.signals
