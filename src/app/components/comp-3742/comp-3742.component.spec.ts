/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3742Component } from './comp-3742.component';

describe('Comp3742Component', () => {
  let component: Comp3742Component;
  let fixture: ComponentFixture<Comp3742Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3742Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3742Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
