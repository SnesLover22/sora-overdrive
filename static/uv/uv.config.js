self.__uv$config = {
    prefix: '/sora-overdrive/static/',
    bare: 'https://baresw.starttiw.org',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/sora-overdrive/static/uv/uv.handler.js',
    bundle: '/sora-overdrive/static/uv/uv.bundle.js',
    config: '/sora-overdrive/static/uv/uv.config.js',
    sw: '/sora-overdrive/static/uv/uv.sw.js',
};
