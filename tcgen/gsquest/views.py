from random import uniform
from django.http import HttpResponseRedirect
from django.shortcuts import render
from .forms import UserCompanyForm
from django.http import HttpResponse
from django.views.generic import View
from django.template.loader import get_template
from .utils import render_to_pdf
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, get_object_or_404
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from .models import useri
from django.contrib.auth.models import User
from django.views.generic import (
    ListView, 
    DetailView, 
    CreateView,
    UpdateView,
    DeleteView,
)



# class PostListView(ListView):
#     model = useri
#     context_object_name = 'ui'
#     ordering = ['-date_posted']
#     paginate_by = 5
#     template_name = 'input/home.html'
    
class UserPostListView(ListView):
    model = useri
    context_object_name = 'ui'
    fields =  [
        'cname',
        'websitename'
    ]
    paginate_by = 5
    template_name = 'user_posts.html'
    
    def get_queryset(self):
        user = get_object_or_404(User, username=self.kwargs.get('username'))
        return useri.objects.filter(author=user).order_by('-date_posted')
    

class PostDetailView(DetailView):
    model = useri
    fields = [
        'cname',
        'websitename'
    ]
    def get_context_data(self, **kwargs):
        global context
        context = super().get_context_data(**kwargs)
        context.update(
            cname = self.object.cname,
            wbn = self.object.websitename
        )
        return context
    
class PostCreateView(LoginRequiredMixin, CreateView):
    model = useri
    fields = [
        'cname',
        'websitename'
    ]
    
    def form_valid(self, form):
        form.instance.author = self.request.user
        return super().form_valid(form)
    
class PostUpdateView(LoginRequiredMixin, UserPassesTestMixin, UpdateView):
    model = useri
    fields = [
        'cname',
        'websitename'
    ]
    
    def form_valid(self, form):
        form.instance.author = self.request.user
        return super().form_valid(form)
    
    def test_func(self):
        post = self.get_object()
        return self.request.user == post.author

class PostDeleteView(LoginRequiredMixin, UserPassesTestMixin, DeleteView):
    model = useri 
    success_url = '/'          
    def test_func(self):
        post = self.get_object()
        return self.request.user == post.author    

# Create your views here.
@login_required
def uform(request):
    if request.method == 'POST':
        form = UserCompanyForm(request.POST)
        if form.is_valid():
            form.save()
            cname = form.cleaned_data.get('cname')
            template = get_template('tc.html')
            #global context
            context = {
            'cname': cname
        }
            html = template.render(context)
            pdf = render_to_pdf('tc.html', context)
            #pdf.save()
            if pdf:
                response = HttpResponse(pdf, content_type='application/pdf')
                filename = 'T&C_%s.pdf' %('terms')
                content = 'inline; filename="%s"' %(filename)
                
                download = request.GET.get('download')
                if download:
                    content = 'attachment; filename="%s"' %(filename)
                response['Content-Disposition'] = content
                return response
                
            return HttpResponse('Not found')
    else:
        form = UserCompanyForm()
    return render(request, 'uform.html', {'form': form})

class downloadpdf(View):
    def get(self, request, *args, **kwargs):
        pdf = render_to_pdf('gsquest/tp.html', context)
        response = HttpResponse(pdf, content_type='application/pdf')
        filename = 't&c_%s.pdf' %('terms')
        content =  'attachment; filename="%s"' %(filename)
        response['Content-Disposition'] = content
        return response
