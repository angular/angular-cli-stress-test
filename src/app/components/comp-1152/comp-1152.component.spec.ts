/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1152Component } from './comp-1152.component';

describe('Comp1152Component', () => {
  let component: Comp1152Component;
  let fixture: ComponentFixture<Comp1152Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1152Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1152Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
