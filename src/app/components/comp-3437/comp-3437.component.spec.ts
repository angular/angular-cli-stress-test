/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3437Component } from './comp-3437.component';

describe('Comp3437Component', () => {
  let component: Comp3437Component;
  let fixture: ComponentFixture<Comp3437Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3437Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3437Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
