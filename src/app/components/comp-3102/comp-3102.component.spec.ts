/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3102Component } from './comp-3102.component';

describe('Comp3102Component', () => {
  let component: Comp3102Component;
  let fixture: ComponentFixture<Comp3102Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3102Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
