import { testimonials } from "../constants";

const Testimonials = () => {
	return (
		<div className="mx-auto mt-20 ">
			<h1 className="text-3xl md:text-4xl lg:text-6xl tracking-wider text-center">
				What people are saying
			</h1>
			<div className="flex justify-center mt-12 px-10 sm:px-20">
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className="bg-neutral-900 rounded-xl p-4 font-normal"
						>
							<p className="tracking-wider">{testimonial.text}</p>
							<div className="flex items-center mt-10 flex-row-reverse sm:flex-row ">
								<img
									src={testimonial.image}
									alt={testimonial.user}
									className="rounded-full h-10 border border-neutral-300"
								/>
								<div className="mx-2  text-right sm:text-left ">
									<p>{testimonial.user}</p>
									<p className="text-neutral-400 tracking-tight italic text-sm">
										{testimonial.company}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
