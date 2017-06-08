/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3327Component } from './comp-3327.component';

describe('Comp3327Component', () => {
  let component: Comp3327Component;
  let fixture: ComponentFixture<Comp3327Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3327Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3327Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
