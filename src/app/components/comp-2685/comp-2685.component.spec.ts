/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2685Component } from './comp-2685.component';

describe('Comp2685Component', () => {
  let component: Comp2685Component;
  let fixture: ComponentFixture<Comp2685Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2685Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2685Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
