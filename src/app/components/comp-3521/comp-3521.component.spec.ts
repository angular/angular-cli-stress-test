/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3521Component } from './comp-3521.component';

describe('Comp3521Component', () => {
  let component: Comp3521Component;
  let fixture: ComponentFixture<Comp3521Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3521Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3521Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
