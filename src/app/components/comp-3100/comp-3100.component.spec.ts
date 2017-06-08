/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3100Component } from './comp-3100.component';

describe('Comp3100Component', () => {
  let component: Comp3100Component;
  let fixture: ComponentFixture<Comp3100Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3100Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
