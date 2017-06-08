/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3081Component } from './comp-3081.component';

describe('Comp3081Component', () => {
  let component: Comp3081Component;
  let fixture: ComponentFixture<Comp3081Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3081Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3081Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
