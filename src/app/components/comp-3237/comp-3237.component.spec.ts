/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3237Component } from './comp-3237.component';

describe('Comp3237Component', () => {
  let component: Comp3237Component;
  let fixture: ComponentFixture<Comp3237Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3237Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3237Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
