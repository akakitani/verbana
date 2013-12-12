from django.conf.urls import patterns, include, url
from django.views.generic import TemplateView, RedirectView

#from django.contrib import admin
#admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'verbana.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    #url(r'^admin/', include(admin.site.urls)),
    url(r'^robots\.txt$', 'django.views.generic.simple.direct_to_template', {'template': 'robots.txt', 'mimetype': 'text/plain'}),
    url(r'^favicon\.ico$', RedirectView.as_view(url='/staticfiles/images/favicon.ico'), name='favicon'),
    url(r'^$', TemplateView.as_view(template_name='index.html'), name='index'),
    url(r'^', RedirectView.as_view(url='/'), name='redirect'),
)
