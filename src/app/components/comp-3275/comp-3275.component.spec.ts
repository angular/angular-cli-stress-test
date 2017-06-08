/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3275Component } from './comp-3275.component';

describe('Comp3275Component', () => {
  let component: Comp3275Component;
  let fixture: ComponentFixture<Comp3275Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3275Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3275Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
