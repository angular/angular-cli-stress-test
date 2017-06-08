/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3051Component } from './comp-3051.component';

describe('Comp3051Component', () => {
  let component: Comp3051Component;
  let fixture: ComponentFixture<Comp3051Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3051Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3051Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
