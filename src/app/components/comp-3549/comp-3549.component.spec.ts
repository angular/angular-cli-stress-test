/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3549Component } from './comp-3549.component';

describe('Comp3549Component', () => {
  let component: Comp3549Component;
  let fixture: ComponentFixture<Comp3549Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3549Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3549Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
