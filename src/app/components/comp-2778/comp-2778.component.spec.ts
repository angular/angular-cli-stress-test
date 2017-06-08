/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2778Component } from './comp-2778.component';

describe('Comp2778Component', () => {
  let component: Comp2778Component;
  let fixture: ComponentFixture<Comp2778Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2778Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2778Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
