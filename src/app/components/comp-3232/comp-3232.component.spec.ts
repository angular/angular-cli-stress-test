/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3232Component } from './comp-3232.component';

describe('Comp3232Component', () => {
  let component: Comp3232Component;
  let fixture: ComponentFixture<Comp3232Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3232Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3232Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
