/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3646Component } from './comp-3646.component';

describe('Comp3646Component', () => {
  let component: Comp3646Component;
  let fixture: ComponentFixture<Comp3646Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3646Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3646Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
