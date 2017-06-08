/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3015Component } from './comp-3015.component';

describe('Comp3015Component', () => {
  let component: Comp3015Component;
  let fixture: ComponentFixture<Comp3015Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3015Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3015Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
