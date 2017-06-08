/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3050Component } from './comp-3050.component';

describe('Comp3050Component', () => {
  let component: Comp3050Component;
  let fixture: ComponentFixture<Comp3050Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3050Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3050Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
