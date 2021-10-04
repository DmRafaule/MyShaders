#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

uniform sampler2D u_tex0;

void main(){
   vec2 coord = gl_FragCoord.xy / max(u_resolution.x,u_resolution.y);
   vec3 color = vec3(0);
   // If you want to work with images go to settings.json and add images chanels
   gl_FragColor = texture2D(u_tex0,coord);
}