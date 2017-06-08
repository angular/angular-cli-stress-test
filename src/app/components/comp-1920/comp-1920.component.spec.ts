/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1920Component } from './comp-1920.component';

describe('Comp1920Component', () => {
  let component: Comp1920Component;
  let fixture: ComponentFixture<Comp1920Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1920Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1920Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
