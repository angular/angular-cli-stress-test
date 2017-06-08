/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3444Component } from './comp-3444.component';

describe('Comp3444Component', () => {
  let component: Comp3444Component;
  let fixture: ComponentFixture<Comp3444Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3444Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3444Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
