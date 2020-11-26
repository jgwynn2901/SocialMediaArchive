using GraphQL;
using GraphQL.Server;
using GraphQL.Server.Ui.Playground;
using GraphQL.Types;
using GraphQL.SystemTextJson;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using SocialMediaArchive.GraphQL;
using SocialMediaArchive.Repositories;

namespace SocialMediaArchive
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            services.AddSingleton(Configuration);
            services.AddSingleton<IDocumentExecuter, DocumentExecuter>();
            services.AddSingleton<IDocumentWriter, DocumentWriter>();
            services.AddSingleton<PostRepository>();
            services.AddSingleton<FacebookQuery>();
            services.AddSingleton<ISchema, FacebookSchema>();
            services.AddGraphQL()
              .AddGraphTypes()
              .AddSystemTextJson(deserializerSettings => { }, serializerSettings => { });
            
            services.AddCors(options =>
            {
              options.AddPolicy(name: MyAllowSpecificOrigins,
                builder =>
                {
                  builder.WithOrigins("valhalla",
                    "valhalla:5000");
                });
            });
        }


        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            //app.UseHttpsRedirection();
            app.UseRouting();
            app.UseAuthorization();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
            app.UseCors(MyAllowSpecificOrigins);
            app.UseGraphQL<ISchema>();
            if (env.IsDevelopment())
            {
              app.UseGraphQLPlayground(new GraphQLPlaygroundOptions());
            }
        }
    }
}
