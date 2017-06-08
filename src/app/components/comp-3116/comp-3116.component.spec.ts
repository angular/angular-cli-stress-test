/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3116Component } from './comp-3116.component';

describe('Comp3116Component', () => {
  let component: Comp3116Component;
  let fixture: ComponentFixture<Comp3116Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3116Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3116Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
