/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3013Component } from './comp-3013.component';

describe('Comp3013Component', () => {
  let component: Comp3013Component;
  let fixture: ComponentFixture<Comp3013Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3013Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3013Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
