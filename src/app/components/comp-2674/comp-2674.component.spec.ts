/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2674Component } from './comp-2674.component';

describe('Comp2674Component', () => {
  let component: Comp2674Component;
  let fixture: ComponentFixture<Comp2674Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2674Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2674Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
