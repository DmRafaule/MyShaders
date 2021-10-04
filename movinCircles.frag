#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main(){
   vec2 coord = (gl_FragCoord.xy / u_resolution);
   float color = 0.0;
   vec2 translate = vec2(-0.5,-0.5);
   coord += translate;

   for(int i = 0; i < 20; i++){
      float radius = 0.3;
      float rad = radians(360.0 / 20.0) * float(i) + sin(u_time) * 8.0;

      color += 0.05 * 0.05 / length(coord + vec2(radius * cos(rad), radius * sin(rad)));
   }


   gl_FragColor = vec4(vec3(color),1.0);
}