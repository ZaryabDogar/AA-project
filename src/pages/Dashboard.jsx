const Dashboard = () => {
	return (
		<section className=" p-4 bg-[#000000] xl:py-0 py-12">
			<div className="flex flex-col-reverse lg:flex-row-reverse lg:justify-between    bg-[#106466] ">
				{/* Image Section */}
				<div className="lg:w-[45%] py-8 flex justify-center bg-[#D9DEE4]   items-center">
					<img
						src="/robo.png"
						className="xl:w-[300px] xl:h-[420px] lg:w-[200px] lg:h-[322px] sm:w-[200px] sm:h-[322px] w-[100px] h-[202px]"
						alt="robo"
					/>
				</div>

				{/* Form Section */}
				<div className="w-full h-full ">
					<video className="w-full  " autoPlay loop muted>
						<source src="bg.mp4" type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</div>
			</div>
		</section>
	);
};

export default Dashboard;
