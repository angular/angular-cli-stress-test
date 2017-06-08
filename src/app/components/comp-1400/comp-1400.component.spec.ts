/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1400Component } from './comp-1400.component';

describe('Comp1400Component', () => {
  let component: Comp1400Component;
  let fixture: ComponentFixture<Comp1400Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1400Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1400Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
