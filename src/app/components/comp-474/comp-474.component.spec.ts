/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp474Component } from './comp-474.component';

describe('Comp474Component', () => {
  let component: Comp474Component;
  let fixture: ComponentFixture<Comp474Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp474Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp474Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
