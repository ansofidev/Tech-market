export const ItemCardAnimation = () => {
  return (
    <div className="grid grid-cols-4 gap-4 min-[640px]:grid-cols-12 min-[1200px]:grid-cols-24 px-4 min-[640px]:px-8 min-[1200px]:px-0 min-[1200px]:max-w-[1136px] mx-auto pt-14 pb-4 min-[640px]:pt-18 min-[640px]:pb-6 min-[1200px]:pt-18 min-[1200px]:pb-10 gap-y-0">
      {/* Title */}
      <div className="col-span-full mb-8 min-[640px]:mb-10 text-[#F1F2F9] font-[montBold] leading-tight text-[22px] min-[640px]:text-[32px]">
        <h1
          className="relative overflow-hidden text-transparent select-none w-full h-8 min-[640px]:h-10 rounded animate-[shimmer_2s_ease-in-out_infinite]"
          style={{
            background:
              'linear-gradient(90deg, #181a29 25%, #2A2C3B 50%, #4A4C5B 75%, #2A2C3B 100%)',
            backgroundSize: '200% 100%',
          }}
        ></h1>
      </div>

      {/* Content */}
      <div className="col-span-full grid grid-cols-4 min-[640px]:grid-cols-12 min-[1200px]:grid-cols-24 gap-4 mb-14 min-[640px]:mb-16 min-[1200px]:mb-20">
        {/* Gallery (Thumbnails + Main image) */}
        <div className="col-span-full min-[640px]:col-span-7 min-[1200px]:col-span-12 mb-10">
          <div className="grid grid-cols-4 min-[640px]:grid-cols-7 min-[1200px]:grid-cols-12 gap-4">
            {/* Thumbnails */}
            <div className="col-span-full min-[640px]:col-span-1 min-[640px]:col-start-1 min-[1200px]:col-span-2 order-2 min-[640px]:order-1">
              <div className="grid grid-cols-4 min-[640px]:grid-cols-1 gap-2">
                <div
                  className="col-span-1 aspect-square cursor-pointer border border-[#181a29] relative overflow-hidden text-transparent select-none rounded animate-[shimmer_2s_ease-in-out_infinite]"
                  style={{
                    background:
                      'linear-gradient(90deg, #181a29 25%, #2A2C3B 50%, #4A4C5B 75%, #2A2C3B 100%)',
                    backgroundSize: '200% 100%',
                  }}
                ></div>
                <div
                  className="col-span-1 aspect-square cursor-pointer border border-[#181a29] relative overflow-hidden text-transparent select-none rounded animate-[shimmer_2s_ease-in-out_infinite]"
                  style={{
                    background:
                      'linear-gradient(90deg, #181a29 25%, #2A2C3B 50%, #4A4C5B 75%, #2A2C3B 100%)',
                    backgroundSize: '200% 100%',
                  }}
                ></div>
                <div
                  className="col-span-1 aspect-square cursor-pointer border border-[#181a29] relative overflow-hidden text-transparent select-none rounded animate-[shimmer_2s_ease-in-out_infinite]"
                  style={{
                    background:
                      'linear-gradient(90deg, #181a29 25%, #2A2C3B 50%, #4A4C5B 75%, #2A2C3B 100%)',
                    backgroundSize: '200% 100%',
                  }}
                ></div>
              </div>
            </div>

            {/* Main image */}
            <div className="col-span-full min-[640px]:col-span-6 min-[640px]:col-start-2 min-[1200px]:col-span-10 min-[1200px]:col-start-3 order-1 min-[640px]:order-2 aspect-square flex items-center justify-center">
              <div
                className="w-full h-full border border-[#181a29] relative overflow-hidden text-transparent select-none rounded animate-[shimmer_2s_ease-in-out_infinite]"
                style={{
                  background:
                    'linear-gradient(90deg, #181a29 25%, #2A2C3B 50%, #4A4C5B 75%, #2A2C3B 100%)',
                  backgroundSize: '200% 100%',
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Product info */}
        <div className="col-span-full min-[640px]:col-span-5 min-[1200px]:col-span-7 min-[1200px]:col-start-14">
          <div className="grid grid-cols-4 min-[640px]:grid-cols-5 min-[1200px]:grid-cols-7 gap-4">
            <div className="col-span-full">
              {/* Colors */}
              <div className="mb-6 border-b border-[#181a29] pb-6">
                <p
                  className="text-sm text-[#89939A] mb-2 relative overflow-hidden text-transparent select-none w-full h-4 rounded animate-[shimmer_2s_ease-in-out_infinite]"
                  style={{
                    background:
                      'linear-gradient(90deg, #181a29 25%, #2A2C3B 50%, #4A4C5B 75%, #2A2C3B 100%)',
                    backgroundSize: '200% 100%',
                  }}
                ></p>
                <div className="inline-grid grid-cols-6 gap-2">
                  <div className="col-span-1 grid grid-cols-3 gap-10">
                    <div
                      className="rounded-full h-8 w-8 border-2 border-[#181a29] relative overflow-hidden text-transparent select-none rounded animate-[shimmer_2s_ease-in-out_infinite]"
                      style={{
                        background:
                          'linear-gradient(90deg, #181a29 25%, #2A2C3B 50%, #4A4C5B 75%, #2A2C3B 100%)',
                        backgroundSize: '200% 100%',
                      }}
                    ></div>
                    <div
                      className="rounded-full h-8 w-8 border-2 border-[#181a29] relative overflow-hidden text-transparent select-none rounded animate-[shimmer_2s_ease-in-out_infinite]"
                      style={{
                        background:
                          'linear-gradient(90deg, #181a29 25%, #2A2C3B 50%, #4A4C5B 75%, #2A2C3B 100%)',
                        backgroundSize: '200% 100%',
                      }}
                    ></div>
                    <div
                      className="rounded-full h-8 w-8 border-2 border-[#181a29] relative overflow-hidden text-transparent select-none rounded animate-[shimmer_2s_ease-in-out_infinite]"
                      style={{
                        background:
                          'linear-gradient(90deg, #181a29 25%, #2A2C3B 50%, #4A4C5B 75%, #2A2C3B 100%)',
                        backgroundSize: '200% 100%',
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Capacity */}
              <div className="mb-8 border-b border-[#181a29] pb-6">
                <p
                  className="text-sm text-[#89939A] mb-2 relative overflow-hidden text-transparent select-none w-full h-4 rounded animate-[shimmer_2s_ease-in-out_infinite]"
                  style={{
                    background:
                      'linear-gradient(90deg, #181a29 25%, #2A2C3B 50%, #4A4C5B 75%, #2A2C3B 100%)',
                    backgroundSize: '200% 100%',
                  }}
                ></p>
                <div className="inline-grid grid-cols-5 gap-2">
                  <div className="col-span-1 grid grid-cols-3 gap-17">
                    <div
                      className="px-2 h-8 w-[55px] text-sm font-medium border border-[#181a29] relative overflow-hidden text-transparent select-none rounded animate-[shimmer_2s_ease-in-out_infinite]"
                      style={{
                        background:
                          'linear-gradient(90deg, #181a29 25%, #2A2C3B 50%, #4A4C5B 75%, #2A2C3B 100%)',
                        backgroundSize: '200% 100%',
                      }}
                    ></div>
                    <div
                      className="px-2 h-8 w-[55px] text-sm font-medium border border-[#181a29] relative overflow-hidden text-transparent select-none rounded animate-[shimmer_2s_ease-in-out_infinite]"
                      style={{
                        background:
                          'linear-gradient(90deg, #181a29 25%, #2A2C3B 50%, #4A4C5B 75%, #2A2C3B 100%)',
                        backgroundSize: '200% 100%',
                      }}
                    ></div>
                    <div
                      className="px-2 h-8 w-[55px] text-sm font-medium border border-[#181a29] relative overflow-hidden text-transparent select-none rounded animate-[shimmer_2s_ease-in-out_infinite]"
                      style={{
                        background:
                          'linear-gradient(90deg, #181a29 25%, #2A2C3B 50%, #4A4C5B 75%, #2A2C3B 100%)',
                        backgroundSize: '200% 100%',
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="inline-grid grid-cols-2 gap-2 items-center text-lg mb-4">
                <div className="col-span-1">
                  <span
                    className="text-white font-[montBold] relative overflow-hidden text-transparent select-none w-full h-6 rounded animate-[shimmer_2s_ease-in-out_infinite]"
                    style={{
                      background:
                        'linear-gradient(90deg, #181a29 25%, #2A2C3B 50%, #4A4C5B 75%, #2A2C3B 100%)',
                      backgroundSize: '200% 100%',
                    }}
                  ></span>
                </div>
                <div className="col-span-1">
                  <span
                    className="text-[#4A4C5B] line-through text-base relative overflow-hidden text-transparent select-none w-full h-5 rounded animate-[shimmer_2s_ease-in-out_infinite]"
                    style={{
                      background:
                        'linear-gradient(90deg, #181a29 25%, #2A2C3B 50%, #4A4C5B 75%, #2A2C3B 100%)',
                      backgroundSize: '200% 100%',
                    }}
                  ></span>
                </div>
              </div>

              {/* Buttons */}
              <div className="mb-8">
                <div className="flex gap-2 mb-8">
                  <div
                    className="flex-1 h-12 relative overflow-hidden text-transparent select-none rounded animate-[shimmer_2s_ease-in-out_infinite]"
                    style={{
                      background:
                        'linear-gradient(90deg, #181a29 25%, #2A2C3B 50%, #4A4C5B 75%, #2A2C3B 100%)',
                      backgroundSize: '200% 100%',
                    }}
                  ></div>
                  <div
                    className="h-12 w-12 relative overflow-hidden text-transparent select-none rounded animate-[shimmer_2s_ease-in-out_infinite]"
                    style={{
                      background:
                        'linear-gradient(90deg, #181a29 25%, #2A2C3B 50%, #4A4C5B 75%, #2A2C3B 100%)',
                      backgroundSize: '200% 100%',
                    }}
                  ></div>
                </div>
              </div>

              {/* Short tech specs */}
              <div className="flex flex-col gap-1 text-xs sm:text-sm text-[#89939A]">
                <div className="flex justify-between gap-2 text-[12px]">
                  <span
                    className="min-w-[80px] relative overflow-hidden text-transparent select-none w-[80px] h-3 rounded animate-[shimmer_2s_ease-in-out_infinite]"
                    style={{
                      background:
                        'linear-gradient(90deg, #181a29 25%, #2A2C3B 50%, #4A4C5B 75%, #2A2C3B 100%)',
                      backgroundSize: '200% 100%',
                    }}
                  ></span>
                  <span
                    className="text-white max-w-[200px] text-right break-words relative overflow-hidden text-transparent select-none w-[200px] h-3 rounded animate-[shimmer_2s_ease-in-out_infinite]"
                    style={{
                      background:
                        'linear-gradient(90deg, #181a29 25%, #2A2C3B 50%, #4A4C5B 75%, #2A2C3B 100%)',
                      backgroundSize: '200% 100%',
                    }}
                  ></span>
                </div>
                <div className="flex justify-between gap-2">
                  <span
                    className="min-w-[80px] relative overflow-hidden text-transparent select-none w-[80px] h-4 rounded animate-[shimmer_2s_ease-in-out_infinite]"
                    style={{
                      background:
                        'linear-gradient(90deg, #181a29 25%, #2A2C3B 50%, #4A4C5B 75%, #2A2C3B 100%)',
                      backgroundSize: '200% 100%',
                    }}
                  ></span>
                  <span
                    className="text-white max-w-[200px] text-right break-words relative overflow-hidden text-transparent select-none w-[200px] h-4 rounded animate-[shimmer_2s_ease-in-out_infinite]"
                    style={{
                      background:
                        'linear-gradient(90deg, #181a29 25%, #2A2C3B 50%, #4A4C5B 75%, #2A2C3B 100%)',
                      backgroundSize: '200% 100%',
                    }}
                  ></span>
                </div>
                <div className="flex justify-between gap-2">
                  <span
                    className="min-w-[80px] relative overflow-hidden text-transparent select-none w-[80px] h-4 rounded animate-[shimmer_2s_ease-in-out_infinite]"
                    style={{
                      background:
                        'linear-gradient(90deg, #181a29 25%, #2A2C3B 50%, #4A4C5B 75%, #2A2C3B 100%)',
                      backgroundSize: '200% 100%',
                    }}
                  ></span>
                  <span
                    className="text-white max-w-[200px] text-right break-words relative overflow-hidden text-transparent select-none w-[200px] h-4 rounded animate-[shimmer_2s_ease-in-out_infinite]"
                    style={{
                      background:
                        'linear-gradient(90deg, #181a29 25%, #2A2C3B 50%, #4A4C5B 75%, #2A2C3B 100%)',
                      backgroundSize: '200% 100%',
                    }}
                  ></span>
                </div>
                <div className="flex justify-between gap-2">
                  <span
                    className="min-w-[80px] relative overflow-hidden text-transparent select-none w-[80px] h-4 rounded animate-[shimmer_2s_ease-in-out_infinite]"
                    style={{
                      background:
                        'linear-gradient(90deg, #181a29 25%, #2A2C3B 50%, #4A4C5B 75%, #2A2C3B 100%)',
                      backgroundSize: '200% 100%',
                    }}
                  ></span>
                  <span
                    className="text-white max-w-[200px] text-right break-words relative overflow-hidden text-transparent select-none w-[200px] h-4 rounded animate-[shimmer_2s_ease-in-out_infinite]"
                    style={{
                      background:
                        'linear-gradient(90deg, #181a29 25%, #2A2C3B 50%, #4A4C5B 75%, #2A2C3B 100%)',
                      backgroundSize: '200% 100%',
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About and Tech specs */}
      <div className="col-span-full grid grid-cols-4 min-[1200px]:grid-cols-24 gap-4 mb-20">
        <div className="col-span-full min-[640px]:col-span-7 min-[1200px]:col-span-12">
          <p
            className="col-span-full text-[22px] font-semibold border-b border-[#181a29] pb-4 mb-8 relative overflow-hidden text-transparent select-none w-full h-6 rounded animate-[shimmer_2s_ease-in-out_infinite]"
            style={{
              background:
                'linear-gradient(90deg, #181a29 25%, #2A2C3B 50%, #4A4C5B 75%, #2A2C3B 100%)',
              backgroundSize: '200% 100%',
            }}
          ></p>
          <div className="col-span-full text-sm text-[#89939A] leading-relaxed">
            <div className="mb-8">
              <h4
                className="text-white text-base font-semibold text-[20px] mb-4 relative overflow-hidden text-transparent select-none w-full h-6 rounded animate-[shimmer_2s_ease-in-out_infinite]"
                style={{
                  background:
                    'linear-gradient(90deg, #181a29 25%, #2A2C3B 50%, #4A4C5B 75%, #2A2C3B 100%)',
                  backgroundSize: '200% 100%',
                }}
              ></h4>
              <p
                className="text-[14px] relative overflow-hidden text-transparent select-none w-full h-4 rounded animate-[shimmer_2s_ease-in-out_infinite]"
                style={{
                  background:
                    'linear-gradient(90deg, #181a29 25%, #2A2C3B 50%, #4A4C5B 75%, #2A2C3B 100%)',
                  backgroundSize: '200% 100%',
                }}
              ></p>
              <h4
                className="mt-6 text-white text-base font-semibold text-[20px] mb-4 relative overflow-hidden text-transparent select-none w-full h-6 rounded animate-[shimmer_2s_ease-in-out_infinite]"
                style={{
                  background:
                    'linear-gradient(90deg, #181a29 25%, #2A2C3B 50%, #4A4C5B 75%, #2A2C3B 100%)',
                  backgroundSize: '200% 100%',
                }}
              ></h4>
              <p
                className="text-[14px] relative overflow-hidden text-transparent select-none w-full h-4 rounded animate-[shimmer_2s_ease-in-out_infinite]"
                style={{
                  background:
                    'linear-gradient(90deg, #181a29 25%, #2A2C3B 50%, #4A4C5B 75%, #2A2C3B 100%)',
                  backgroundSize: '200% 100%',
                }}
              ></p>
              <h4
                className="mt-6 text-white text-base font-semibold text-[20px] mb-4 relative overflow-hidden text-transparent select-none w-full h-6 rounded animate-[shimmer_2s_ease-in-out_infinite]"
                style={{
                  background:
                    'linear-gradient(90deg, #181a29 25%, #2A2C3B 50%, #4A4C5B 75%, #2A2C3B 100%)',
                  backgroundSize: '200% 100%',
                }}
              ></h4>
              <p
                className="text-[14px] relative overflow-hidden text-transparent select-none w-full h-4 rounded animate-[shimmer_2s_ease-in-out_infinite]"
                style={{
                  background:
                    'linear-gradient(90deg, #181a29 25%, #2A2C3B 50%, #4A4C5B 75%, #2A2C3B 100%)',
                  backgroundSize: '200% 100%',
                }}
              ></p>
            </div>
          </div>
        </div>

        <div className="col-span-full min-[640px]:col-span-5 min-[1200px]:col-span-11 min-[1200px]:col-start-14">
          <p
            className="text-[22px] font-semibold border-b border-[#181a29] pb-4 mb-8 relative overflow-hidden text-transparent select-none w-full h-6 rounded animate-[shimmer_2s_ease-in-out_infinite]"
            style={{
              background:
                'linear-gradient(90deg, #181a29 25%, #2A2C3B 50%, #4A4C5B 75%, #2A2C3B 100%)',
              backgroundSize: '200% 100%',
            }}
          ></p>
          <ul className="text-[14px] text-[#89939A] space-y-2">
            {[...Array(8)].map((_, i) => (
              <li key={i} className="flex justify-between">
                <span
                  className="relative overflow-hidden text-transparent select-none w-24 h-4 rounded animate-[shimmer_2s_ease-in-out_infinite]"
                  style={{
                    background:
                      'linear-gradient(90deg, #181a29 25%, #2A2C3B 50%, #4A4C5B 75%, #2A2C3B 100%)',
                    backgroundSize: '200% 100%',
                  }}
                ></span>
                <span
                  className="text-white relative overflow-hidden text-transparent select-none w-40 h-4 rounded animate-[shimmer_2s_ease-in-out_infinite]"
                  style={{
                    background:
                      'linear-gradient(90deg, #181a29 25%, #2A2C3B 50%, #4A4C5B 75%, #2A2C3B 100%)',
                    backgroundSize: '200% 100%',
                  }}
                ></span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* You may also like */}
      <div className="col-span-full">
        <div
          className="w-full h-[200px] relative overflow-hidden text-transparent select-none rounded animate-[shimmer_2s_ease-in-out_infinite]"
          style={{
            background:
              'linear-gradient(90deg, #181a29 25%, #2A2C3B 50%, #4A4C5B 75%, #2A2C3B 100%)',
            backgroundSize: '200% 100%',
          }}
        ></div>
      </div>
    </div>
  );
};
