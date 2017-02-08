using System;
using System.IO;
using LyoES;
using LyoES.EsClientInteraction;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using StructureMap;

namespace WebApplication
{
    public class Program
    {
        public static void Main(string[] args)
        {
            // var services = new ServiceCollection();

            // var container = new Container();
            // container.Configure(config => {
            //     config.Scan(_ =>
            //         {
            //             _.AssemblyContainingType(typeof(Program));
            //             _.WithDefaultConventions();
            //         });
            //     config.Populate(services);
            // });

            // var serviceProvider = container.GetInstance<IServiceProvider>();

            var host = new WebHostBuilder()
                .UseKestrel()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseIISIntegration()
                .UseStartup<Startup>()
                .Build();

            host.Run();
        }
    }
}
