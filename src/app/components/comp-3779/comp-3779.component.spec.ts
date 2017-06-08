/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3779Component } from './comp-3779.component';

describe('Comp3779Component', () => {
  let component: Comp3779Component;
  let fixture: ComponentFixture<Comp3779Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3779Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3779Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
