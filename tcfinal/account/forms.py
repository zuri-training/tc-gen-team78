from django import forms
from django.forms import ModelForm, widgets
from .models import Post
from django.contrib.auth.forms import PasswordChangeForm
from django.contrib.auth.models import User

class PostForm(ModelForm):
    class Meta:
        model = Post
        # fields = '__all__'
        # fields = ['name', 'country', 'industry', 'duration', 'Privacy', 'Advertisment']
        fields = ['website_name', 'company_address', 'website_url', 'country', 'policy_effective_date', 'industry', 'Privacy', 'Advertisment', 'gdrp_wording', 'term', 'poli']
        widgets = {
            'website_name': forms.TextInput(attrs={'class': 'input-wrapper'}),
            'company_address': forms.TextInput(attrs={'class': 'input-wrapper'}),
            'website_url': forms.TextInput(attrs={'class': 'input-wrapper'}),
            'country': forms.TextInput(attrs={'class': 'input-wrapper'}),
            'policy_effective_date': forms.TextInput(attrs={'class': 'input-wrapper'}),
            'industry': forms.Select(attrs={'class': 'input-wrapper'}),
            #'tcc': forms.Select(attrs={'class': 'input-wrapper'}),
            #'pcc': forms.Select(attrs={'class': 'input-wrapper'}),
            'Privacy': forms.NullBooleanSelect(attrs={'class': 'input-wrapper'}),
            'gdrp_wording': forms.NullBooleanSelect(attrs={'class': 'input-wrapper'}),
            'Advertisment': forms.NullBooleanSelect(attrs={'class': 'input-wrapper'}),
            'term': forms.NullBooleanSelect(attrs={'class': 'input-wrapper'}),
            'poli': forms.NullBooleanSelect(attrs={'class': 'input-wrapper'}),
         }

class PasswordChangingForm(PasswordChangeForm):
    old_password: forms.CharField(widget=forms.PasswordInput(attrs={'class': 'input-container'}))
    new_password1: forms.CharField(widget=forms.PasswordInput(attrs={'class': 'input-container'}))
    new_password2: forms.CharField(widget=forms.PasswordInput(attrs={'class': 'input-container'}))
    class Meta:
        model = User
        fields = ['old_password', 'new_password1', 'new_password2']