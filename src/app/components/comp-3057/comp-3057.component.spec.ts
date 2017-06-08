/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3057Component } from './comp-3057.component';

describe('Comp3057Component', () => {
  let component: Comp3057Component;
  let fixture: ComponentFixture<Comp3057Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3057Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3057Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
