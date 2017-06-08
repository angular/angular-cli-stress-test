/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1322Component } from './comp-1322.component';

describe('Comp1322Component', () => {
  let component: Comp1322Component;
  let fixture: ComponentFixture<Comp1322Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1322Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1322Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
