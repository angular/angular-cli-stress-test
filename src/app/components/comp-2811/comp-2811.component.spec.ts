/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2811Component } from './comp-2811.component';

describe('Comp2811Component', () => {
  let component: Comp2811Component;
  let fixture: ComponentFixture<Comp2811Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2811Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2811Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
