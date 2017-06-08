/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3225Component } from './comp-3225.component';

describe('Comp3225Component', () => {
  let component: Comp3225Component;
  let fixture: ComponentFixture<Comp3225Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3225Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3225Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
