#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

void main(){
   vec2 coord = gl_FragCoord.xy;
   vec3 color = vec3(0.0);

   vec2 r=abs(coord.xy);
   color=vec3(r.x,0.7,0.5);

   gl_FragColor = vec4(color,0.1);
}