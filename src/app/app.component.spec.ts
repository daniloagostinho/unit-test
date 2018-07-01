import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe("A suite is just a function", function() {
  var a;

  it("and so is a spec", function() {
    a = 222;

    expect(a).toBe(true);
  });
});
