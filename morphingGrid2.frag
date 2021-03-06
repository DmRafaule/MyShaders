#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

float random2d(vec2 coord){
   return fract(sin(dot(coord.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(){
   vec2 coord = gl_FragCoord.xy * 0.01;
   vec3 color = vec3(0.0, 0.0, 0.0);

   coord -= u_time + vec2(sin(coord.y), sin(coord.x));
   float rand01 = fract(random2d(floor(coord)) + u_time * 60.0);

   rand01 = 0.5 - length(fract(coord));

   gl_FragColor = vec4(rand01,0.0,0.0, 1.0);
}
