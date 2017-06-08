/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3223Component } from './comp-3223.component';

describe('Comp3223Component', () => {
  let component: Comp3223Component;
  let fixture: ComponentFixture<Comp3223Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3223Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3223Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
