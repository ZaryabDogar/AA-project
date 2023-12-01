const Dashboard = () => {
	return (
		<section className="md:p-16 pt-16 p-4 bg-darkgreen">
			<div className="w-full bg-white shadow-lg">
				<div className="sm:p-12 p-3 ">
					<div className="flex justify-between items-center ">
						<p className="font-jost font-bold text-major md:text-[32px] sm:text-[25px] text-lg">
							STEGSEC Free Plan
						</p>
						<button className="font-[700] bg-major  sm:px-7 sm:py-5 px-3 py-3 text-btntext font-jost sm:text-[18px] text-sm">
							Download
						</button>
					</div>
				</div>
				<div className="sm:p-12 p-3 ">
					<p className="text-[#000000] font-jost font-bold  sm:text-[30px] text-xl leading-[43.5px]">
						Features
					</p>
				</div>
				<div className="sm:pl-12 p-1 py-1 bg-[#D8B08C] flex items-center space-x-4">
					<p className="font-jost font-[500] sm:text-[26px] text-xl sm:leading-[44.9px] leading-[25px] md:w-[35%] sm:w-[30%]">
						Hide Data:
					</p>
					<p className="font-jost font-[400] sm:text-[23px] text-lg sm:leading-[39.72px] leading-[20px] ">
						Hide textual or other types of files in multimedia files.
					</p>
				</div>
				<div className="sm:pl-12 p-1 py-1 bg-[#CBCBCB63] flex items-center space-x-4">
					<p className="font-jost font-[500] sm:text-[26px] text-xl sm:leading-[44.9px] leading-[25px] md:w-[35%] sm:w-[30%]">
						Extract Data:{' '}
					</p>
					<p className="font-jost font-[400] sm:text-[23px] text-lg sm:leading-[39.72px] leading-[20px] ">
						Retrieve hidden data from multimedia files.
					</p>
				</div>
				<div className="sm:pl-12 p-1 py-1 bg-[#D8B08C] flex items-center space-x-4">
					<p className="font-jost font-[500] sm:text-[26px] text-xl sm:leading-[44.9px] leading-[25px] md:w-[35%] sm:w-[30%]">
						Stop Operation:
					</p>
					<p className="font-jost font-[400] sm:text-[23px] text-lg sm:leading-[39.72px] leading-[20px] ">
						Cancel ongoing hiding or extracting processes.
					</p>
				</div>
				<div className="sm:p-12 p-3 ">
					<p className="text-[#000000] font-jost font-bold sm:text-[30px] text-xl leading-[43.5px]">
						Supported File Formats
					</p>
				</div>
				<div className="sm:pl-12 p-1 py-1 bg-[#D8B08C] flex items-center space-x-4">
					<p className="font-jost font-[500] sm:text-[26px] text-xl sm:leading-[44.9px] leading-[25px] md:w-[35%] sm:w-[30%]">
						Cover Files:
					</p>
					<p className="font-jost font-[400] sm:text-[23px] text-lg sm:leading-[39.72px] leading-[20px] ">
						png, jpg (Images), mp3, wav (Audio), mp4, avi, mkv (Video)
					</p>
				</div>
				<div className="sm:pl-12 p-1 py-1 bg-[#CBCBCB63] flex items-center space-x-4">
					<p className="font-jost font-[500] sm:text-[26px] text-xl sm:leading-[44.9px] leading-[25px] md:w-[45%] sm:w-[30%]">
						Files to be Hidden:
					</p>
					<p className="font-jost font-[400] sm:text-[23px] text-lg sm:leading-[39.72px] leading-[20px] ">
						txt (Text), docx, doc (Word), xlsx, xls (Excel), pptx, ppt
						(PowerPoint), pdf (PDF)
					</p>
				</div>

				<div className="p-20 flex items-center justify-center">
					<button className="font-[700] bg-major  sm:px-24 px-12 py-4 text-btntext font-jost sm:text-[18px] text-sm">
						Buy Premium
					</button>
				</div>
			</div>
		</section>
	);
};

export default Dashboard;
