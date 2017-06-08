/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3783Component } from './comp-3783.component';

describe('Comp3783Component', () => {
  let component: Comp3783Component;
  let fixture: ComponentFixture<Comp3783Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3783Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3783Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
