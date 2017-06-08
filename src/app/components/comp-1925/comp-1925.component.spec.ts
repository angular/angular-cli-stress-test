/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1925Component } from './comp-1925.component';

describe('Comp1925Component', () => {
  let component: Comp1925Component;
  let fixture: ComponentFixture<Comp1925Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1925Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1925Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
