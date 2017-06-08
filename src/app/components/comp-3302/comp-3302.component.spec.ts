/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3302Component } from './comp-3302.component';

describe('Comp3302Component', () => {
  let component: Comp3302Component;
  let fixture: ComponentFixture<Comp3302Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3302Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3302Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
