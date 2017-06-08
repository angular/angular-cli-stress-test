/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3920Component } from './comp-3920.component';

describe('Comp3920Component', () => {
  let component: Comp3920Component;
  let fixture: ComponentFixture<Comp3920Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3920Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3920Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
